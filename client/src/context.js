import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {getAllDishes, getAvailabilityByDishId, likeDish, dislikeDish, getFavouriteDishes, getAllDishesByCategory, getDishByName} from './components/DishFunctions'

const DishContext = React.createContext();

class DishProvider extends Component {
  state = {
    dishesInShop: [],
    detailsDish: {},
    dishesInFav: [],
    dishesInSet: [],
    dishesInCart: [],
    firstDishes: [],
    secondDishes: [],
    thirdDishes: [],
    forthDishes: [],
    userId: 0
  };


  componentDidMount = () => {
    if(localStorage.usertoken){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    var id = decoded.user_id;
    this.setState({
      userId: id
    })}
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
  getAllDishesByCategory(1,100).then(res => {
    if(res){
      console.log(res.data);
      this.setState({
        firstDishes: res.data
      }
      )
    }
  })
  getAllDishesByCategory(2,100).then(res => {
    if(res){
      this.setState({
        secondDishes: res.data
      })
    }
  })
  getAllDishesByCategory(3,100).then(res => {
    if(res){
      this.setState({
        thirdDishes: res.data
      })
    }
  })
  getAllDishesByCategory(4,100).then(res => {
    if(res){
      this.setState({
        forthDishes: res.data
      }
      )
    }
  })
  getDishByName('Суп').then(res => {
    if(res){
      var dish = res.data;
      getAvailabilityByDishId(dish.dish_id).then(res => {
        if(res){
          dish.availability = res.data;
        }
      })
      this.setState({
        detailsDish: dish
      })
      console.log(dish);
      // this.setState({
      //   detailsDish: res.data
      // })
    }
  })


    if(localStorage.usertoken){
        getFavouriteDishes(id).then(res => {
          if(res){
            var arr = [];
            for(let dish of res.data){
              dish.dish_liked = true;
              arr.push(dish);
            }
            this.setState(
              {
                dishesInFav: arr
              }
            )
          }
        })
    }
  }

  setSpecialOffer = (id,id1,id2,id3) => {
    var dish = this.getItem(id);
    this.state.specialOffer.push(dish);
  }

deleteFromCart = (id) => {
  var index = this.state.dishesInCart.indexOf(this.getItem(id));
  this.state.dishesInCart.splice(index,1);
}

deleteFromFavourites = (id) => {
  var index = this.state.dishesInFav.indexOf(this.getItem(id));
  dislikeDish(id, this.state.userId);
  this.state.dishesInFav.splice(index,1);
}

isHere = (id, arr) => {
  for(var i = 0; i < arr.length; i++){
    if(arr[i].dish_id === id){
      return true;
    }
  }
  return false;
}

addToFavourites = (id) => {
  var dish = this.getItem(id);
  if(this.isHere(id, this.state.dishesInFav)){
    this.deleteFromFavourites(id);
    dislikeDish(id, this.state.userId);
    dish.dish_liked = false;
  }else{
    dish.dish_liked = true;
    this.state.dishesInFav.push(dish);
    likeDish(id,this.state.userId);
  }
}

  getItem = (id) => {
    const dish = this.state.dishesInShop.find(item => item.dish_id === id)
    return dish;
  }

  handleDetail = (id) => {
    const dish = this.getItem(id);
    getAvailabilityByDishId(dish.dish_id).then(res => {
      if(res){
        dish.availability = res.data;
      }
    })
    dish.availability = [];
    this.setState(() => {
      return {detailsDish: dish}
    })
  }

  incrementDishAmount = (id, arr) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].dish_id === id){
        arr[i].dish_amount++;
        return true;
      }
    }
    return false;
  }

  viewDishCategory = (categoryId, limit) => {
    getAllDishesByCategory(categoryId, limit).then(res =>{
      if(res){
        return res.data;
      }
    });
  }

  addToCart = (id) => {
    if(!this.incrementDishAmount(id, this.state.dishesInCart)){
      var dish = this.getItem(id);
      dish.dish_amount = 1;
      this.state.dishesInCart.push(dish);
    }
  }

  render(){
    return(
      <DishContext.Provider value={{
        dishesInShop: this.state.dishesInShop,
        detailsDish:this.state.detailsDish,
        dishesInFav: this.state.dishesInFav,
        dishesInCart: this.state.dishesInCart,
        firstDishes: this.state.firstDishes,
        secondDishes: this.state.secondDishes,
        thirdDishes: this.state.thirdDishes,
        forthDishes: this.state.forthDishes,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        addToFavourites: this.addToFavourites,
        isHere: this.isHere,
        deleteFromFavourites: this.deleteFromFavourites,
        deleteFromCart: this.deleteFromCart,
      viewDishCategory: this.viewDishCategory}}>
      {this.props.children}
      </DishContext.Provider>
    )
  }
}

const DishConsumer = DishContext.Consumer;

export {DishProvider, DishConsumer};
