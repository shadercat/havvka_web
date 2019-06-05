import React, {Component} from 'react'
import DishList from './DishList'
import PageTitle from './PageTitle'

class Menu extends Component {
  render(){
    return (
      <div>
      <PageTitle pageName="Меню"/>
      <DishList/>
      </div>
    )
  }
}

export default Menu
