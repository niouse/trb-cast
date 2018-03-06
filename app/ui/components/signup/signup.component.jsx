
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/signup.template.jsx";
import Api from "./api/signup.api.jsx";
import Styles from "./services/signup.styles.service.jsx";
import Texts from "./services/signup.text.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/signup.styles.default.js";
import stylesOptions from "./styles/signup.styles-options.default.js";
import computeStyles from "./styles/signup.compute-styles.js";
import texts from "./text/signup.text.js";

export default function Signup(){
	return (wrappedComponent)=>{
		@Styles(computeStyles, stylesDefault, stylesOptions)
		@Api(4000)
		@Texts(texts)
		@Template(TextField, RaisedButton)
		class Signup_Component {}
		return Signup_Component
	}
}  

