import React, {Component} from 'react'
import PageTitle from './PageTitle'
import CartList from './CartList'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'

class Cart extends Component {
    render(){
        return (
          <DishConsumer>
          {value => {if(value.dishesInCart.length > 0){
            var total = 0;
            value.dishesInCart.map(dish => { return total += (dish.dish_amount*dish.dish_price)});
            return (<div>
            <PageTitle pageName="Корзина"/>
            <div className="container">
                <div className="jumbotron mt-5">
                        <div className="text-center">

                          <div className="column">
                              <div className="row cart-item-title">
                                <h2>Блюдо</h2>
                                <h2>Название</h2>
                                  <h2>Цена</h2>
                                  <h2>Кол-во</h2>
                                  <h2>Итого</h2>
                                  <div></div>
                                </div>
                                </div>
                            <CartList aim="cart"/>
                            <div className="text-right"><h1>Итого:{total} UAH</h1>
                            <Link onClick={() => value.startOrdering} to="/create-order">
                            <button onClick={() => value.setTotal(total)} className="btn-primary">Оформить заказ</button>
                            </Link>
                        </div></div>

                </div>
            </div>
            </div>)
          }else{
          return  (
            <div>
            <PageTitle pageName="Корзина"/>
            <div className="container">
                <div className="jumbotron mt-5">
                        <div className="text-center">
                          Sorry, but you cart is empty
                          </div>
                          </div>
                    </div>
            </div>
          )
          }}
          }
            </DishConsumer>
        )
    }
}

export default Cart
