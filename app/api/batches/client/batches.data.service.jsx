

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {batchesMongo} from "./../batches.js"


export default function BatchesDataService(){
    return (WrappedComponent)=>{

         class _BatchesComponentDataService0 extends Component {

            constructor(props){
                super(props);
            }



            render (){
                return (
                    this.props.batchesList && this.props.batchesList[0] ?
                    <WrappedComponent
                        {...this.props}
                        batche = {this.props.batche}
                        batchesList = {this.props.batchesList}
                        getOneBatche = {this.props.getOneBatche}
                    /> :
                    <p>loading</p>
                )
            }
        }

        const _BatchesDataService1 = createContainer((props) => {

          let batcheSubOne = Meteor.subscribe("oneBatches", props.batcheId)  
          let batcheSubList = Meteor.subscribe("batchesList")
          return {
            ...props,
            batche : batchesMongo.find({_id : props.batcheId}).fetch()[0],
            batchesList : batchesMongo.find({}/*, {fields : {name : 1}}*/).fetch(),
          };
        }, _BatchesComponentDataService0);


        return class _BatchesDataService2 extends Component {

            constructor(props){
                super(props);
                this.state = {
                    batcheId : null
                }
            }

            getOneBatche(id){
                this.setState({
                    batcheId : id
                })
            }

            render (){
                return (
                    <_BatchesDataService1
                        {...this.props}
                        batcheId = {this.state.batcheId}
                        getOneBatche={(id)=>this.getOneBatche(id)}
                    /> 
                )
            }
        }

    }
}

