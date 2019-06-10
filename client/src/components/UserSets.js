import React, {Component} from 'react'
import {DishConsumer} from '../context'
import UserSetsAccordion from './UserSetsAccordion';
import {Link} from 'react-router-dom'

class UserSets extends Component {
    render(){
        return (
          <DishConsumer>
          {value => {
            if(value.userSets.length>0){
            return value.userSets.map(sett => {
                return <Link to="/setsdetails" onClick={() => value.handleSetDetails(sett.set_id)}><UserSetsAccordion key={sett.set_id} set={sett}/></Link>;
              })}else{
                return(
                <div>
                Sorry, but your sets list is empty
                </div>
              )
              }}}
            </DishConsumer>
        )
    }
}

export default UserSets;
