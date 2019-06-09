import React, {Component} from 'react'
import {DishConsumer} from '../context'
import {Link} from 'react-router-dom'
import PageTitle from './PageTitle'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import RateDiv from './RateDiv'
import OrganizationsList from './OrganizationsList'

class Details extends Component{
  constructor(){
    super();
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleLike = this.handleLike.bind(this);
      this.state = {
        show: false,
        liked: false
      };
    }

handleLike = () => {

}

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

  render(){
    return (
      <DishConsumer>
      {value => {
        var {
          dish_id,
          dish_name,
          dish_img,
          dish_price,
          dish_long_description,
          dish_popularity,
          dish_liked,
          availability
        } = value.detailsDish;
        if(dish_liked == null) {
          dish_liked = false;
        }
        var avList;
        if(availability != null){
          avList = (
            <div>
            <h2 className="mt-5">В наличии в</h2>
            <div className="jumbotron mt-3 pt-3">
            <div className="col-sm-8">
            <div className="text-center">
            <OrganizationsList/>
            </div>
            </div>
            </div>
          </div>
      );
      } else {
          avList = (<div>
          <div className="jumbotron mt-3 pt-10 pt-auto">
          <div className="col-sm-8">
          <div className="text-center">
          <h2>Нет в наличии</h2>
          </div></div></div>
          </div>);
      }
      return (
        <div>
          <PageTitle pageName="Информация о блюде"/>
        <div className="container">
          <div className="container-details">
            <div className="row row1">
            <div className="column col0">
              <img src={dish_img} height="300vh"/>
              </div>
                <div className="column col1" float="left">
                    <div className="row">
                      <h1>{dish_name}</h1>
                      <div className="like-set">
                        <img src="./images/add.png" width="16px"/>
                        <a id="liked" className={dish_liked?'fas fa-heart':'far fa-heart'} onClick={() => {value.addToFavourites(dish_id)}} />
                      </div>
                    </div>
                      <p>{dish_long_description}</p>
                      <div className="row">
                      <div className="like-set">
                        <img src="./images/popularity.png" width="30px"/>
                        {dish_popularity}
                      </div>
                      <RateDiv/>
                    </div>
                    <h2 className="text-right">{dish_price} UAH</h2>
                    <div>
                    <div onClick={this.handleShow}>
                      <button  onClick={() => value.addToCart(dish_id)} className="btn-primary" width="150vw">
                      В корзину
                      </button>
                      </div>
                      </div>
                      <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton onClick={this.handleClose}>
                            </Modal.Header>
                            <Modal.Body>Блюдо добавлено в корзину</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                            Продолжить покупки
                            </Button>
                            <Link to="/cart">
                              <Button variant="primary">
                                Корзина
                              </Button>
                              </Link>
                            </Modal.Footer>
                          </Modal>


                    </div>
                    </div>
                    </div>
                    {avList}
                </div>
            </div>

      )
    }

    }
      </DishConsumer>
    )
  }
}

export default Details
