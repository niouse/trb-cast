
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



import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';
import Sort from 'material-ui/svg-icons/content/sort';
import DateRange from 'material-ui/svg-icons/action/date-range';
import SortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha';

import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Close from 'material-ui/svg-icons/navigation/close';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Search from 'material-ui/svg-icons/action/search.js';


export default function TrbCastSelectDrawer_Template() {
    return (wrappedComponent) => {
        const $TrbCastSelectDrawer_Template = (props) => {
            let styles = props.styles
            let text = props.text

            
            return (
                   <Drawer 
                       open={props.openFilters}
                       width={props.width}
                       containerStyle={{display:"flex", flexDirection:"column"}}
                       >
                        <List>
                            <ListItem 
                               style={{cursor:"pointer", borderBottom:"1px solid red"}}
                               primaryText="Fermer" 
                               onClick={()=>props.toggleStateBool('openFilters')}
                               rightIcon={<Close />}
                               />
                            <ListItem 
                               style={{cursor:"pointer", borderBottom:"1px solid red"}}
                               primaryText="Rafraichir" 
                               onClick={props.resetFilters}
                               rightIcon={<Refresh />}
                               />
                        </List>
                       <List
                           style={{flex:"1", overflow:"auto"}}
                           >
                           
                           <ListItem primaryText="Données pero." rightToggle={<Toggle />}/>
                           
                           
                           <Divider />
                           
                           
                           <props.selectMenu 
                               primaryText="Client"
                               floatingLabelText="Nom du client"
                               floatingLabelSelect="Choisir dans la liste"
                               list={props.factoriesList}
                               displayedKey="factoryName"
                               filterKey={"factoryName"}
                               setFilter={props.setFilter}
                               filters={props.filters}
                               />
                           
                                  
                           
                           <Divider />
                           
                           <props.selectMenu 
                               primaryText="Pfinis"
                               floatingLabelText="Code Pfinis"
                               floatingLabelSelect="Choisir dans la liste"
                               list={props.pfinisList}
                               displayedKey="pfinis"
                               filterKey={"pfinis"}
                               setFilter={props.setFilter}
                               filters={props.filters}
                               />
                           
                                                   
                           <Divider />
                           
                            <props.selectMenu 
                               primaryText="Type de pièce"
                               floatingLabelText="Type de pièce"
                               floatingLabelSelect="Choisir dans la liste"
                               list={props.typesList}
                               displayedKey="type"
                               filterKey={"typeCode"}
                               setFilter={props.setFilter}
                               filters={props.filters}
                               />
                           
                           <Divider />     
                       </List>
                        <List
                            style={{borderTop:"1px solid red"}}
                            >
                            <ListItem 
                                    primaryText={`Trouvés: ${props.numberOfItems}`}
                                    />
                            </List>
                    </Drawer>
            );
        }
        $TrbCastSelectDrawer_Template.propTypes = {
           // styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $TrbCastSelectDrawer_Template
    }
}
    