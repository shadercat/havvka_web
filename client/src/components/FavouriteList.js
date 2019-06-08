import React, {Component} from 'react'
import FavouriteItem from './FavouriteItem'
import {DishConsumer} from '../context'

class FavouriteList extends Component{
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
        return value.dishesInFav.map(dish => {
            if(dish.dish_id > this.props.limit) return;
            return <FavouriteItem key={dish.dish_id} dish={dish}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default FavouriteList
