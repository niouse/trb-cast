
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-cast-home.template.jsx";
import Api from "./api/trb-cast-home.api.jsx";
import Styles from "./services/trb-cast-home.styles.service.jsx";
import Texts from "./services/trb-cast-home.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-cast-home.styles.default.js";
import stylesOptions from "./styles/trb-cast-home.styles-options.default.js";
import computeStyles from "./styles/trb-cast-home.compute-styles.js";
import texts from "./text/trb-cast-home.text.js";

export default function TrbCastHome(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template()
		class TrbCastHome_Component {}
		return TrbCastHome_Component
	}
}  
