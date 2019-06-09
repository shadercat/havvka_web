import React, {Component} from 'react'
import OrganizationItem from './OrganizationItem'
import {DishConsumer} from '../context'

class OrganizationsList extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        return value.detailsDishAv.map(organization => {
            return <OrganizationItem key={organization.organization_id} organization={organization}/>;
          })
      }}
      </DishConsumer>
    )
  }
}

export default OrganizationsList
