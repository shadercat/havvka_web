import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'

class FirstStepPayment extends Component{
  render(){
    return(
          <DishConsumer>
          {value => {
            return(

      <div className="container">
      <div class="progress" style={{height: '15px'}}>
      <div class="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div className="jumbotron mt-5 pd-5">
      <div className="text-center">
                <form noValidate onSubmit={this.onSubmit}>

                  <h1 className="h3 mb-10 ml-7 pd-10 font-weight-normal text-left">Шаг 1</h1>
                <div className="form-group">
                <label htmlFor="email">Где вы хотите забрать свой заказ?</label>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Заведение</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                <option value="1">Столовая №1</option>
                <option value="2">Столовая №2</option>
                <option value="3">Столовая №3</option>
                </select>
                </div>
                </div>
                <div className="form-group">
                <label htmlFor="password">Когда вы за ним придете?(столовые работают с 9:00 до 18:00)</label>

                  <div class="input-group mb-3">
                  <div class="input-group-prepend">

                  <span class="input-group-text" id="basic-addon1">Дата</span>
                  </div>

                  <input type="date" className="form-control"/>
                  </div>
                  <div class="input-group mb-3">
                  <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon2">Время</span>
                              </div>
                  <input type="time" min="9:00" max="18:00" className="form-control" width="100%"/></div></div>

                  <Link  to="/create-order/2">
                <button type="submit"
                className="btn btn-lg btn-primary btn-block">Далее</button>
                </Link>
                </form>

                      </div>
                      </div>
                      </div>
                    )}}
                      </DishConsumer>
    )
  }
}

export default FirstStepPayment
