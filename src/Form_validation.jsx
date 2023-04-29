
 import React from 'react';
 import { FormErrors } from './FormErrors';
 
  class FormValidation extends React.Component{
 
          constructor(props){
                 super(props);
 
                 this.state={
                             emailAddress:"",
                             password:"",
 
                             formErrors:{
                                 emailAddress:"",
                                 password:"",  
                             },
 
                             emailAddressValid:false,
                             passwordValid:false,
                             formValid:false,
                 }
                 }
         handleUserInput=(event)=>{
           const name=event.target.name;
            const value=event.target.value;
 
            this.setState({[name]:value},()=>this.validateField(name,value))
              }
 
        validateField(name,value){
         let fieldValidationErrors=this.state.formErrors;
         let emailAddressValid=this.state.emailAddressValid;
         let passwordValid=this.state.passwordValid;
          
 
         switch(name){
           case "emailAddress":
            emailAddressValid=value.match(/^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                 fieldValidationErrors.emailAddress=emailAddressValid ? "" : "is invalid" ;
                 break;
 
            case "password":
             // (/^(?=.*[0-9])(?=.*[!@#$%^&*]) [a-zA-Z0-9!@#$%^&*] {7,15}$/);
             passwordValid = value.match(/^[a-zA-Z0-9]/);
                 fieldValidationErrors.password = passwordValid ? "" : "is incorrect!";
                 break;
                 
                 default:
                 break;
 
            }
                 this.setState({
                 formErrors:fieldValidationErrors,
                emailAddressValid:emailAddressValid,
                passwordValid:passwordValid
                            },this.validateForm)
        }
    validateForm(){
     this.setState({
    formValid:this.state.emailAddressValid && this.state.passwordValid
      })
 
     }
       render(){
           return(
        <div className='firstHalf  '>
        <h1 className='text-primary fs-1 font-weight: 600;' id="web">Form Validation</h1>
                 
        <form>
        <div className='form-group ms-5 mt-5'>
        <div className='row'>
        <div className='col-12'>
        <FormErrors formErrors={this.state.formErrors}/>
        </div> 
        <label className='col-4 ms-5 fw-bold'>Email Address:</label>
        <div className='col-6'>
        <input type="text" name="emailAddress" className='form-control'
         placeholder='eg:,taylor@gmail.com' value={this.state.emailAddress} 
        onChange={this.handleUserInput} required/>
        </div>
        </div>
        <br></br>
        <div className='row'>
        <label className='col-4 ms-5 fw-bold mt-2'>Password:</label>
        <div className='col-6'>
                               <input type="password"  name="password" className='form-control'
                                placeholder='azxc1234' value={this.state.password} 
                                onChange={this.handleUserInput} required/>
                            </div>
                         </div>
 <br></br>
                         <div className='row'>
                          
                          <div className='col-6 offset-4'>
                               <input type="submit" name="submit" className='btn btn-primary'
                                value="submit"  disabled={!this.state.formValid} required/>
                           </div>
                         </div>
 
 
                    </div>
                    </form>
                   </div>
               
           )
          }
  }
  export default FormValidation;

 