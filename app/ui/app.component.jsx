// REACT DEPENDENCIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { BrowserRouter, Route,  Link, Switch } from 'react-router-dom'
import {withRouter} from "react-router-dom"

// COMPONENT LAYERS
import Template from "./template/app.template.jsx"
import Api from "./api/app.api.jsx"
import Texts from "./services/app.text.service.jsx"

// COMPONENT STATIC DATA
import stylesDefault from "./styles/app.styles.default.js"
import stylesOptions from "./styles/app.styles-options.default.js"
import computeStyles from "./styles/app.compute-styles.js"
import texts from "./text/app.text.js"

// COMPONENT SERVICES
import AppStylesOptionsService from "./services/app.styles-options.service.jsx"
import StylesService from "./services/app.styles.service.jsx"
import AppMaterialService from "./services/app.material.service.jsx"
import AppRouterService from "./services/app.router.service.jsx"
import AppWithRouterService from "./services/app.with-router.service.jsx"
import AppLanguageService from "./services/app.language.service.jsx"
import AppAccessService from "./services/app.access.service.jsx"

//CHILD SERVICES
import NavigationRouterService from "./components/navigation/services/navigation.router.service.jsx"

// COMPONENT CHILDS
import Navigation from "./components/navigation/navigation.jsx"
import Login from "./components/login/login.component.jsx"
import Signup from "./components/signup/signup.jsx"
import TrbCastHome from "./components/trb-cast-home/trb-cast-home.component.jsx"
import TrbCastSelect from "./components/trb-cast-select/trb-cast-select.component.jsx"
import TrbCastCompare from "./components/trb-cast-compare/trb-cast-compare.component.jsx"
import TrbCastConsult from "./components/trb-cast-consult/trb-cast-consult.component.jsx"

import SelectMenu from "./components/select-menu/select-menu.component.jsx"


// APP THEMES
import themes from "./themes/index.js"

//MATERIAL THEMES
import materials from "./themes/materialui.index.js"


// EXTERNAL LIBRAIRIES

// USERS SERVICES 
/*import UsersService from "/imports/api/users/client/users.service.jsx";
import UsersCrudService from "/imports/api/users/client/users.crud.service.jsx";*/
import UsersService from "./../api/users/client/users.mocks.service.jsx";


// DATA SERVCES : METEOR
/*import PfinisDataService from "/imports/api/pfinis/client/pfinis.data.service.jsx";
import PfinisCrudService from "/imports/api/pfinis/client/pfinis.crud.service.jsx";
import BatchesDataService from "/imports/api/batches/client/batches.data.service.jsx";
import BatchesCrudService from "/imports/api/batches/client/batches.crud.service.jsx";*/

// DATA SERVICES : ZETAPUSH

// DATA SERVICES : MOCKS
import PfinisDataService from "./../api/pfinis/client/pfinis.data.service.mocks.jsx";
import FactoriesDataService from "./../api/factories/client/factories.data.service.mocks.jsx";
import TypesDataService from "./../api/types/client/types.data.service.mocks.jsx";
import ProductsDataService from "./../api/products/client/products.data.service.mocks.jsx";

/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_ARCHITECTURE_________________________________________________________________________*/
/*______________________________________________________________________________________*/


/*


// COMPONENTS TREE

- App
    - Navigation
    | Login
    | Signup
    | Home
        | Select 
            - SelectMenu
        | Consult
        | Compare
 
 
 
// COMPONENTS AND TEMPLATES TREE
 
- App
    -- Navigation
    || Login
    || Signup
    || Home
        || Select 
            - SelectOptions
            - SelectList
            - SelectDrawer
                -- SelectMenu
        || Consult
        || Compare
        - HomeBottomNavigation
        
        
// COMPONENT AND TEMPLATE AND DATA TREE
 

-- App
    -- Navigation 
    || Login  <- users
    || Signup  <-- users
    || Home  <- pfinis
        || Select  <- industries, coategories, clients
            - SelectOptions
            - SelectList
            - SelectDrawer
                -- SelectMenu 
        || Consult 
        || Compare 
        - HomeBottomNavigation 
*/


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD CHILDS_________________________________________________________________________*/
/*______________________________________________________________________________________*/



@SelectMenu()
class $SelectMenu{}



@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbCastCompare()
class $TrbCastCompare{}

const trbCastSelectComponents={
    selectMenu : $SelectMenu
}

@ProductsDataService()
@TypesDataService()
@FactoriesDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbCastSelect(trbCastSelectComponents)
class $TrbCastSelect{}


@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbCastConsult()
class $TrbCastConsult{}


//@UsersService()
@AppWithRouterService(withRouter)
@AppStylesOptionsService(themes)
@AppStylesOptionsService(themes)
@AppLanguageService()
@Navigation()
class $Navigation{}


const loginOpt={
    loginRoute : "home",
    msgDuration : 400
}

@UsersService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Login(loginOpt)
class $Login{}



//@UsersService()
//@UsersCrudService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Signup()
class $Signup{}


let trbCastHomeChilds = {
    trbCastConsult : $TrbCastConsult,
    trbCastSelect : $TrbCastSelect,
    trbCastCompare :$TrbCastCompare,
}


@PfinisDataService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@TrbCastHome(trbCastHomeChilds)
class $TrbCastHome{}


/*______________________________________________________________________________________*/
/*______________________________________________________________________________________*/
/*_BUILD COMPONENT______________________________________________________________________*/
/*______________________________________________________________________________________*/


let appComponents={
    navigation : $Navigation,
    login : $Login,
    signup : $Signup,
    trbCastHome : $TrbCastHome
}

export default function App(){
	return (wrappedComponent)=>{
		@AppLanguageService()
		@AppRouterService(BrowserRouter)
		@AppMaterialService(materials)
		@AppStylesOptionsService(themes)
		@StylesService(computeStyles, stylesDefault, stylesOptions)
		@Api()
		@Texts(texts)
		@Template(appComponents)
		class App_Component {}
		return App_Component
	}
}  

