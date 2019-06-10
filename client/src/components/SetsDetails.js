import React, {Component} from 'react'
import {DishConsumer} from '../context'

class SetsDetails extends Component{
  render(){
    return(
      <DishConsumer>
      {value => {
        return () => value.detailsSet.map(settItem =>{

        })

    }
    }
    </DishConsumer>
    )
  }
}

export default SetsDetails
