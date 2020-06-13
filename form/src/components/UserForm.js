import React, { Component } from 'react'
import './myStyles.css'
import { red } from 'color-name';
 const initialState = {
    name: "",
    email: "",
    occupation: "",
    city: "",
    
        nameErrors: "",
        emailErrors: "",
        occupationErrors: "",
        cityErrors: "",
    
  }
 class UserForm extends Component {
    
     

         state= initialState;
        
     
 
  change =  e => {
      this.setState({
          [e.target.name]: e.target.value

      });
  };

  validate =  e =>{
      let nameErrors = "";
      let emailErrors = "";
      let occupationErrors = "";
      let cityErrors = "";

      if(!this.state.name) {
          nameErrors = "name cannot be blank";
      }
      if(!this.state.email.includes("@")) {
          emailErrors = "not valid email"
      }
     
      if(!this.state.occupation) {
        occupationErrors = "occupation cannot be blank";
    }
    if(!this.state.city) {
        cityErrors = "city cannot be blank";
    }
    if(nameErrors || emailErrors || occupationErrors || cityErrors) {
        this.setState({nameErrors, emailErrors, occupationErrors, cityErrors})
        return false;
    }

    return true;

  };

 onHandle =  e => {
    e.preventDefault();
    const valid = this.validate();
    if(valid){
        console.log(this.state);
        this.setState(initialState);
    }
   
   
 }


  render() {
    return (
      <div className="form-style-8">
          <h1>Enter Your Details</h1>
        <form onSubmit={this.onHandle}>
            
        
            <input
             name="name"
             placeholder="First Name"
             value={this.state.name}
             onChange={e=> this.change(e)}
            />
            <div style={{color: "red", fontSize:14}}>{this.state.nameErrors}</div>
            <br />
            <br />
            <input
             name="email"
             placeholder="Email"
             value={this.state.email}
             onChange={e=> this.change(e)}
            
            />
            <div style={{color: "red", fontSize:14}}>{this.state.emailErrors}</div>
            <br />
            <br />
            <input
             name="occupation"
             placeholder="Occupation"
             value={this.state.occupation}
             onChange={e=> this.change(e)}
            
            />
            <div style={{color: "red", fontSize:14}}>{this.state.occupationErrors}</div>
            <br />
            <br />
            <input
             name="city"
             placeholder="City"
             value={this.state.city}
             onChange={e=> this.change(e)}
            
            />
            <div style={{color: "red", fontSize:14}}>{this.state.cityErrors}</div>
            <br />
            <br />
            
            
            <button >Submit</button>
        </form>
        
        
        </div>
    )


 }
    
}
 export default UserForm;
