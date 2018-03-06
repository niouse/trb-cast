
export default function Navigation_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
	styles.userInfos.color = stylesOptions.theme.colors.secondary
	styles.button={}
	styles.button.attr = {
		color : stylesOptions.theme.colors.primary,
		hoverColor : stylesOptions.theme.colors.secondary,
	}

    // Overwrite styles according to device type
    /*if (stylesOptions.device === "pc") {
		styles.menuButton.display="none"
	}*/
    if (stylesOptions.device === "smartPhone") {}

    // Overwrite styles according user provided styles
    for (var key in userStyles) {
        if (styles[key]) {
            for (var key2 in userStyles[key]) {
                console.log(userStyles[key][key2])
                styles[key][key2] = userStyles[key][key2]
            }
        }
    }
    return styles
}
