import React, {Component} from 'react'
import {DishConsumer} from '../context'
import {Link} from 'react-router-dom'
import PageTitle from './PageTitle'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import RateDiv from './RateDiv'
import UserSets from './UserSets'
import DishAvailability from './DishAvailability'


class Details extends Component{
  constructor(){
    super();
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
      this.state = {
        show: false,
        show1: false,
        liked: false
      };
    }

    componentDidMount = () => {
      this.setState({
        liked: false
      })
    }


        handleClose1() {
          this.setState({ show1: false });
        }

        handleShow1() {
          this.setState({ show1: true });
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
          dish_rating
        } = value.detailsDish;
        if(dish_liked == null) {
          dish_liked = false;
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
                        <img onClick={this.handleShow1} src="./images/add.png" width="16px"/>
                        <a id="liked" className={dish_liked?'fas fa-heart':'far fa-heart'} onClick={() => {value.addToFavourites(dish_id)}} />
                      </div>
                    </div>
                      <p>{dish_long_description}</p>
                      <div className="row">
                      <div className="like-set">
                        <img src="./images/popularity.png" width="30px"/>
                        {dish_popularity}
                      </div>
                      <RateDiv rate={dish_rating}/>
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
                            <Button variant="success" onClick={this.handleClose}>
                            Продолжить покупки
                            </Button>
                            <Link to="/cart">
                              <Button variant="danger">
                                Корзина
                              </Button>
                              </Link>
                            </Modal.Footer>
                          </Modal>
                          <Modal show={this.state.show1} onHide={this.handleClose1}>
                                <Modal.Header closeButton onClick={this.handleClose1}>
                                Выберите сет
                                </Modal.Header>
                                <Modal.Body><UserSets/></Modal.Body>
                                <Modal.Footer>
                                <Button variant="success" onClick={this.handleClose1}>
                                Закрыть
                                </Button>
                                </Modal.Footer>
                              </Modal>


                    </div>
                    </div>
                    </div>
                    <DishAvailability organizations={value.detailsDishAv}/>
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
