
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbCastHome_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbCastHome_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    selectedIndex : 0,
                    selectedBatches:[],
                    pfinis : props.pfinis.map((item, index)=>{
                        item.isSelected=false
                        item.batches.map((batch, index)=>{
                            batch.isSelected=false
                            return batch
                        })
                        return item
                    }),
                    selectedPfini:false,
                }
                this.selectPage=this.selectPage.bind(this)
                this.setHomeState=this.setHomeState.bind(this)
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
            
            selectPage(index){
                this.setState({
                    selectedIndex : index
                })
            }   
            
            setHomeState(key, value){
                this.setState({
                    [key]:value
                })
            }

            render() {
                return <WrappedComponent
				{...this.props}
                selectPage={this.selectPage}
                selectedIndex={this.state.selectedIndex}
                pfinis={this.state.pfinis}
                selectedBatches={this.state.selectedBatches}
                selectedPfini={this.state.selectedPfini}
                setHomeState={this.setHomeState}
                
				/>
            }
        }
        $TrbCastHome_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbCastHome_Api
    }
}
