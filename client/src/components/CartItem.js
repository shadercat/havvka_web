import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DishConsumer} from '../context'


class CartItem extends Component {
  render(){
    const {dish_id,dish_name,dish_img,dish_price,dish_amount} = this.props.dish;

    return (
      <DishConsumer>
      {value => (
        <div>
        <div className="column">
         <div className="row cart-item">
         <Link className="row cart-item" to="/details" onClick={() => value.handleDetail(dish_id)}>
         <div className="row cart-item">
           <img width="150vw" height="150vw" border-radius="50%" src={dish_img}/>
           <h3>{dish_name}</h3>
             <h3>{dish_price} UAH</h3>
             <h3>{dish_amount}</h3>
             <h3>{dish_price*dish_amount} UAH</h3>
             </div>
             </Link>
             <Link onClick={() => value.deleteFromCart(dish_id)}>
             <img src="./images/delete.png" height="32px"/>
             </Link>
           </div>
           </div>
            </div>
      )}


      </DishConsumer>
    )
  }
}

export default CartItem
