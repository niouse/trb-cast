
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function TrbCastSelect_Api(_optional) {
    return (WrappedComponent) => {
        class $TrbCastSelect_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    openFilters:false,
                    openSortOptions:false,
                    filters:{
                        clientName : false,
                        factoryName:false,
                        pfinis : false,
                        typeCode: false,
                        industryName : false,
                        type : false,
                        date : false,
                    },
                    pfinis:props.pfinis,
                }
                
                this.selectedPfini
                this.selectedBatches=[]
                this.pfinis=props.pfinis
                
                this.selectOnePfini=this.selectOnePfini.bind(this)
                this.toggleStateBool=this.toggleStateBool.bind(this)
                this.selectOneBatch=this.selectOneBatch.bind(this)
                this.selectAllBatches=this.selectAllBatches.bind(this)
                this.setFilter=this.setFilter.bind(this)
                this.removeOneBatch=this.removeOneBatch.bind(this)
                this.findOneBatch=this.findOneBatch.bind(this)
                this.resetFilters=this.resetFilters.bind(this)
                this.sortList=this.sortList.bind(this)
                this.filterList=this.filterList.bind(this)
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {
            }
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
            
            computeNumberOfFilters(list){
                let nb=0
                for (var key in list){
                    if(list[key]!=false) nb++
                }
                return nb
            }   
            
            selectOneBatch(pfinis, batchNumber){
                
                 let temp=this.pfinis.map((item)=>{
                     if(item.pfinis===pfinis){
                         item.isSelected=false 
                         //let Pfini=item
                         item.batches.forEach((batch)=>{
                             if(batch.batchNumber===batchNumber){
                                  batch.isSelected=!batch.isSelected
                                 if (batch.isSelected) {
                                     this.insertOneBatch(batch)
                                     this.selectOnePfini(item)
                                 }
                                 else this.removeOneBatch(batch)
                             }
                         })
                     }
                     return item
                 })
                
                 //Update parent state
                this.props.setHomeState("pfinis", temp)
            }
            
            selectOnePfini(pfini){
                 this.props.setHomeState("selectedPfini", {name : pfini.productName})
            }
            
            findOneBatch(pfinis, batchNumber){
                 let batch = this.pfinis.filter((item, index)=>{
                    return item.pfinis===pfinis
                })[0].batches.filter((item2, index2)=>{
                    return item2.batchNumber===batchNumber
                })[0]
                 
                 return batch
            }
            
            finOnePfini(pfinis){
                
            }
            
            removeOneBatch(batch){
                let test = this.selectedBatches.indexOf(batch)
                this.selectedBatches.splice(test, 1)
                this.props.setHomeState("selectedBatches", this.selectedBatches)
            }
            
            insertOneBatch(item){
                this.selectedBatches.push(item)
                this.props.setHomeState("selectedBatches", this.selectedBatches)
            }
            
            removeOneBatch(batch){
                let test = this.selectedBatches.indexOf(batch)
                this.selectedBatches.splice(test, 1)
                console.log(this.selectedBatches)
                this.props.setHomeState("selectedBatches", this.selectedBatches)
            }
            
            selectAllBatches(pfinis){
                 let temp=this.pfinis.map((item)=>{
                     if(item.pfinis===pfinis){
                         this.selectOnePfini(item)
                         item.isSelected=!item.isSelected
                         item.batches.forEach((batch)=>{
                              batch.isSelected=item.isSelected
                                 if (batch.isSelected) this.insertOneBatch(batch)
                                 else this.removeOneBatch(batch)
                         })
                     }
                     return item
                 })
                
                //Update state
                this.props.setHomeState("pfinis", temp)
            }
            
            resetFilters(){
                
                let filters=this.state.filters
                
                for (var key in filters){
                    filters[key]=false
                }
                
                this.props.setHomeState("pfinis", this.state.pfinis)
                this.setState({
                    filters:filters,
                })
            }     
            
            setFilter(filter, value){  
                
                let filters=this.state.filters
                filters[filter]=value                
                this.setState({
                    filters:filters
                }, this.filterList)
               
                
            }
            
            filterList(){
                let temp=this.state.pfinis
                for (var key in this.state.filters){
                    let filter = key
                    let value = this.state.filters[filter]
                    if (this.state.filters[key]!=false){
                        temp=temp.filter((item, index)=>{
                            return item[filter]===value || value===false
                        })
                    }
                }
                
                this.props.setHomeState("pfinis", temp)
            }
            
            sortList(key){
                function compare(a,b) {
                  if (a[key] < b[key])
                    return -1;
                  if (a[key] > b[key])
                    return 1;
                  return 0;
                }
                
                this.props.setHomeState("pfinis", this.pfinis.sort(compare))
            }

            render() {
                
                let numberOfItems=this.props.pfinis.length
                return <WrappedComponent
				{...this.props}
                openFilters={this.state.openFilters}
                toggleStateBool={this.toggleStateBool}
                openSortOptions={this.state.openSortOptions}
                numberOfFilters={this.computeNumberOfFilters(this.state.filters)}
                numberOfItems={numberOfItems}
                selectOneBatch={this.selectOneBatch}
                selectAllBatches={this.selectAllBatches}
                setFilter={this.setFilter}
                filters={this.state.filters}
                resetFilters={this.resetFilters}
                sortList={this.sortList}
				/>
            }
        }
        $TrbCastSelect_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $TrbCastSelect_Api
    }
}
    