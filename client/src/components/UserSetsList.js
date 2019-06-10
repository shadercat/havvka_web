import React, {Component} from 'react'
import {DishConsumer} from '../context'
import UserSetsItem from './UserSetsItem'


class UserSetsList extends Component {


  render(){
        return (
        <DishConsumer>
           {value => {
             if(value.detailsSet.length > 0){
             return value.detailsSet.map(dish => {
            return <UserSetsItem key={dish.dish_id} dish={dish}/>;
          })} else {
            return (<div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            UserOrders
                        </div>
                    </div>
                </div>
            </div>)
          }
          }}
        </DishConsumer>
        )
    }
}

export default UserSetsList;
