import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'

class Dish extends Component {
  render(){
    const {dish_id,dish_name,dish_img,dish_type,dish_price,dish_short_description,dish_long_description,dish_popularity} = this.props.dish;
    return (
      <div>
      <Link to="/details">
        <div className="dish-el-menu">
          <img className="dish-img" src={dish_img}/>
          <div className="dish-el-menu-description">
            <h3 className="dish-title">{dish_name}</h3>
            <h2 className="dish-price">{dish_price} UAH</h2>
            <div className="dish-states">
              <div className="dish-popularity">
              <img className="menu-popularity-img" src="./images/popularity.png"/>
                {dish_popularity}
              </div>
              <div className="dish-rate">*****</div>
            </div>
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default Dish
