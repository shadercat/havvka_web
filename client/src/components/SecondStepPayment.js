import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import PaypalButton from './PaypalButton'

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
  }

  render(){
    return(
          <DishConsumer>
          {value => {if(value.dishesInCart.length > 0){
            var total = 0;
            value.dishesInCart.map(dish => { return total += (dish.dish_amount*dish.dish_price)});
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
                    <input type="text" disabled value={total}/>
                    </div>
                    </div>
                    <label className="mt-3" htmlFor="email">Выберите способ оплаты</label>
                    <div className="form-group text-left">
                    <Link to="/create-order/3">
                        <button className="btn btn-primary">Наличными</button>
                        </Link>
                        <Link to="/create-order/3">
                        <button className="btn btn-primary-havvka">Онлайн-оплата</button>
                        </Link>
                      </div>
                    </div>
                </form>
          </div>
          </div>
          </div>
          )
          }}}
          </DishConsumer>
    )
  }
}

export default SecondStepPayment
