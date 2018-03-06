
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TrbCastConsultGeneral from "./trb-cast-consult-general.template.jsx"
import TrbCastConsultFabrication from "./trb-cast-consult-fabrication.template.jsx"
import TrbCastConsultPerf from "./trb-cast-consult-perf.template.jsx"
import TrbCastConsultGallery from "./trb-cast-consult-gallery.template.jsx"
import TrbCastConsultList from "./trb-cast-consult-list.template.jsx"

import TrbCastConsultRoofPerf from "./trb-cast-consult-roof-perf.template.jsx"

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
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


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
import ActionHome from 'material-ui/svg-icons/action/home';
import Info from 'material-ui/svg-icons/action/info-outline';

const perfDelta = {
        "batchNumber": "1605",
        "pfinis": "PFINIS0018064",
        "variant": "KAST_53B50FS_FM",
        "nomenclature": "NOM0001617",
        "quantity": "1",
        "deliveryDate": "19/04/2017",
        "productName": "Voûte de four à 6 refroidisseurs",
        "studyNumber": "17-031-001",
        "clientName": "APERAM CHATELET",
        "factoryName": "APERAM CHATELET",
        "netWeight": "9734",
        "batchNumber": "1605",
        "targetPerf": "150",
        "conceteBatch": "161098",
        "roofNumber": "1",
        "waterPercent": "4.9",
        "status": "Terminé",
        "initialCalculatedWeight": "4100",
        "waterWeight": "156",
        "initialMeasuredWeight": "3970",
        "firstCycleWeight": "3865",
        "secondCycleWeight": "3845",
        "measuredPerf": "72",
        "remarks": "ciment coréen",
        "clientRemarks": "Casse d'électrode - pièce fortement usée"
}
const data = {
    "_id": "sED4Cqxyij4ozg6ud",
    "pfinis": "PFINIS0018064",
    "productName": "Voûte de four à 6 refroidisseurs",
    "productCode":"T0001",
    "studyNumber": "17-031-001",
    "clientName": "APERAM CHATELET",
    "factoryName": "APERAM CHATELET",
    "netWeight": "9734",
    "batches": [
        {
            "batchNumber": "1605",
            "reference": "PFINIS0018064",
            "variant": "KAST_53B50FS_FM",
            "nomenclature": "NOM0001617",
            "quantity": "1",
            "deliveryDate": "19/04/2017",
            "status": "Terminé",
            "perfDelta": {
                "batchNumber": "1605",
                "targetPerf": "150",
                "conceteBatch": "161098",
                "roofNumber": "1",
                "waterPercent": "4.9",
                "initialCalculatedWeight": "4100",
                "waterWeight": "156",
                "initialMeasuredWeight": "3970",
                "firstCycleWeight": "3865",
                "secondCycleWeight": "3845",
                "measuredPerf": "72",
                "remarks": "ciment coréen",
                "clientRemarks": "Casse d'électrode - pièce fortement usée"
            }
        }
    ]
}

export default function TrbCastConsult_Template() {
    return (wrappedComponent) => {
        const $TrbCastConsult_Template = (props) => {
            let styles = props.styles
            let text = props.text
            
            const InfoItem=(props)=>{
                return <ListItem 
                             primaryText={props.primaryText}
                             leftIcon={props.leftIcon}
                             primaryTogglesNestedList={true}
                             {...props.rightIcon}
                             nestedItems={[
                                 <ListItem
                                     innerDivStyle={{padding:0, margin:0}}
                                     key={0}
                                     primaryText={props.content}
                                    />
                             ]}
                             />
            }
            
            let InfoList=[
                {
                    primaryText : "Général",
                    leftIcon : <Info />,
                    content : <TrbCastConsultGeneral infos={data}/>
                },
                {
                    primaryText : "Fabrication",
                    leftIcon : <Info />,
                    content : <TrbCastConsultFabrication infos={perfDelta}/>
                },
                {
                    primaryText : <TrbCastConsultPerf infos={perfDelta}/>,
                    leftIcon : <Info />,
                    rightIcon : {rightIcon : <ArrowDown color={(Number(perfDelta.measuredPerf)>Number(perfDelta.targetPerf))? "green":"red"}/>}
                },
                {
                    primaryText : "Profil d'usure",
                    leftIcon : <Info />,
                    content : <TrbCastConsultRoofPerf />
                },
                {
                    primaryText : "Images",
                    leftIcon : <Info />,
                    content :  <TrbCastConsultGallery styles={styles}/>
                },
                {
                    primaryText : "Mesures",
                    leftIcon : <Info />,
                    content :  <div>Pas de mesures enregistrées</div>
                },
                {
                    primaryText : "Commentaires",
                    leftIcon : <Info />,
                    content :  <div>Pas de commentaires enregistrés</div>
                },
                {
                    primaryText : "Plans",
                    leftIcon : <Info />,
                    content :  <div>Pas de plans enregistrés</div>
                },
                
                
            ]

            return (
                 <div id="delta-roof-perf-container" style={styles.container}>
                     <Subheader>{props.selectedPfini.name}</Subheader>
                     <FlatButton label="List" onClick={()=>props.toggleStateBool("openList")}/>
                     <List style={styles.list}>  
                         {InfoList.map((item, index)=>{return <InfoItem key={index} {...item}/>})}
                     </List>
					 <TrbCastConsultList 
                            openList={props.openList}
                            toggleStateBool={props.toggleStateBool}
                            selectedBatches={props.selectedBatches}
                         />
				</div> 
            );
        }
        $TrbCastConsult_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCastConsult_Template
    }
}
    

