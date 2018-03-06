const button = {
	margin: "0px",
	width: "100%"
}

export default {
	container: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		margin: "0px auto",
		fontFamily: "Play",
		height: "100%",
		//border : "1px solid blue"
	},
	title: {
		color: "black"
	},
	form: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",	
	},
	mailInput: {
		width: '100%',
	},
	passwordInput: {
		width: '100%',
		marginBottom: "30px"
	},
	message: {
		fontSize: "1.5em",
		color: "red",
		height: "1.5em",
	},
	goToSignupButton : button,
	submitUserButton : button,
}
