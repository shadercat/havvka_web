import React, {Component} from 'react'
import PageTitle from './PageTitle'
import FavouriteList from './FavouriteList'
import {DishConsumer} from '../context'

class FavouriteDishes extends Component {
    render(){
        return (
          <DishConsumer>
          {value => {if(value.dishesInFav.length > 0){
            return(
          <div>
          <PageTitle pageName="Избранное"/>
            <div className="container">
            <div className="row menurow" justify-content="space-around">
              <FavouriteList/>
              </div>
              </div>
            </div>
          )} else {
            return(
              <div>
              <PageTitle pageName="Избранное"/>
              <div className="container">
                  <div className="jumbotron mt-5">
                          <div className="text-center">
                            Sorry, but you it is empty
                            </div>
                            </div>
                      </div>
              </div>
        )
      }}}
          </DishConsumer>
        )
    }
}

export default FavouriteDishes
