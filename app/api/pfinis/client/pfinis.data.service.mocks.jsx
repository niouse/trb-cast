import React, { Component } from 'react';
import pfinis from "./../server/pfinis.defaults.js"


export default function PfinisDataService(){
    return (WrappedComponent)=>{
		console.log('loading pfinis data service')
        class _PfinisDataService extends Component {

            constructor(props){
                super(props);
            }



            render (){
                let pfinisList=pfinis.map((item, index)=>{
                    return {pfinis: item.pfinis}
                })
                return (
                    pfinis && pfinis[0] ?
                    <WrappedComponent
                        {...this.props}
                        pfinis = {pfinis}
                        pfinisList = {pfinisList}
                        getOnePfini = {pfinis[0]}
                    /> :
                    <p>loading</p>
                )
            }
        }

        return _PfinisDataService
    }
}

