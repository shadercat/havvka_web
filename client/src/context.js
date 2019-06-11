import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {getAllDishes, getSets, getAllDishesByPopularity, getSetItems, addSet, deleteSet, setItemDelete, getAvailabilityByDishId, likeDish, dislikeDish, getFavouriteDishes, getAllDishesByCategory, getDishByName} from './components/DishFunctions'

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
    detailsDishAv: [],
    tempOrder: {},
    dishesByPopularity: [],
    detailsSet: [],
    userSets: [],
    userId: 0
  };

  handleSetDetails = (set_id) => {
    getSetItems(set_id).then(res => {
      if(res){
        this.setState({
          detailsSet: res.data
        })
      }})
  }


  getSetsElements = (set_id) => {
    getSetItems(set_id).then(res => {
      if(res){
        return res.data;
      }
      return [];
    })
  }

  componentDidMount = () => {
    if(localStorage.usertoken){
    var token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    var id = decoded.user_id;
    var email = decoded.user_email;
    this.setState({
      userId: id,
      userEmail: email
    })}
    this.loadData(id);
    this.loadGeneralData();
  }

  createSet = (set_name) => {
    addSet(this.state.userId, set_name);
    getSets(this.state.userEmail).then(res => {
      if(res){
        this.setState({
          userSets: res.data
        })
      }
    })
  }

  loadGeneralData = () => {
    getAllDishes().then(res => {
        if(res){
        this.setState(
          {
            dishesInShop: res.data
          }
        )
      }
    })
    getAllDishesByPopularity().then(res => {
      if(res){
        this.setState({
          dishesByPopularity: res.data
        })
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
}

  loadData = (id) => {
  getSets(this.state.userEmail).then(res => {
    if(res){
      this.setState({
        userSets: res.data
      })
    }
  })
  getDishByName('Суп').then(res => {
    if(res){
      var dish = res.data;
      getAvailabilityByDishId(dish.dish_id).then(res => {
        if(res){
          dish.availability = res.data;
          this.setState({
            detailsDishAv: res.data
          });
        }
      })
        this.setState({ detailsDish: dish })
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
        getSets(this.state.userEmail).then(res => {
          if(res){
            this.setState(
              {
                userSets: res.data
              }
            )
          }
          console.log(this.state.userSets);
        })
    }
  }

  deleteFromSet = (set_items_id, set_id) => {
    setItemDelete(set_items_id).then(res => {
      if(res){
        this.handleSetDetails(set_id)
      }
    })
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
  dislikeDish(id, this.state.userId);
  var index = this.state.dishesInFav.indexOf(this.getItem(id));
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

findAvailable = (dish_id) => {

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
        this.setState({
          detailsDishAv: res.data
        })
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

  deleteSet = (set_id) => {

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
        handleSetDetails:this.handleSetDetails,
        thirdDishes: this.state.thirdDishes,
        forthDishes: this.state.forthDishes,
        detailsSet: this.state.detailsSet,
        handleDetail: this.handleDetail,
        dishesByPopularity: this.state.dishesByPopularity,
        getSetsElements: this.getSetsElements,
        addToCart: this.addToCart,
        deleteSet: this.deleteSet,
        addToFavourites: this.addToFavourites,
        isHere: this.isHere,
        tempOreder: this.state.tempOrder,
        deleteFromSet: this.deleteFromSet,
        userSets: this.state.userSets,
        detailsDishAv: this.state.detailsDishAv,
        deleteFromFavourites: this.deleteFromFavourites,
        deleteFromCart: this.deleteFromCart,
        createSet: this.createSet,
      viewDishCategory: this.viewDishCategory}}>
      {this.props.children}
      </DishContext.Provider>
    )
  }
}

const DishConsumer = DishContext.Consumer;

export {DishProvider, DishConsumer};
