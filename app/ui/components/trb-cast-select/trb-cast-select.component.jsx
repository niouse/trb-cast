
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-cast-select.template.jsx";
import Api from "./api/trb-cast-select.api.jsx";
import Styles from "./services/trb-cast-select.styles.service.jsx";
import Texts from "./services/trb-cast-select.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-cast-select.styles.default.js";
import stylesOptions from "./styles/trb-cast-select.styles-options.default.js";
import computeStyles from "./styles/trb-cast-select.compute-styles.js";
import texts from "./text/trb-cast-select.text.js";

export default function TrbCastSelect(childs){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(childs)
		class TrbCastSelect_Component {}
		return TrbCastSelect_Component
	}
}  
