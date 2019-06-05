import React, {Component} from 'react'
import Dish from './Dish'
import {DishConsumer} from '../context'

class DishList extends Component{
  state = {
<<<<<<< HEAD
    
=======
    aim: 'menu' // menu, top, main1, main2, favourite(sets), cart
>>>>>>> ce82b0f4dc99c1f8a535e36d241450d213c1ceae
  }

  render(){
    return(
      <DishConsumer>
      {value => {
        if(this.props.aim == 'menu'){
          return value.dishesInShop.map(dish => {
            return <Dish key={dish.dish_id} dish={dish}/>;
          })
        } else if(this.props.aim == 'cart'){
          return value.dishesInCart.map(dish => {
            return <Dish key={dish.dish_id} dish={dish}/>;
          })
        }
      }}
      </DishConsumer>
    )
  }
}

export default DishList
