
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-cast-consult.template.jsx";
import Api from "./api/trb-cast-consult.api.jsx";
import Styles from "./services/trb-cast-consult.styles.service.jsx";
import Texts from "./services/trb-cast-consult.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-cast-consult.styles.default.js";
import stylesOptions from "./styles/trb-cast-consult.styles-options.default.js";
import computeStyles from "./styles/trb-cast-consult.compute-styles.js";
import texts from "./text/trb-cast-consult.text.js";

export default function TrbCastConsult(childs){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(childs)
		class TrbCastConsult_Component {}
		return TrbCastConsult_Component
	}
}  
