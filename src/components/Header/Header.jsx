import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Col
} from 'reactstrap';

const items = [
  {
    id: 1,
    src:"./images/banner1.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src:"./images/banner2.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src:"./images/banner3.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <img src={item.src}></img>
          <CarouselCaption className="text-primary" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Col className="carousel" style={{margin:0,padding:0}} sm="12" md={{offset:0, size:10,order:2}}>
        <style>
          {
            `.custom-tag {
                max-width:100%;
                height: 100vh;
              }
              .custom-tag img{
                  width:100%;
                  height:100%;
              }
              `
          }
        </style>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl className="next" direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl className="prev" direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Col>
    );
  }
}

export default Header;