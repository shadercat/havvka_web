import React, {Component} from 'react'
import {DishConsumer} from '../context'
import {Link} from 'react-router-dom'
import PageTitle from './PageTitle'

class Details extends Component{
  render(){
    return (
      <DishConsumer>
      {value => {
        const {
          dish_id,
          dish_name,
          dish_img,
          dish_type,
          dish_price,
          dish_short_description,
          dish_long_description,
          dish_popularity
        } = value.detailsDish;

      return (
        <div>
          <PageTitle pageName="Информация о блюде"/>
          <div className="container details">
            <div className="row">
            <div>
              <img src={dish_img} height="200px"/>
              </div>
              <div className="column">
                <div className="row">
                  <h1>{dish_name}</h1>
                  <div className="like-set">
                    <img src="./images/popularity.png" width="30px"/>
                    <img src="./images/popularity.png" width="30px"/>
                  </div>
                </div>
                  <p>{dish_long_description}</p>
                  <div className="row">
                  <div className="like-set">
                    <img src="./images/popularity.png" width="30px"/>
                    {dish_popularity}
                  </div>
                  *****
                </div>
                <h2 className="text-right">{dish_price} UAH</h2>
                <button className="btn-primary">В корзину</button>
              </div>
            </div>
            </div>
          </div>

      )
    }

    }
      </DishConsumer>
    )
  }
}

export default Details
