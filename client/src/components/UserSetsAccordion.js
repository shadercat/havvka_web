import React, {Component} from 'react'
import PageTitle from './PageTitle'
import CartList from './CartList'
import {DishConsumer} from '../context'
import DishList from './DishList'
import UserSetsLists from './UserSetsList'

class UserSetsAccordion extends Component {
    render(){
        return (
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

                          {/* Карточка блюда в аккордионе */}
              <div className="menurow" 
              justify-content="space-around"
              >
                <UserSetsLists/>
                </div>
                </div>
     
      </div>
    </div>
  </div>

  
</div>
                   
        )
    }
}

export default UserSetsAccordion;

