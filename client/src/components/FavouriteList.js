import React, {Component} from 'react'
import FavouriteItem from './FavouriteItem'
import {DishConsumer} from '../context'

class FavouriteList extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        return value.dishesInFav.map(dish => {
            return <FavouriteItem key={dish.dish_id} dish={dish}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default FavouriteList
