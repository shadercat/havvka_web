import React, {Component} from 'react'
import PageTitle from './PageTitle'

class DishesTop extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Топ блюд"/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            DishesTop
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default DishesTop
