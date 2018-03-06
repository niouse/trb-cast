
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List, ListItem} from 'material-ui/List';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Drawer from 'material-ui/Drawer';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Close from 'material-ui/svg-icons/navigation/close';

const TrbCastConsultList_Template = (props) => {
    //const styles=props.styles
    const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};
    return (
      <Drawer 
          open={props.openList}
          onRequestChange={()=>props.toggleStateBool("openList")}
          docked={false}
                       >
            <List>
                <ListItem 
                   style={{cursor:"pointer", borderBottom:"1px solid red"}}
                   primaryText="Fermer" 
                   onClick={()=>props.toggleStateBool('openList')}
                   rightIcon={<Close />}
                   />
            </List>
            
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        {props.selectedBatches.map((batch, index)=>{
            return <RadioButton
                    key={index}
                    value={index}
                    label={batch.deliveryDate}
                    style={styles.radioButton}
                  />
        })}

    </RadioButtonGroup>
  </Drawer>
    );
}



TrbCastConsultList_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastConsultList_Template