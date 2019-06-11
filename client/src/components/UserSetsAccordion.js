import React, {Component} from 'react'
import ReactDOM from "react-dom";
import {DishConsumer} from '../context'
import {Link} from 'react-router-dom'

class UserSetsAccordion extends Component {



render(){
        const {set_name,set_total_price,set_id} = this.props.set;
        return (
          <DishConsumer>
            {value =>(
              <div class="accordion" id="accordionExample">
              <div class="card">
              <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h2 class="mb-0">
              <div className="text-left inline">{set_name}</div></h2>
              </div>
              </div>
              </div>
            )}
            </DishConsumer>
        )
    }
}

export default UserSetsAccordion;
