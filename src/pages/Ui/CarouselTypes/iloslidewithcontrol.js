import React, { Component } from "react"
import { Carousel, CarouselItem, CarouselControl, Button } from "reactstrap"

// Carousel images
import img4 from "../../../assets/images/un/slideone.png"
import img5 from "../../../assets/images/un/slidetwo.png"
import img6 from "../../../assets/images/un/slidethree.png"
import img7 from "../../../assets/images/un/slidefour.png"
import { Link } from "react-router-dom"
import axios from "axios"

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
    this.state = { activeIndex: 0, casesReported: 0, childrenIdentified: 0 }
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

  componentDidMount() {
    fetch("https://unirp.herokuapp.com/incident/getall")
      .then(res => res.json())
      .then(result => {
        this.setState({
          casesReported: result.paging.total,
        })
      })

    fetch("https://unirp.herokuapp.com/incident/identifychild/?action=count")
      .then(res => res.json())
      .then(result => {
        this.setState({
          childrenIdentified: result.result,
        })
      })
  }

  render() {
    const { activeIndex, casesReported, childrenIdentified } = this.state

    console.log("amala", casesReported)

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
            <div className="h-100 d-flex flex-column justify-content-evenly m-3">
              <p className="text-white h6">NUMBER OF CASES REPORTED:</p>
              <h1 className="font-weight-bold text-white display-1">
                {casesReported}
              </h1>

              <Link
                to="/report-incident"
                className="btn btn-outline-light waves-effect waves-light w-100 text-white font-weight-bold"
              >
                Report A Case
              </Link>
            </div>

            <div className="h-100 d-flex flex-column justify-content-evenly m-3">
              <p className="text-white h6">NUMBER OF CHILDREN IDENTIFIED:</p>
              <h1 className="font-weight-bold text-white display-1">
                {childrenIdentified}
              </h1>

              <Link
                to="/track"
                className="btn btn-outline-light waves-effect waves-light w-100 text-white font-weight-bold"
              >
                Track
              </Link>
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
