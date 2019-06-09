import React, {Component} from 'react'
import PageTitle from './PageTitle'
import {DishConsumer} from '../context'
import DishList from './DishList'

class UserSetsList extends Component {
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
        return (
        <DishConsumer>
           {value => {
        return value.dishesInFav.map(dish => {
            if(dish.dish_id > this.props.limit) return;
            return <UserSets Item key={dish.dish_id} dish={dish}/>;
          })
      }}
        </DishConsumer>
        )
    }
}

export default UserSetsList;

