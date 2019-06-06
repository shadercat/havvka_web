import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {getAllDishes, getFavouriteDishes} from './components/DishFunctions'

const DishContext = React.createContext();

class DishProvider extends Component {
  state = {
    dishesInShop: [],
    detailsDish: {},
    dishesInFav: [],
    dishesInSet: [],
    dishesInCart: [],
    userId: 0
  };


  componentDidMount = () => {
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    var id = decoded.user_id;
    this.setState({
      userId: id
    })
    this.loadData(id);
  }


  loadData = (id) => {
    getAllDishes().then(res => {
      if(res){
      this.setState(
        {
          dishesInShop: res.data
        }
      )
    }
  })
    if(localStorage.usertoken){
        getFavouriteDishes(id).then(res => {
          if(res){
            this.setState(
              {
                dishesInFav: res.data
              }
            )
          }
        })
    }
  }

  getItem = (id) => {
    const dish = this.state.dishesInShop.find(item => item.dish_id === id)
    return dish;
  }

  handleDetail = (id) => {
    const dish = this.getItem(id);
    this.setState(() => {
      return {detailsDish: dish}
    })
  }

  incrementDishAmount = (id, arr) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].dish_id == id){
        arr[i].dish_amount++;
        return true;
      }
    }
    return false;
  }

  addToCart = (id) => {
    if(!this.incrementDishAmount(id, this.state.dishesInCart)){
      var dish = this.getItem(id);
      dish.dish_amount = 1;
      this.state.dishesInCart.push(dish);
    }
    console.log(this.state.dishesInCart);
    this.setState(() => {
      return {dishesInCart: this.state.dishesInCart}
    })
  }

  render(){
    return(
      <DishContext.Provider value={{
        dishesInShop: this.state.dishesInShop,
        detailsDish:this.state.detailsDish,
        dishesInFav: this.state.dishesInFav,
        dishesInCart: this.state.dishesInCart,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart}}>
      {this.props.children}
      </DishContext.Provider>
    )
  }
}

const DishConsumer = DishContext.Consumer;

export {DishProvider, DishConsumer};
