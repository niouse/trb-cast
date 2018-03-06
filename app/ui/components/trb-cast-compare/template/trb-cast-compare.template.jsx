
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function TrbCastCompare_Template() {
    return (wrappedComponent) => {
        const $TrbCastCompare_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="trb-cast-compare-container" className="container" style={styles.container}>
					<h1  id="trb-cast-compare-title" style={styles.title}>{text.title}</h1>
					{/*<button onClick={()=>props.languageNext('fr')}>test </button>*/}
				</div>
            );
        }
        $TrbCastCompare_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $TrbCastCompare_Template
    }
}
    