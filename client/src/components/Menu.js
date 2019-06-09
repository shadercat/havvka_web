import React, {Component} from 'react'
import DishList from './DishList'
import PageTitle from './PageTitle'

class Menu extends Component {
  render(){
    return (
      <div>
      <PageTitle pageName="Меню"/>
      <div className="container">
      <div className="column menupage">
      <div className="container">
      <h1>Первое</h1>
        <div className="row menurow" justify-content="space-around">
          <DishList aim="menu" category="1" limit="6"/>
        </div>
        </div>
        <div className="container">
      <h1>Второе</h1>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu" category="2" limit="6"/>
        </div>
        </div>
        <div className="container">
      <h1>Третье</h1>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu" category="3" limit="6"/>
        </div>
      </div>
      <div className="container">
      <h1>Напитки</h1>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu" category="4" limit="6"/>
        </div>
      </div>
</div></div>
      </div>
    )
  }
}

export default Menu
