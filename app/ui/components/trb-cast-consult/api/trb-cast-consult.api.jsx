
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbCastConsult_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbCastConsult_Api extends Component {
            constructor(props) {
                super(props);
                
                /*let pfini=props.pfinis.filter((item)=>{return item.productName===props.selectedPfini.name})[0]
                console.log('selectedPfini',pfini)
                if (pfini.batches){
                    console.log("hey")
                     pfini.batches=pfini.batches.filter((item)=>{
                    return  props.selectedBatches.indexOf(item) !== -1
                
                    })
                    console.log('selectedPfini',pfini)
                }*/
               
                
                let initialUnit//= props.selectedBatches[0] ? props.selectedBatches[0].units[0] : false
                if (props.selectedBatches[0]){
                    if (props.selectedBatches[0].units[0]){
                        initialUnit=props.selectedBatches[0].units[0]
                    }
                }
                else initialUnit=false
                
                this.state = {
                    selectedUnit:initialUnit,
                    openList:false
                }
                
                this.toggleStateBool=this.toggleStateBool.bind(this)
                
                props.selectedBatches.map((item, index)=>{
                   
                })
                
                console.log(props.selectedBatches)
                
                /*const data = [
                    {
                        "netWeight": "9734",
                        "batches": [
                            {
                                "status": "Terminé",
                                "units": [
                                    {
                                        "batchNumber": "1605",
                                        "targetPerf": "150",
                                    },
                                    {
                                        "batchNumber": "1605",
                                        "targetPerf": "1500",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "netWeight": "46532",
                        "batches": [
                            {
                                "status": "en cours",
                                "units": [
                                    {
                                        "batchNumber": "6546",
                                        "targetPerf": "200",
                                    },
                                    {
                                        "batchNumber": "6587",
                                        "targetPerf": "300",
                                    }
                                ]
                            }
                        ]
                    }
                ]
                
                const result = []
                
                
                function flatten(data){
                    data.forEach((pfini, index)=>{
                            pfini.batches.forEach((batch)=>{
                                    batch.units.forEach((unit)=>{
                                        let obj=Object.assign({}, pfini, batch, unit)
                                        result.push(obj)
                                    })
                                    
                                
                            })
                    })
                }
                
                flatten(data)*/
                //console.log(result)
            }
            
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
            
            toggleStateBool(key){
                this.setState({
                    [key]:!this.state[key]
                })
            }

            select(test) {
                return test
            }

            render() {
                return this.props.selectedBatches[0] ? <WrappedComponent
                    {...this.props}
                    selectedUnit={this.state.selectedUnit}
                    openList={this.state.openList}
                    toggleStateBool={this.toggleStateBool}
                    /> :
                <div style={
                        {
                            width:"100%", 
                            flex:1, 
                            display:"flex", 
                            justifyContent:"center", 
                            alignItems:"center", 
                            fontSize:"2em", 
                            textAlign:"center",
                            fontWeight : "bold",
                            color : this.props.stylesOptions.theme.colors.primary,
                            fontFamily:"Play"
                        }
                    }>Pas d'élement selectionné</div>
                
            }
        }
        $TrbCastConsult_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbCastConsult_Api
    }
}
    