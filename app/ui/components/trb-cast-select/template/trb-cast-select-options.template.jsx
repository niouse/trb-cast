
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


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon  />
  </IconButton>
);



const TrbCastSelectOptions_Template = (props) => {
    const styles=props.styles
    return (
           <div id="batch-select-options" style={styles.header}>
                       <IconMenu
                          iconButtonElement={<IconButton><Sort /></IconButton>}
                          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                          targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                          <MenuItem primaryText="Nom client"  onClick={()=>props.sortList("factoryName")} leftIcon={<SortByAlpha />}/>
                          <MenuItem primaryText="Nom produit" onClick={()=>props.sortList("productName")} leftIcon={<SortByAlpha />}/>
                          <MenuItem primaryText="Code pfinis" onClick={()=>props.sortList("pfinis")} leftIcon={<DateRange />}/>
                        </IconMenu>
                 <IconButton tooltip="SVG Icon">
                  <ArrowUp />
                </IconButton>
                <IconButton tooltip="SVG Icon">
                  <ArrowDown />
                </IconButton>
                <FlatButton 
                    label={"FILTRES "+ props.numberOfFilters}
                    style={{margin:"auto"}}
                    onClick={()=>props.toggleStateBool("openFilters")}
                    />       
            </div>
    );
}



TrbCastSelectOptions_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastSelectOptions_Template