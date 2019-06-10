import React, {Component} from 'react'
import OrganizationItem from './OrganizationItem'
import {DishConsumer} from '../context'

class OrganizationsList extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        if(value.detailsDishAv.length == 0){return <div>нет в наличии</div>}
        return value.detailsDishAv.map(organization => {
            return <OrganizationItem key={organization.organization_id} organization={organization}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default OrganizationsList
