

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {pfinisMongo} from "./../pfinis.js"


export default function PfinisDataService(){
    return (WrappedComponent)=>{
	//console.log('data service')
        class _PfinisComponentDataService0 extends Component {

            constructor(props){
                console.log('service0')
                super(props);
            }



            render (){
                return (
                    this.props.pfinisList && this.props.pfinisList[0] ?
                    <WrappedComponent
                        {...this.props}
                        pfini = {this.props.pfini}
                        pfinisList = {this.props.pfinisList}
                        getOnePfini = {this.props.getOnePfini}
                    /> :
                    <p>loading</p>
                )
            }
        }

        
        const _PfinisDataService1 = createContainer((props) => {
            let test = Meteor.subscribe("pfinis")
            //console.log(test)
          let pfiniSubOne = Meteor.subscribe("onePfinis", props.pfiniId)  
          let pfiniSubList = Meteor.subscribe("pfinisList")
         /* console.log('fetching data')
            console.log(pfinisMongo.find({}).fetch())*/
          return {
            ...props,
            pfini : pfinisMongo.find({_id : props.pfiniId}).fetch()[0],
            pfinisList : pfinisMongo.find({}/*, {fields : {name : 1}}*/).fetch(),
          };
        }, _PfinisComponentDataService0);


        
        class _PfinisDataService2 extends Component {

            constructor(props){
                console.log('service2')
                super(props);
                this.state = {
                    pfiniId : null
                }
            }

            getOnePfini(id){
                this.setState({
                    pfiniId : id
                })
            }

            render (){

                return (
                    <_PfinisDataService1
                        {...this.props}
                        pfiniId = {this.state.pfiniId}
                        getOnePfini={(id)=>this.getOnePfini(id)}
                    /> 
                )
            }
        }

        return _PfinisDataService2
    }
}

