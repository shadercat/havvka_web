import React, { Component } from 'react'
import {getAllDishes} from './components/DishFunctions'

// var DishesInShop = [
//   {
//     dish_id: 1,
//     dish_name:'soup',
//     dish_img: './images/borsch.jpg',
//     dish_type: 2,
//     dish_price: 2.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1222
//   },
//   {
//     dish_id: 2,
//     dish_name:'soup2',
//     dish_img: './images/soup.jpg',
//     dish_type: 3,
//     dish_price: 3.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1322
//   },{
//     dish_id: 3,
//     dish_name:'soup3',
//     dish_img: './images/borsch2.jpg',
//     dish_type: 3,
//     dish_price: 3.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1322
//   },{
//     dish_id: 4,
//     dish_name:'soup4',
//     dish_img: './images/borsch3.jpg',
//     dish_type: 1,
//     dish_price: 7.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1320
//   },{
//     dish_id: 5,
//     dish_name:'soup5',
//     dish_img: './images/borsch4.jpg',
//     dish_type: 3,
//     dish_price: 3.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1322
//   },{
//     dish_id: 6,
//     dish_name:'soup5',
//     dish_img: './images/soup.jpg',
//     dish_type: 3,
//     dish_price: 3.0,
//     dish_short_description: 'shor short short description bla',
//     dish_long_description: 'long lognejaghwja gkwk jagw kgfkhawgfwhjgfka fwk afwghakfgawkfgawfkjgakfjwgakwfjakjgfakwgfjkawfjklawfkawgfjwwakgfkawgfkajgfwkjagfwkjagfwkajfwglkawfgaw',
//     dish_popularity: 1322
//   }];

const DishContext = React.createContext();

class DishProvider extends Component {
  state = {
    dishesInShop: [],
    detailsDish: {},
    dishesInFav: [],
    dishesInSet: []
  };

  componentDidMount = () => {
    this.loadData();
  }

  handleDetail = () => {
    console.log('hello from detail');
  }

  loadData = () => {
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

    }
  }

  addToCart = () => {
    console.log('hello from add to cart');
  }
  render(){
    return(
      <DishContext.Provider value={{
        dishesInShop: this.state.dishesInShop,
        detailsDish:this.state.detailsDish,
        handleDetail: this.state.handleDetail,
        addToCart: this.state.handleDetail}}>
      {this.props.children}
      </DishContext.Provider>
    )
  }
}

const DishConsumer = DishContext.Consumer;

export {DishProvider, DishConsumer};
