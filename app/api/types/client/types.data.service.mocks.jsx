import React, { Component } from 'react';
import types from "./../server/types.defaults.js"


export default function TypesDataService(){
    return (WrappedComponent)=>{
		console.log('loading types data service')
        class _TypesDataService extends Component {

            constructor(props){
                super(props);
            }



            render (){
                let typesList=types.map((item, index)=>{
                    return {
                        typeCode: item.typeCode,
                        type : item.nameFr
                    }
                })
                return (
                    types && types[0] ?
                    <WrappedComponent
                        {...this.props}
                        types = {types}
                        typesList = {typesList}
                        getOneType = {types[0]}
                    /> :
                    <p>loading</p>
                )
            }
        }

        return _TypesDataService
    }
}

