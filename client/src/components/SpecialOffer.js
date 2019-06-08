import React, {Component} from 'react'
import {DishConsumer} from '../context'
import {Link} from 'react-router-dom'

class SpecialOffer extends Component{
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
          <div id="special-offer" className="container">
            <div className="container-details">
              <div className="row row1">
              <div className="column col0">
                <img src={dish_img} height="300vh"/>
                </div>
                  <div className="column col1" float="left">
                      <div className="row">
                        <h1>{dish_name}</h1>

                      </div>
                        <p>{dish_long_description}</p>
                        <div className="row">

                      </div>
                      <h2 className="text-right">{dish_price} UAH</h2>
                      <div>
                      <Link to="/details" onClick={() => value.handleDetail(dish_id)}>
                        <button  onClick={() => value.addToCart(dish_id)} className="btn-primary-havvka" width="150vw">
                        ХОЧУ
                        </button>
                        </Link>
                        </div>


                      </div>
                      </div>
              </div>

            </div></div>

        )
      }

      }
        </DishConsumer>
      )
    }
}

export default SpecialOffer
