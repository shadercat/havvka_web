import React, {Component} from 'react'
import PageTitle from './PageTitle'

class FavouriteDishes extends Component {
    render(){
        return (
          <div>
          <PageTitle pageName="Избранное"/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            FavouriteDishes
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default FavouriteDishes
