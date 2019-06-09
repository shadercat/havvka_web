import React, {Component} from 'react'
import PageTitle from './PageTitle'
import UserSetsList from './UserSetsList'
import {DishConsumer} from '../context'
import UserSetsAccordion from './UserSetsAccordion';

class UserSets extends Component {
    render(){
        return (
          <div>
          <DishConsumer>
          {value => {if(value.dishesInCart.length > 0){
            
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

                          {/* Аккордион */}
                       <UserSetsAccordion />
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

