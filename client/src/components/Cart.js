import React, {Component} from 'react'
import PageTitle from './PageTitle'
import DishList from './DishList'

class Cart extends Component {
    render(){
        return (

            <div>
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
                            <DishList aim="cart"/>
                        </div>

                </div>
            </div>
            </div>
        )
    }
}

export default Cart
