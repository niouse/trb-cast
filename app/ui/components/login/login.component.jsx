
// REACT DEPENDENCIES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

// COMPONENT LAYERS
import Template from "./template/login.template.jsx";
import Api from "./api/login.api.jsx";
import Texts from "./services/login.text.service.jsx";

// COMPONENT SERVICES
import StylesService from "./services/login.styles.service.jsx";

// COMPONENT STATIC DATA
import stylesDefault from "./styles/login.styles.default.js";
import stylesOptions from "./styles/login.styles-options.default.js";
import computeStyles from "./styles/login.compute-styles.js";
import texts from "./text/login.text.js";

export default function Login(opt){
    console.log(opt)
	return (wrappedComponent)=>{
		@StylesService(computeStyles, stylesDefault, stylesOptions)
		@Api(opt)
		@Texts(texts)
		@Template()
		class Login_Component {}
		return Login_Component
	}
}  

