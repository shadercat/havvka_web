import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'
import RateDiv from './RateDiv'


class Dish extends Component {
  render(){
    const {dish_id,dish_name,dish_img,dish_type,dish_price,dish_short_description,dish_long_description,dish_popularity} = this.props.dish;
    var view = (
    <div className="dish-el-menu">
        <img width="150vw" height="150vw" src={dish_img}/>
        <div className="dish-el-menu-description">
          <h3 className="dish-title">{dish_name}</h3>
          <h2 className="dish-price">{dish_price} UAH</h2>
          <div className="dish-states">
            <div className="dish-popularity">
            <img className="menu-popularity-img" src="./images/popularity.png"/>
              {dish_popularity}
            </div>
            <div className="dish-rate"><RateDiv rate="3"/></div>
          </div>
        </div>
        </div>);
    const main1 = (
          <div className="main1-view-dish">
            <img width="150vw" height="150vw" border-radius="50%" src={dish_img}/>
            <div className="dish-el-menu-description">
              <p className="main-view-dish">{dish_short_description}</p>
              <h3>{dish_price} UAH</h3>
            </div>
          </div>
    );
    switch(this.props.view){
      case 'main1': {
        view = main1;
        break;
      }
    }
    return (
      <DishConsumer>
      {value => (
        <div>
        <Link to="/details" onClick={() => value.handleDetail(dish_id)}>
        {view}
            </Link>
            </div>
      )}

      </DishConsumer>
    )
  }
}

export default Dish
