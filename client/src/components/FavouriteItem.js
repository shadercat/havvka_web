import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'
import RateDiv from './RateDiv'


class FavouriteItem extends Component {
  render(){
    const {dish_id,dish_name,dish_img,dish_price,dish_popularity} = this.props.dish;

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
              <Link onClick={() => value.deleteFromFavourites(dish_id)}>
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
              </div>
            </div>
            </div>
          )

      }


      </DishConsumer>
    )
  }
}

export default FavouriteItem
