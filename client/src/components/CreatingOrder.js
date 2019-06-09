import React, {Component} from 'react'
import PageTitle from './PageTitle'
import FirstStepPayment from './FirstStepPayment'
import SecondStepPayment from './SecondStepPayment'
import ConfirmOrder from './ConfirmOrder'

class CreatingOrder extends Component {
  render(){
    return(
      <div>
      <FirstStepPayment/>
</div>
  )
  }
}

export default CreatingOrder
