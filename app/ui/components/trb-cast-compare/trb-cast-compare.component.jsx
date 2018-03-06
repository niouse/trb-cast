
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/trb-cast-compare.template.jsx";
import Api from "./api/trb-cast-compare.api.jsx";
import Styles from "./services/trb-cast-compare.styles.service.jsx";
import Texts from "./services/trb-cast-compare.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/trb-cast-compare.styles.default.js";
import stylesOptions from "./styles/trb-cast-compare.styles-options.default.js";
import computeStyles from "./styles/trb-cast-compare.compute-styles.js";
import texts from "./text/trb-cast-compare.text.js";

export default function TrbCastCompare(childs){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Texts(texts)
		@Api()
		@Template(childs)
		class TrbCastCompare_Component {}
		return TrbCastCompare_Component
	}
}  
