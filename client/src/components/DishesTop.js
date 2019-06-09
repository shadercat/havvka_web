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
            <h1>По выставленным оценкам за</h1>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option1" autocomplete="off"/> Неделю
  </label>
  <label className="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"/> Месяц
  </label>
  <label className="btn btn-secondary active">
    <input type="radio" name="options" id="option3" autocomplete="off"  checked />Все время
  </label>
</div>
              <div className="row menurow" justify-content="space-around">
                <DishList aim="menu" limit="2"/>
                </div>
                </div>
                  <div className="container">
                  <h1>По популярности</h1>
                    <div className="row menurow" justify-content="space-around">
                      <DishList aim="menu" limit="100"/>
                      </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default DishesTop
