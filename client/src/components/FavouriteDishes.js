import React, {Component} from 'react'
import PageTitle from './PageTitle'
import FavouriteList from './FavouriteList'

class FavouriteDishes extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Избранное"/>
            <div className="container">
            <div className="row menurow" justify-content="space-around">
              <FavouriteList/>
              </div>
              </div>
            </div>
        )
    }
}

export default FavouriteDishes
