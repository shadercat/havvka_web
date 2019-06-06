import React, {Component} from 'react'
import PageTitle from './PageTitle'
import DishList from './DishList'

class FavouriteDishes extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Избранное"/>
            <div className="container">
            <div className="row menurow" justify-content="space-around">
              <DishList aim="favourites"/>
              </div>
              </div>
            </div>
        )
    }
}

export default FavouriteDishes
