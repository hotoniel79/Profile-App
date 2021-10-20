import logo from './logo.svg';
import './App.css';
import React from "react";
import {connect} from "react-redux"
import {Container,Paper,AppBar,Toolbar,Avatar,Button,Typography} from "@material-ui/core";
import {KeyboardArrowLeft,KeyboardArrowRight} from "@material-ui/icons"
class App extends React.Component {
  render()
  {
    
  return (
  <body>

<AppBar position="relative">
  <Toolbar>
<Typography variant="h2">Profile App</Typography>
  </Toolbar>
  </AppBar>
  <Container>
    <Paper  elevation={3}align="center" style={{padding:50,margin:30}}>
<Avatar  style={{width:100,height:100}}src={this.props.picture} alt="profile-picture"/>
<Typography variant="h3">{this.props.name}</Typography>
<Typography variant="h5">{this.props.job}</Typography>
<Typography paragraph="true">{this.props.paragraph}</Typography>
<KeyboardArrowLeft  color="primary"fontSize="large"onClick={this.props.getOldProfile}></KeyboardArrowLeft>
<KeyboardArrowRight  color="primary"fontSize="large" onClick={this.props.getNewProfile}></KeyboardArrowRight>
<div>
<Button color="primary" onClick={this.props.getRandomProfile}>Random</Button>
</div>
</Paper>
</Container>
    </body>
  )
}
}
const mapDispatchToProps = dispatch =>{
  return {
getNewProfile:()=>{dispatch({type:"ADD"})},
getOldProfile:()=>{dispatch({type:"MINUS"})},
getRandomProfile:()=>{dispatch({type:"RANDOM"})}

}
}
const mapStateToProps= state=>({
  name:state.name,
  job:state.job,
  picture:state.picture,
  paragraph:state.paragraph
  

});

export default connect(mapStateToProps,mapDispatchToProps)(App);


