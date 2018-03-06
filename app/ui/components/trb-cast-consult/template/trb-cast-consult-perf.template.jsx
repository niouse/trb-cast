
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TrbCastConsultPerf_Template = (props) => {
    const styles=props.styles
    return (
           <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>Performances</div>
                 <div>{props.infos.measuredPerf} sur {props.infos.targetPerf}</div>
                 <div>{Number(props.infos.measuredPerf)/Number(props.infos.targetPerf)*100}%</div>
             </div>
    );
}



TrbCastConsultPerf_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastConsultPerf_Template