import React, {Component} from 'react'
import CartItem from './CartItem'
import {DishConsumer} from '../context'

class CartList extends Component{
  state = {
    aim: 'menu', // menu, top, main1, main2, favourite(sets), cart
    cnt: 0
  }

  incrementCnt = () => {
    this.setState({
      cnt: ++this.state.cnt
    })
  }

  render(){
    return(
      <DishConsumer>
      {value => {
        return value.dishesInCart.map(dish => {
            if(dish.dish_id > this.props.limit) return;
            return <CartItem key={dish.dish_id} dish={dish}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default CartList
