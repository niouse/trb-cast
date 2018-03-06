
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

const TrbCastConsultFabrication_Template = (props) => {
    const styles=props.styles
    const tableList=[
        {
            column1 : "Poids net",
            column2 : props.infos.netWeight
        },
        {
            column1 : "Lot béton",
            column2 : props.infos.conceteBatch
        },
        {
            column1 : "Num pièce",
            column2 : props.infos.roofNumber
        },
        {
            column1 : "% eau",
            column2 : props.infos.waterPercent
        },
        {
            column1 : "Poids init tot",
            column2 : props.infos.initialCalculatedWeight
        },
        {
            column1 : "Poids 1er cycle",
            column2 : props.infos.firstCycleWeight
        },
        {
            column1 : "Poids 2er cycle",
            column2 : props.infos.secondCycleWeight
        },
    ]
    return (
            <Table
              selectable={false}
              >
            <TableBody displayRowCheckbox={false}>
              {tableList.map((item, index)=>{
                    return <TableRow key={index}>
                                <TableRowColumn style={{width:"40%"}}>{item.column1}</TableRowColumn>
                                <TableRowColumn>{item.column2}</TableRowColumn>
                          </TableRow>
                })}
            </TableBody>
          </Table>
    );
}


TrbCastConsultFabrication_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastConsultFabrication_Template