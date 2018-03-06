
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//TEMPLATES CHILD
import BottomNavigation from "./trb-cast-home-bottom-navigation.template.jsx"


export default function TrbCastHome_Template(childs) {
    return (wrappedComponent) => {
        const $TrbCastHome_Template = (props) => {
            let styles = props.styles
            let text = props.text
            const BatchSelect = <childs.trbCastSelect 
                  pfinis={props.pfinis} 
                  pfinisList={props.pfinisList}
                  selectedBatches={props.selectedBatches}
                  setPfinis={props.setPfinis}
                  setHomeState={props.setHomeState}
                  />
            
            const DeltaRoofPerf = <childs.trbCastConsult 
                                      selectedBatches={props.selectedBatches}
                                      selectedPfini={props.selectedPfini}
                                      pfinis={props.pfinis}
                                      />
            const PerfCompare =  <childs.trbCastCompare />     
            
            
            return (
                <div id="trb-cast-home-container" style={styles.container}>
                    <div style={styles.core}>
                        {props.selectedIndex === 0 && BatchSelect}
                        {props.selectedIndex === 1 && DeltaRoofPerf}
                        {props.selectedIndex === 2 && PerfCompare}
                    </div>
                    <BottomNavigation 
                        styles={styles}
                        selectedIndex={props.selectedIndex}
                        selectPage={props.selectPage}
                        />
                    </div>
            );
        }
        $TrbCastHome_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCastHome_Template
    }
}
    