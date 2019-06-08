import React, {Component} from 'react'
import Dish from './Dish'
import {DishConsumer} from '../context'

class DishList extends Component{
  state = {
    aim: 'menu', // menu, top, main1, main2, favourite(sets), cart
    cnt: 0
  }

  incrementCnt = () => {
    this.setState({
      cnt: ++this.state.cnt
    })
  }

  render(){
    return(
      <DishConsumer>
      {value => {
        if(this.props.aim === 'menu'){
          var data = value.dishesInShop.map(dish => {
            return <Dish key={dish.dish_id} dish={dish}/>;
          });
          if(this.props.category === '1'){
            data = value.firstDishes.map(dish => {
              return <Dish key={dish.dish_id} dish={dish}/>;
            });
          }
          if(this.props.category === '2'){
            data = value.secondDishes.map(dish => {
              return <Dish key={dish.dish_id} dish={dish}/>;
            });
            }
          else if(this.props.category == '3'){
            data = value.thirdDishes.map(dish => {
              return <Dish key={dish.dish_id} dish={dish}/>;
            });
          }else if(this.props.category == '4'){
            data = value.forthDishes.map(dish => {
              return <Dish key={dish.dish_id} dish={dish}/>;
            });
          }
          return data;
        } else if(this.props.aim === 'cart'){
          return value.dishesInCart.map(dish => {
            if(dish.dish_id > this.props.limit) return;
            return <Dish key={dish.dish_id} dish={dish}/>;
          })
        } else if(this.props.aim === 'favourites'){
            return value.dishesInFav.map(dish => {
              if(dish.dish_id > this.props.limit) return;
              return <Dish key={dish.dish_id} dish={dish}/>;
            })
        } else if(this.props.aim === 'main1'){
          return value.dishesInShop.map(dish => {
              if(dish.dish_id > this.props.limit) return;
            return <Dish key={dish.dish_id} dish={dish} view='main1'/>;
          })
        } else if(this.props.aim === 'main2'){
          return value.dishesInShop.map(dish => {
            if(dish.dish_id > this.props.limit) return;
            return <Dish key={dish.dish_id} dish={dish} view='main2'/>;
          })
        }
      }}
      </DishConsumer>
    )
  }
}

export default DishList
