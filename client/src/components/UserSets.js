import React, {Component} from 'react'
import PageTitle from './PageTitle'

class UserSets extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Сеты"/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            UserSets
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default UserSets
