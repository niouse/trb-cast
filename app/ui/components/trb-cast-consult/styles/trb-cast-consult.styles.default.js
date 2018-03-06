export default  {
    container: {
        width: "100%",
        height: "100%",
        //maxWidth:"320px",
        margin : "auto",
        display : "flex",
        flexDirection:"column"
    },
    title: {
        color: "black"
    },
    list:{
        flex : 1,
        overflow : "auto"
    },
    noSelection:{
        width:"100%", 
        flex:1, 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center", 
        fontSize:"2em", 
        textAlign:"center",
        fontWeight : "bold",
       // color : this.props.stylesOptions.theme.colors.primary,
        fontFamily:"Play"
    }
}
