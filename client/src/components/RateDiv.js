import React, {Component} from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class RateDiv extends Component{
  state =[
    {
      rating: 0
    }
  ]



    componentDidMount = () => {
      if(this.props.rate){
        this.setState({
          rating: this.props.rate
        })
      }
    }

  render(){
    return (
    <Rater rating={this.state.rating} total={5}/>
  )}
}

export default RateDiv
