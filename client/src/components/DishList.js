import React, {Component} from 'react'
import Dish from './Dish'
import {DishConsumer} from '../context'

class DishList extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        return value.dishesInShop.map( dish => {
          return <Dish key={dish.dish_id} dish={dish}/>;
        })
      }}
      </DishConsumer>
    )
  }
}

export default DishList
