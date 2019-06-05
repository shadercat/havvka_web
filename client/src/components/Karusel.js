import React from 'react';
import '../index.css';
import {Carousel} from 'react-bootstrap';
var slide1 = '/images/slide1.svg'
var slide2 = '/images/slide2.svg'
var slide3 = '/images/slide3.svg'

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        index: 0,
        direction: null,
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
      const { index, direction } = this.state;

      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="carousel-slide"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-slide"
              src={slide2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-slide"
              src={slide3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

//   render(<ControlledCarousel />);

export default ControlledCarousel;
