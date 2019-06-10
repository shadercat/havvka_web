import React, {Component} from 'react'
import {DishConsumer} from '../context'
class UserSetsAccordion extends Component {
    render(){
        const {set_name,set_total_price} = this.props.set;
        return (
          <div class="accordion" id="accordionExample">

  <div class="card">
    <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h2 class="mb-0">
        <button class="btn btn-link inline" type="button" >
          {set_name}
        </button>

      <div className="text-right inline">Итого {set_total_price} UAH</div>
      </h2>

    </div>
  </div>


</div>
        )
    }
}

export default UserSetsAccordion;
