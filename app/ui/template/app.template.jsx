
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'


export default function App_Template(childs) {
    return (wrappedComponent) => {
        const $App_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="app-container" style={styles.container}>
					<childs.navigation />
					<Switch>
							<Route 
								path="/" 
								exact component={childs.login} 
								/>
							<Route 
								path="/login" 
								exact component={childs.login} 
								/>
							<Route 
								path="/signup"
								component={childs.signup}
								/>
                            <Route
                                path="/home"
								component={childs.trbCastHome}
								/>
					</Switch>
					
				</div>
            );
        }
        $App_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $App_Template
    }
}
    