import React, {Component} from 'react'
import {DishConsumer} from '../context'
import RateDiv from './RateDiv'
import {Link} from 'react-router-dom'

class UserSetsItem extends Component {
    render(){
      const {dish_id,dish_name,dish_img,dish_price,dish_popularity,set_item_amount, set_items_id, set_id} = this.props.el;

        return (

          <DishConsumer>
          {value => (
            <div className="dish-el-menu">
        <Link to="/details" onClick={() => value.handleDetail(dish_id)}>
            <img alt={dish_name} width="150vw" height="150vw" src={dish_img}/>
            </Link>
            <div className="dish-el-menu-description">
            <div className="dish-states">
              <h3 className="dish-title">{dish_name}</h3>
              <Link onClick={() => value.deleteFromSet(set_items_id, set_id)}>
              <img src="./images/delete.png" height="32px"/>
              </Link>
              </div>
              <h2 className="dish-price">{dish_price} UAH</h2>
              <div className="dish-states">
                <div className="dish-popularity">
                <img alt="popularity" className="menu-popularity-img" src="./images/popularity.png"/>
                  {dish_popularity}
                </div>
                <div className="dish-rate"><RateDiv rate="3"/></div>
                {set_item_amount}
              </div>
            </div>
            </div>
          )
          }


        </DishConsumer>
        )
    }

}

export default UserSetsItem;
