import React, {Component} from 'react'
import CartItem from './CartItem'
import {DishConsumer} from '../context'

class CartList extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        return value.dishesInCart.map(dish => {
            return <CartItem key={dish.dish_id} dish={dish}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default CartList
