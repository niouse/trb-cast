
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

const TrbCastConsultGeneral_Template = (props) => {
    const styles=props.styles
    
    const tableList=[
        {
            column1 : "Code Pfinis",
            column2 : props.infos.pfinis
        },
        {
            column1 : "Num. lot",
            column2 : props.infos.batchNumber
        },
        {
            column1 : "Variante",
            column2 : props.infos.variant
        },
        {
            column1 : "Num. étude",
            column2 : props.infos.studyNumber
        },
        {
            column1 : "Client",
            column2 : props.infos.clientName
        },
    ]
    
    return (
           <Table
              selectable={false}
              style={{width:"100%", margin:0}}
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



TrbCastConsultGeneral_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastConsultGeneral_Template