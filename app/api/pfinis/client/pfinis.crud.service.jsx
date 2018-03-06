
import React, { Component } from 'react';
import pfinisSchema from "./../pfinis.schema.js";
import {pfinisMongo} from "./../pfinis.js";

export default function PfinisCrudService(){
	return (WrappedComponent)=>{
        var pfinisCrudContext = pfinisSchema.namedContext("pfinisCrudOp")

        return class _PfinisCrudService extends Component {

            constructor(props){
                super(props);
            }

            createPfini(options , callback){
                pfinisSchema.clean(options);
                if(pfinisCrudContext.validate(options)){
                    pfinisMongo.insert(options, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+pfinisCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            readPfini(options , callback){

            }

            updatePfini(id, options , callback){
                console.log(options)
                //pfinisSchema.clean(options);
                if(pfinisCrudContext.validate(options)){
                    pfinisMongo.update({_id : id}, {$set : options}, callback);
                }
                else {
                    let err = {}
                    let res = false
                    err.reason = "Problematic keys :"+pfinisCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
                    callback(err, res)
                }
            }

            deletePfini(id , callback){
                pfinisMongo.remove({_id : id}, callback);
            }

            render (){
                return (
                    <WrappedComponent
                        {...this.props}
                        createPfini = {this.createPfini}
                        readPfini = {this.readPfini}
                        updatePfini = {this.updatePfini}
                        deletePfini = {this.deletePfini}
                    />
                )
            }
        }
    }
}
