import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        localStorage.removeItem('orgtoken')
        this.props.history.push('/')
    };

    render(){
        const loginRegLink = (
            <ul  className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link text-white">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link text-white">
                        register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul  className="navbar-nav">
            <li className="nav-item">
                <Link to="/FavouriteDishes" className="nav-link text-white">
                    FavouriteDishes
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/dishestop" className="nav-link text-white">
                    DishesTop
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/cart" className="nav-link text-white">
                    Cart
                </Link>
            </li>

            <li className="nav-item ">
                <Link to="/userorders" className=" text-white nav-link">
                    UserOrders
                </Link>
            </li>
                <li className="nav-item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return(
            <nav className="navbar navbar-expand-lg float-right main-nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1"
                aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                <ul className="navbar-nav"><li className="nav-item">
                <Link to="/" className="nav-link text-white">Home</Link>
                </li></ul>
                {localStorage.usertoken?userLink:!localStorage.orgtoken?loginRegLink:<br/>}
                </div>
            </nav>
        )
    }

}

export default withRouter(Navbar)
