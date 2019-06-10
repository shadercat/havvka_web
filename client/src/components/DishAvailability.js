import React, {Component} from 'react'
import OrganizationsList from './OrganizationsList'

class DishAvailability extends Component{
  constructor() {
    super();
    this.state = {
      orgs: null
    };
  }


componentDidMount = () => {
    this.setState({
          orgs: this.props.organizations
    })
}


render(){
  if(this.state.orgs && this.state.orgs != []){
  return(
    <div>
    <h2 className="mt-5">Наличие блюда</h2>
    <div className="jumbotron mt-3 pt-7">
    <div className="col">
    <div className="text-center">
    <OrganizationsList/>
    </div>
    </div>
    </div>
  </div>
  )}else{
    return (<div></div>)
  }
}
}

export default DishAvailability;
