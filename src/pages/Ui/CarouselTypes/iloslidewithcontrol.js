import React, { Component } from "react"
import { Carousel, CarouselItem, CarouselControl, Button } from "reactstrap"

// Carousel images
import img4 from "../../../assets/images/un/slideone.png"
import img5 from "../../../assets/images/un/slidetwo.png"
import img6 from "../../../assets/images/un/slidethree.png"
import img7 from "../../../assets/images/un/slidefour.png"

const items = [
  {
    src: img4,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img5,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img6,
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: img7,
    altText: "Slide 4",
    caption: "Slide 4",
  },
]

class Slidewithcontrol extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            className="d-block img-fluid"
            alt={item.altText}
          />
          
          <div className="carousel-caption h-75 d-inline-block d-flex flex-row justify-content-end">
            <div className="">
            <p>NUMBER OF CASES REPORTED:</p>
            <h1>123</h1>
            <Button className="btn ">Report A Case</Button>
            </div>

            <div>
            <p>NUMBER OF CASES REPORTED:</p>
            <h1>123</h1>
            <Button className="btn ">Report A Case</Button>
            </div>
          </div>
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <>
          dkjhadbal</>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </React.Fragment>
    )
  }
}

export default Slidewithcontrol
