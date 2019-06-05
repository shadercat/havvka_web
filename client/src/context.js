import React, { Component } from 'react'
// import {getAll} from './components/DishFunctions'
// var DishesInShop = getAll().data;
//
// getAll().then(res => {
//   if(res){
//           console.log(DishesInShop);
//   } else {
//     alert('Not today, guy');
//   }
// })
var DishesInShop = [
  {
    dish_id: 1,
    dish_name:'soup',
    dish_img: './images/borsch.jpg',
    dish_type: 2,
    dish_price: 2.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1222
  },
  {
    dish_id: 2,
    dish_name:'soup2',
    dish_img: './images/soup.jpg',
    dish_type: 3,
    dish_price: 3.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1322
  },{
    dish_id: 3,
    dish_name:'soup3',
    dish_img: './images/borsch2.jpg',
    dish_type: 3,
    dish_price: 3.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1322
  },{
    dish_id: 4,
    dish_name:'soup4',
    dish_img: './images/borsch3.jpg',
    dish_type: 1,
    dish_price: 7.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1320
  },{
    dish_id: 5,
    dish_name:'soup5',
    dish_img: './images/borsch4.jpg',
    dish_type: 3,
    dish_price: 3.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1322
  },{
    dish_id: 6,
    dish_name:'soup5',
    dish_img: './images/soup.jpg',
    dish_type: 3,
    dish_price: 3.0,
    dish_short_description: 'shor short short description bla',
    dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
    dish_popularity: 1322
  }];

const DishContext = React.createContext();

class DishProvider extends Component {
  state = {
    dishesInShop: DishesInShop,
    detailsDish: DishesInShop[0],
    dishesInFav: [],
    dishesInSet: [],
    dishesInCart: []
  };



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

  // findDishInCart = (id, arr) => {
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].dish_id == id){
  //       return arr[i];
  //     }
  //   }
  //   return null;
  // }

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
