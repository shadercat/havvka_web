import React, {Component} from 'react'
import {login} from './OrganizationFunctions'

class OrganizationLogin extends Component {
  constructor(){
    super()
    this.state = {
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
      organization_email: this.state.email,
      organization_password: this.state.password
    }

    login(organization).then(res => {
      if(res){
          this.props.history.push('\register') // go to particular page
      }
    })
  }

  render() {
      return(
        <div className="container">
          <div className="row">
            <div className="col-md-6-mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please, sign in</h1>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter Organization Email"
                  value={this.state.email} onChange={this.onChange}/>
                </div><div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Enter password"
                  value={this.state.password} onChange={this.onChange}/>
                </div>
                <button type="submit"
                className="btn btn-lg btn-primary btn-block">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      )
  }
}

export default OrganizationLogin
