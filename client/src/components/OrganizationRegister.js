import React, {Component} from 'react'
import {register} from './OrganizationFunctions'

class OrganizationRegister extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      location: '',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const organization = {
      organization_name: this.state.name,
      organization_location: this.state.location,
      organization_email: this.state.email,
      organization_password: this.state.password
    }

    register(organization).then(res => {
      if(res){
          this.props.history.push(`/login`)
      }
    })
  }

  render() {
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-6-mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Register form</h1>
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input type="e" className="form-control" name="name" placeholder="Enter Email"
                  value={this.state.name} onChange={this.onChange}/>
                </div><div className="form-group">
                  <label htmlFor="location">location</label>
                  <input type="e" className="form-control" name="location" placeholder="Enter Email"
                  value={this.state.location} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="e" className="form-control" name="email" placeholder="Enter Email"
                  value={this.state.email} onChange={this.onChange}/>
                </div><div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="e" className="form-control" name="password" placeholder="Enter your password"
                  value={this.state.password} onChange={this.onChange}/>
                </div>
                <button type="submit"
                className="btn btn-lg btn-primary btn-block">Register</button>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default OrganizationRegister
