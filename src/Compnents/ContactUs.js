import React, { Component } from 'react'

export class ContactUs extends Component {

    state = {
        firstName : '',
        lastName : '',
        emailId :  '',
        phoneNumber : '',
        msg : ''
    }
    handleFirstName = (event) =>{
        this.setState({firstName : event.target.value});
    };
    handleLastName = (event) =>{
        this.setState({lastName : event.target.value});
    }
    handleEmailId = (event) =>{
        this.setState({emailId : event.target.value});
    }
    handlePhoneNumber = (event) =>{
        this.setState({phoneNumber : event.target.value});
    }
    handleMsg = (event) =>{
        this.setState({msg : event.target.value});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        alert(this.state.firstName + "," + this.state.lastName + "," + this.state.emailId + "," + this.state.phoneNumber + "," + this.state.msg);
    }

    render() {
        return (
            <>
            <div className="contact-details py-5">
               <div className="container-fluid">
                  <div className="row my-5">
                    <div className="col-10 mx-auto">
                       <div className="row">
                           <div className="text-center mb-4">
                              <h1 className="contact-heading">Contact Us</h1>
                           </div>
                         <div className="col-md-6 col-xs-12 mx-auto">
                          <form onSubmit={this.handleSubmit}>
                              <div className="row gy-4">
                                  <div className="col-lg-6 col-xs-12">
                                  <input type="text" className="form-control py-3" id="exampleFormControlInput1" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleFirstName}/>
                                  </div>
                                  <div className="col-lg-6 col-xs-12">
                                  <input type="text" className="form-control py-3" id="exampleFormControlInput1" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleLastName}/>
                                  </div>
                              </div><br/>
   
                              <input type="email" className="form-control py-3" id="exampleFormControlInput1" placeholder="Enter Your E-mail" name="emailId" value={this.state.emailId} onChange={this.handleEmailId}/><br/>
                              
                              <input type="text" className="form-control py-3" id="exampleFormControlInput1" placeholder="Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/><br/>
   
                              <textarea className="form-control py-3" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name="msg" value={this.state.msg} onChange={this.handleMsg}></textarea><br/>
   
                              <div className="text-center">
                                  <button className="btn btn-outline-primary py-2 px-5 fs-5" type="submit">Submit</button>
                              </div>
   
                          </form>
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>    
           </> 
        )
    }
}

export default ContactUs



