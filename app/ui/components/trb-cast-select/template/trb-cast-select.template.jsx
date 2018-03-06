
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TrbCastSelectDrawer from "./trb-cast-select-drawer.template.jsx"
import TrbCastSelectList from "./trb-cast-select-list.template.jsx"
import TrbCastSelectOptions from "./trb-cast-select-options.template.jsx"

@TrbCastSelectDrawer()
class $TrbCastSelectDrawer{}



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



export default function TrbCastSelect_Template(comp) {
    return (wrappedComponent) => {
        const $TrbCastSelect_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-cast-select-container" className="container" style={styles.container}>
                    
                    <TrbCastSelectOptions 
                        styles={props.styles}
                        sortList={props.sortList}
                        numberOfFilters={props.numberOfFilters}
                        toggleStateBool={props.toggleStateBool}
                        />
                    <Divider />
                    <TrbCastSelectList 
                        styles={styles}
                        pfinis={props.pfinis}
                        selectAllBatches={props.selectAllBatches}
                        selectOneBatch={props.selectOneBatch}
                        selectedBatches={props.selectedBatches}
                        />
                   
                   <$TrbCastSelectDrawer 
                       openFilters={props.openFilters}
                       toggleStateBool={props.toggleStateBool}
                       factoriesList={props.factoriesList}
                       pfinisList={props.pfinisList}
                       typesList={props.typesList}
                       productsList={props.productsList}
                       selectMenu={comp.selectMenu}
                       width={320}
                       setFilter={props.setFilter}
                       filters={props.filters}
                       resetFilters={props.resetFilters}
                       numberOfItems={props.numberOfItems}
                      />
				</div>
            );
        }
        $TrbCastSelect_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCastSelect_Template
    }
}
    