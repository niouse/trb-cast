import React, { Component } from 'react';
import factories from "./../server/factories.defaults.js"


export default function FactoriesDataService(){
    return (WrappedComponent)=>{
	console.log('loading factories data service')
        class _FactoriesDataService extends Component {

            constructor(props){
                super(props);
            }



            
            render (){
                let factoriesList=factories.map((item, index)=>{
                    return {factoryName: item.factoryName}
                })
                return (
                    factories && factories[0] ?
                    <WrappedComponent
                        {...this.props}
                        factory = {factories}
                        factoriesList = {factoriesList}
                        getOneFactory = {factories[0]}
                    /> :
                    <p>loading</p>
                )
            }
        }

        return _FactoriesDataService
    }
}

