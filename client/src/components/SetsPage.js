import React, {Component} from 'react'
import UserSets from './UserSets'
import {DishConsumer} from '../context'
import PageTitle from './PageTitle'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SetsPage extends Component{
  constructor(){
    super();
      this.handleShow = this.handleShow.bind(this);

      this.onChange = this.onChange.bind(this)
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        show: false,
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    onChange(e) {
      this.setState({ set_name: e.target.value})
    }


  render(){
    return(
      <DishConsumer>
      {value =>{
        return(
          <div>
          <PageTitle pageName="Сеты"/>
          <div className="container">
          <button className="btn-primary" onClick={this.handleShow}>Создать новый сет</button>
          <div className="jumbotron mt-5">
          <div className="text-center">
          <div className="column">
          <UserSets/>
          </div>
          </div>
          </div>
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton onClick={this.handleClose}>
          </Modal.Header>
          <Modal.Body>
          <input type="tex" onChange={this.onChange}/>
          </Modal.Body>
          <Modal.Footer onClick={this.handleClose}>
          <Button variant="secondary" onClick={this.handleClose}>
          Отмена
          </Button>
          <Button variant="primary" onClick={() => value.createSet(this.state.set_name)}>
          Ок
          </Button>
          </Modal.Footer>
          </Modal>
          </div>

        )
      }}
      </DishConsumer>
  )}
}

export default SetsPage
