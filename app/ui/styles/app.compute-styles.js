
export default function App_computeStyles(defaultStyles, stylesOptions, userStyles) {
    let styles = Object.assign({}, defaultStyles);
    // Overwrite styles according screen size or theme
    styles.title = {
        color: stylesOptions.theme.colors.primary
    }
	
	styles.container.width=stylesOptions.screenWidth
	styles.container.height=stylesOptions.screenHeight
	styles.container.background = stylesOptions.theme.colors.mainGradient

    // Overwrite styles according to device type
    if (stylesOptions.device === "pc") {
        styles.container.marginTop="50px"
        styles.container.marginBottom="50px"
        styles.container.width=320
        styles.container.height=640
    }
    if (stylesOptions.device === "smartPhone") {
        styles.container.width="100%"
    }

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
