import React, {Component} from 'react'
import PageTitle from './PageTitle'

class UserOrders extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Заказы"/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            UserOrders
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default UserOrders
