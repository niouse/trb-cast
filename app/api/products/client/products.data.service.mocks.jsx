import React, { Component } from 'react';
import products from "./../server/products.defaults.js"


export default function ProductDataService(){
    return (WrappedComponent)=>{
        console.log('loading products data service')
        class _ProductDataService extends Component {
            constructor(props){
                super(props);
            }


            render (){
                 let productsList=products.map((item, index)=>{
                    return {name: item.name}
                })
                return (
                    products && products[0] ?
                    <WrappedComponent
                        {...this.props}
                        products = {products}
                        productsList = {products}
                        getOneProduct = {products[0]}
                    /> :
                    <p>loading</p>
                )
            }
        }

        return _ProductDataService
    }
}