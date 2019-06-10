import React, {Component} from 'react'
import {DishConsumer} from '../context'
import UserSetsItem from './UserSetsItem'


class UserSetsList extends Component {


  render(){
        return (
        <DishConsumer>
           {value => {
             return value.detailsSet.map(dish => {
            return <UserSetsItem key={dish.dish_id} dish={dish}/>;
          })}}
        </DishConsumer>
        )
    }
}

export default UserSetsList;
