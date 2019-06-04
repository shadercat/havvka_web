import React, {Component} from 'react'

class PageTitle extends Component {
  render(){
    return (
      <div className="page-title">
      {this.props.pageName}
      </div>
    )
  }
}

export default PageTitle
