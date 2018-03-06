
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function SelectMenu_Api(_optional) {
    return (WrappedComponent) => {
        class $SelectMenu_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    list: props.list,
                    found:props.found,
                    selectedItem:props.list[0]
                }
                this.searchInList=this.searchInList.bind(this)
                this.selectItem=this.selectItem.bind(this)
                this.toggleFilter=this.toggleFilter.bind(this)
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            
            sortList(list){

			}
            
            searchInList(event){
				event.preventDefault();
				var updatedList = this.props.list;

				updatedList=updatedList.filter((item)=>{
					//console.log(event.target.value.toLowerCase())
				  return item[this.props.filterKey].toLowerCase().search(
					event.currentTarget.value.toLowerCase()) !== -1;
				});
				this.setState({
                    list: updatedList,
                    selectedItem:updatedList[0],
                });
			}
            
            selectItem(event, index, value){  
                /*let selectedItem ={}
                if(value==="all"){
                    selectedItem.name="all"
                }
                else{
                    selectedItem=this.props.list.filter((item, index)=>{return item[this.props.filterKey]===value})[0]
                }*/
                
                this.setState({
                    selectedItem:this.props.list.filter((item, index)=>{return item[this.props.filterKey]===value})[0]
                })
                this.props.setFilter(this.props.filterKey, value)
            }
            
            toggleFilter(filter){
                let isToggled=this.props.filters[this.props.filterKey]!==false
                if(isToggled){
                    this.props.setFilter(this.props.filterKey, false)
                }
                else{
                    this.props.setFilter(this.props.filterKey, this.state.selectedItem[this.props.filterKey])
                }
            }

            render() {
                let isToggled=this.props.filters[this.props.filterKey]!==false
                let value= this.state.selectedItem[this.props.filterKey]
                
                return <WrappedComponent
				{...this.props}
				list={this.state.list}
                searchInList={this.searchInList}
                selectedItem={this.state.selectedItem}
                selectItem={this.selectItem}
                toggleFilter={this.toggleFilter}
                isToggled={isToggled}
                value={value}
				/>
            }
        }
        $SelectMenu_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SelectMenu_Api
    }
}
    