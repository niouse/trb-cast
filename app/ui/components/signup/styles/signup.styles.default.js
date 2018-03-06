let textField = {
	width: '100%',
}

export default  {
	container: {
		//width: "100%",
		flex : 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		alignItems: "center",
		margin: "0px auto",
		fontFamily: "Play",
		//height: "100%",
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
	username : textField,
	firstName : textField,
	lastName : textField,
	email : textField,
	password : textField,
	message: {
		fontSize: "1.5em",
		textAlign: "center",
		height: "1.5em",
	},
	createUser: {
		width: "100%",
		margin: "30px 0px 0px 0px"
	},
}