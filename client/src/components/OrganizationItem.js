import React, {Component} from 'react'
import {DishConsumer} from '../context'


class OrganizationItem extends Component {
  render(){
    const {organization_name, organization_location} = this.props.organization;

    return (
      <DishConsumer>
      {value => (
        <div>
        <div className="column">
         <div className="row cart-item">
         <div className="row cart-item pt-2 p-auto">
           <h3>{organization_name}</h3>
             <h3>{organization_location}</h3>
             </div>
           </div>
           </div>
            </div>
      )}


      </DishConsumer>
    )
  }
}

export default OrganizationItem
