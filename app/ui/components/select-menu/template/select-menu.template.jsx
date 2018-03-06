
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';

import Search from 'material-ui/svg-icons/action/search.js';


export default function SelectMenu_Template() {
    return (wrappedComponent) => {
        const $SelectMenu_Template = (props) => {
            let styles = props.styles
            let text = props.text
            
            const MyToggle= <Toggle toggled={props.isToggled} onToggle={props.toggleFilter}/>
            
            return (
                <div id="select-menu-template-container">
                    <ListItem
                        primaryText={props.primaryText}
                        rightToggle={MyToggle}
                                    />,
                   <ListItem
                        leftIcon={<Search />}
                        innerDivStyle={styles.listItem}
                        primaryText={
                                <SelectField
                                  value={props.value}
                                  onChange={props.selectItem}
                                >
                                    {/*<MenuItem key={"a0"} value={"all"} primaryText={"all"} />*/}
                                  {props.list.map((item, index)=>{
                                        return  (
                                            <MenuItem 
                                                key={index} 
                                                value={item[props.filterKey]} 
                                                primaryText={item[props.displayedKey]} 
                                                />
                                        )
                                    })}
                                </SelectField>
                           }
                       />
                   </div>
                   )
        }
        /*$SelectMenu_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };*/
        return $SelectMenu_Template
    }
}
    