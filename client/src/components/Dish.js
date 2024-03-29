import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'
import RateDiv from './RateDiv'


class Dish extends Component {
  render(){
    const {dish_id,dish_name,dish_img,dish_price,dish_short_description,dish_popularity,dish_rating} = this.props.dish;
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
            <div className="dish-rate"><RateDiv rate={dish_rating}/></div>
          </div>
        </div>
        </div>);

    const main2 = (
      <div className="column main2-rec-el">
      <img width="150vw" height="150vw" border-radius="50%" src={dish_img}/>
      <h2>{dish_name}</h2>
      <h3>{dish_price} UAH</h3>
      </div>
    );

    const main1 = (
          <div className="main1-view-dish">
            <img width="150vw" height="150vw" border-radius="50%" src={dish_img}/>
            <div className="dish-el-menu-description">
              <h2>{dish_name}</h2>
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
      case 'main2': {
        view = main2;
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
