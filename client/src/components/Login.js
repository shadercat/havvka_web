import React, {Component} from 'react'
import {login} from './UserFunctions'
import PageTitle from './PageTitle'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () =>
  {this.validateField(name, value)})
  }

  onSubmit(e){
    e.preventDefault()

    const user = {
      user_email: this.state.email,
      user_password: this.state.password
    }
    login(user).then(res => {
      if(res){
          this.props.history.push(`/`);
      } else {
        alert("введенные данные неверны");
      }
    })
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  switch(fieldName) {
      case 'email':
        emailValid = value.length > 0 && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length > 0;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                  }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid});
  }


  errorClass(error) {
     return(error.length === 0 ? '' : 'has-error');
  }

  render() {
      return(
        <div className="container">
        <PageTitle pageName="Login"/>
        <div className="container">
          <div className="row">
            <div className="col-md-6-mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please, sign in</h1>
                <div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter Email"
                  value={this.state.email} onChange={this.onChange}/>
                </div><div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" placeholder="Enter your password"
                  value={this.state.password} onChange={this.onChange}/>
                </div>
                <button type="submit"
                className="btn btn-lg btn-primary-havvka btn-block" disabled={!this.state.formValid}>Sign in</button>
              </form>
            </div>
          </div>
        </div>
        </div>
      )
  }
}

export default Login
