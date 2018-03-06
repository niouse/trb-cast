
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Charts from 'material-ui/svg-icons/action/assessment.js'
import Search from 'material-ui/svg-icons/action/search.js';
import Edit from 'material-ui/svg-icons/action/assignment.js';

const TrbCastBottomNavigation_Template = (props) => {
    const styles=props.styles
    return (
           <div style={styles.bottomMenuBox}>
                  <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={props.selectedIndex}>
                      <BottomNavigationItem
                        label="Search"
                        icon={<Search />}
                        onClick={() => props.selectPage(0)}
                      />
                      <BottomNavigationItem
                        label="Consult"
                        icon={<Edit />}
                        onClick={() => props.selectPage(1)}
                      />
                      <BottomNavigationItem
                        label="Compare"
                        icon={<Charts />}
                        onClick={() => props.selectPage(2)}
                      />
                    </BottomNavigation>
                  </Paper>
            </div>
    );
}


TrbCastBottomNavigation_Template.propTypes = {
   // styles: PropTypes.object.isRequired,
    //text: PropTypes.object.isRequired,
};
        
export default TrbCastBottomNavigation_Template