import React, {Component} from 'react'
import DishConsumer from '../context'
import PageTitle from './PageTitle'
import UserSetsList from './UserSetsList'

class SetsDetails extends Component{
  render(){
    return(
      <div>
      <PageTitle title="Информация о сете"/>
      <div className="container">
      <div className="text-right">
      <button className="btn btn-danger">Удалить сет</button>
      <UserSetsList/>
      </div>
      </div>
      </div>
    )
  }
}

export default SetsDetails
