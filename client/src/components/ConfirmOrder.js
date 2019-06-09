import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ConfirmOrder extends Component{
  constructor(){
    super();
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        show: false
      };
    }
      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
      }

  render(){
    return(

        <div className="container">
        <div class="progress" style={{height: '15px'}}>
        <div class="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div className="jumbotron mt-5 pd-5">
        <div className="text-left">
                      <h1 className="h3 mb-10 ml-7 pd-10 font-weight-normal text-left">Ваш заказ</h1>

                      <label className="mt-3" htmlFor="email">Номер</label>
                      <h2>1022873122</h2>


                      <label className="mt-3" htmlFor="email">Оплата</label>
                      <h2>Онлайн</h2>


                      <label className="mt-3" htmlFor="email">Стоимость</label>
                      <h2>48 UAH</h2>

                      <label className="mt-3" htmlFor="email">Заведение</label>
                      <h2>Столовая главного корпуса</h2>


                      <label className="mt-3" htmlFor="email">Время и дата</label>
                      <h2>22/02/2019 10:00</h2>


                  <button
                  className="btn btn-lg btn-primary btn-block mt-5" onClick={this.handleShow}>Подтвердить</button>
                  


                  <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton onClick={this.handleClose}>
                        </Modal.Header>
                        <Modal.Body>Спасибо за заказ!</Modal.Body>
                        <Modal.Footer>
                        <Link to="/">
                          <Button variant="primary">
                            Ок
                          </Button>
                          </Link>
                        </Modal.Footer>
                      </Modal>
            </div>
            </div>
            </div>
    )
  }
}

export default ConfirmOrder
