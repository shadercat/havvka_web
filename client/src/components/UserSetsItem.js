import React, {Component} from 'react'
import PageTitle from './PageTitle'
import CartList from './CartList'
import {DishConsumer} from '../context'
import DishList from './DishList'

class UserSets extends Component {
    render(){
        return (
          <div>
          
                        <DishConsumer>
          {value => {if(value.dishesInCart.length > 0){
            var total = 0;
            value.dishesInCart.map(dish => {total += (dish.dish_amount*dish.dish_price)});
            console.log(total);
            return (<div>
            <PageTitle pageName="Сеты"/>
            <div className="container">
                <div className="jumbotron mt-5">
                        <div className="text-center">

                          <div className="column">
                              
                            </div>

                </div>
            </div>
            </div>
            </div>)
          }else{
          return  (
            <div>
            <PageTitle pageName="Сеты"/>
            <div className="container">
                <div className="jumbotron mt-5">
                        <div className="text-center">
                          Sorry, but your sets list is empty
                          <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
      <h2 class="mb-0">
        <button class="btn btn-link inline" type="button" >
          Set #1
        </button>

      <div className="text-right inline">Итого UAH</div>
      </h2>
      
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <div className="container">
              <div className="menurow" 
              justify-content="space-around"
              >
                <DishList aim="favourites" limit="2"/>
                </div>
                </div>
     
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" >
          Set #2
        </button>

      <div className="text-right inline">Итого UAH</div>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <div className="container">
              <div className="menurow" 
              justify-content="space-around"
              >
                <DishList aim="favourites" limit="2"/>
                </div>
                </div>
     </div>
    </div>
  </div>
  
</div>
                          </div>
                          </div>
                    </div>
            </div>
          )
          }}
          }
            </DishConsumer>
                        </div>
                   
        )
    }
}

export default UserSets;

