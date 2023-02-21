import React from 'react'

class Classcomponent extends React.Component{
	state={
		subjectname:"SCIENCE",
		year:2010,
		userdata:""
	}
	handleChange=(e)=>{
	  this.setState({
        userdata:e.target.value
	  })	
	}
    handleClick=()=>{
		console.log(this.state.userdata);
		this.setState({
          userdata:""
		})
	}
	render(){
		return(
			<div>
               <h1> Good Afternoon </h1>
               <p>{this.state.subjectname}</p>
               <p>{this.state.year}</p>
               <input 
               value={this.state.userdata}
               onChange={this.handleChange}/>
               <button onClick={this.handleClick}>Send</button>
               <button>Increment</button>

			</div>
			)
	}
}
export default Classcomponent