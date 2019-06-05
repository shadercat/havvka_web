import React, {Component} from 'react'
import PageTitle from './PageTitle'
import DishList from './DishList'

class DishesTop extends Component {
    render(){
        return (

          <div>
          <PageTitle pageName="Топ блюд"/>
          <div className="column menupage">
          <div className="container">
            <div className="container">
            <h1>По популярности за</h1>
              <div className="row menurow" justify-content="space-around">
                <DishList/>
                </div>
                </div>
                  <div className="container">
                  <h1>По популярности за</h1>
                    <div className="row menurow" justify-content="space-around">
                      <DishList/>
                      </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default DishesTop
