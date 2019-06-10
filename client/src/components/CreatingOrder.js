import React, {Component} from 'react'
import FirstStepPayment from './FirstStepPayment'

class CreatingOrder extends Component {
  render(){
    console.log(window.location.pathname); //yields: "/js" (where snippets run)
console.log(window.location.href);
    return(
      <div>
      <FirstStepPayment/>
</div>
  )
  }
}

export default CreatingOrder
