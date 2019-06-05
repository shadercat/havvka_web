import React, {Component} from 'react'
import DishList from './DishList'
import PageTitle from './PageTitle'
import {Link} from 'react-router-dom'

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
          <DishList aim="menu"/>
        </div>
        <Link to="/first">Еще</Link>
        </div>
        <div className="container">
      <h2>Второе</h2>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu"/>
        </div>
        <Link to="/first">Еще</Link>
        </div>
        <div className="container">
      <h2>Третье</h2>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu"/>
        </div>
        <Link to="/first">Еще</Link>
      </div>
      <div className="container">
      <h2>Напитки</h2>
      <div className="row menurow" justify-content="space-around">
        <DishList aim="menu"/>
        </div>
        <Link to="/first">Еще</Link>
      </div>
</div></div>
      </div>
    )
  }
}

export default Menu
