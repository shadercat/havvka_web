import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class SecondStepPayment extends Component{
  constructor(){
    super()
    this.state = {
      paymentType: 1
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    this.setState({
      paymentType: e.target.value
    })
    console.log(this.state.paymentType);
  }

  render(){
    return(
      <div className="container">
      <div class="progress" style={{height: '15px'}}>
      <div class="progress-bar" role="progressbar" style={{width: '66%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div className="jumbotron mt-5 pd-5">
      <div className="text-left">
                <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-10 ml-7 pd-10 font-weight-normal text-left">Шаг 2</h1>
                    <div className="form-group mt-4">
                    <div className="column">
                    <div class="input-group mb-1">
                    <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">К оплате</label>
                    </div>
                    <input type="text" disabled value={this.props.total}/>
                    </div>
                    </div>
                    <label className="mt-3" htmlFor="email">Выберите способ оплаты</label>
                    <div className="form-group text-left">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary">
                        <input type="radio" name="options" id="option1" autocomplete="off" value="Наличными" onChange={this.onChange}/>Наличными
                        </label>
                        <label className="btn btn-secondary active">
                        <input type="radio" name="options" id="option2" autocomplete="off"  value="Онлайн" onChange={this.onChange} checked />Онлайн-оплата
                        </label>
                      </div>
                    </div>
                    </div>
                <Link to="/create-order/3">
                <button type="submit"
                className="btn btn-lg btn-primary btn-block">Далее</button>
                </Link>
                </form>
          </div>
          </div>
          </div>
    )
  }
}

export default SecondStepPayment
