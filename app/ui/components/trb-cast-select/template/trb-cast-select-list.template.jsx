
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
 import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';

const TrbCastSelectList_Template = (props) => {
    const styles=props.styles
    return (
           <div style={styles.list}>
                <List>
                    {props.pfinis.map((item, index)=>{
                        let productName= (item.productName.length > 20) ? (item.productName.substring(0,20)+"...") : item.productName;
                        let isAllSelected=false
                        return (
                            <ListItem 
                                key={index} 
                                primaryText={productName}
                                primaryTogglesNestedList={false}
                                leftCheckbox={<Checkbox onCheck={()=>props.selectAllBatches(item.pfinis)} checked={item.isSelected}/>}
                                secondaryText={<div style={{fontSize:"0.7em"}}>{item.factoryName }</div>}
                                nestedItems={[
                                    ...item.batches.map((batch, index)=>{
                                    let isTrbCastSelected = props.selectedBatches.indexOf(batch)!= -1
                                    return <ListItem 
                                               key={index+1}
                                               leftCheckbox={<Checkbox onCheck={()=>props.selectOneBatch(item.pfinis, batch.batchNumber)} checked={batch.isSelected}/>}
                                               primaryText={
                                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                                        <div>{batch.batchNumber}</div>
                                                        <div>{batch.deliveryDate}</div>
                                                    </div>
                                                }
                                               secondaryText={
                                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                                        <div>{batch.variant}</div>
                                                        <div>{batch.quantity}</div>
                                                    </div>
                                                }
                                               />
                                })
                                ]}
                                />

                        )
                    })}
                </List>
            </div>
    );
}



TrbCastSelectList_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastSelectList_Template