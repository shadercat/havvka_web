import React, {Component} from 'react'
import PageTitle from './PageTitle'
import DishList from './DishList'

class Cart extends Component {
    render(){
        return (

            <div>
            <PageTitle pageName="Корзина"/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <div className="text-center">
                            <DishList aim="cart"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Cart
