import React, { Component } from 'react';

//MATERIAL COMPNENTS
import Menu from 'material-ui/Menu';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


//MATERIAL ICONS
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';

	
const getAccountMenu = (props, styles, text) => {
    const adminMenu = [
        <MenuItem  style={styles.list} primaryText={text.myAccount} />,
        <MenuItem  style={styles.list} primaryText={text.manageAccounts} />,
        <MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>
    ];

    const userMenu = [
        <MenuItem  style={styles.list} primaryText={text.myAccounts} />,
    ];

    const visitorMenu = [
        <MenuItem  style={styles.list} primaryText={text.newUser} onTouchTap={()=>props.goToPage('signup')}/>,
    ]

    if (props.user && props.user.type==='admin') {
        return  adminMenu
    }
    if (props.user && props.user.type==='user') {
        return  userMenu
    }
    else {
        return  visitorMenu
    }
}
		
const $NavigationMenuButton=(props)=>{
    let styles = props.styles || {icon : {}}
    let text = props.text || {list:{}}
    //console.log(text)
    return  (
        <IconMenu 
          iconButtonElement={<IconButton id={props.id} style={styles} iconStyle={styles.menuIcon}><MenuIcon {...props.attr} /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          menuStyle={styles.menu}
        >
          <MenuItem
              style={styles.list} 
              primaryText={text.home} 
              rightIcon={<ActionHome style={styles.icon}/>}
              onTouchTap={()=>props.goToPage("/home")}
          />

          <MenuItem  
              style={styles.list} 
              primaryText={text.language}
              rightIcon={<ActionLanguage style={styles.icon}/>}
              menuItems={[
                    <MenuItem  style={styles.list} primaryText={text.french} />,
                    <MenuItem  style={styles.list} primaryText={text.english} />
                ]}
              />
          <MenuItem  
              style={styles.list} 
              primaryText={text.help} 
              rightIcon={<ActionInfo  style={styles.icon}/>}/>
          {
                (()=>{
                    let menuItem = props.user ?	
                    <MenuItem 
                      style={styles.list}  
                      primaryText={text.logout} 
                      rightIcon={<ActionExitToApp style={styles.icon}/>} 
                      onTouchTap={()=> props.logout()}
                   /> :
                    <MenuItem 
                      style={styles.list}  
                      primaryText={text.login}
                      rightIcon={<ActionAccountBox style={styles.icon}/>} 
                      onTouchTap={()=>props.goToPage("/login")}
                   />
                   return menuItem
                })()
           }
        </IconMenu>	
    )	
}

export default $NavigationMenuButton

