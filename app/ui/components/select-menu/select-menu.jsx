
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/select-menu.template.jsx";
import Api from "./api/select-menu.api.jsx";
import Styles from "./services/select-menu.styles.service.jsx";
import Texts from "./services/select-menu.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/select-menu.styles.default.js";
import stylesOptions from "./styles/select-menu.styles-options.default.js";
import computeStyles from "./styles/select-menu.compute-styles.js";
import texts from "./text/select-menu.text.js";

export default function SelectMenu(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class SelectMenu_Component {}
		return SelectMenu_Component
	}
}  
