
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NavigationUserInfos from "./navigation.template.user-infos.jsx";
import NavigationMenuButton from "./navigation.template.menu-button.jsx";

export default function Navigation_Template() {
    return (wrappedComponent) => {
        const $Navigation_Template = (props) => {
            let styles = props.styles
            let text = props.text
            //console.log(text)
            return (
                <div id="navigation-container" style={styles.container}>
					<div style={styles.box}>
						<div id="navigation-left" style={styles.left}>
							<NavigationUserInfos 
								id="navigation-userInfos" 
								styles={styles.userInfos} 
								user={props.user} 
								text={text.userInfos}/>
						</div>

						<div id="navigation-right" style={styles.right}>
							<NavigationMenuButton 
								id="navigation-menuButton" 
								styles={styles.menuButton}
								attr={styles.button.attr}
								text={text.menuButton} 
								user={props.user}
                                goToPage={props.goToPage}
								logout={props.logout}
								/>
						</div>
					</div>
				</div>
            );
        }
        $Navigation_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Navigation_Template
    }
}
    