import React, { Component } from "react"
import { Carousel, CarouselItem, CarouselControl, Button } from "reactstrap"

// Carousel images
import img4 from "../../../assets/images/un/slideone.png"
import img5 from "../../../assets/images/un/slidetwo.png"
import img6 from "../../../assets/images/un/slidethree.png"
import img7 from "../../../assets/images/un/slidefour.png"
import { Link } from "react-router-dom"
import { Translate } from "react-auto-translate"

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
    this.state = { activeIndex: 0, cases: 0, children: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  componentDidMount() {
    fetch("https://unirp.herokuapp.com/incident/getall?page=1&limit=1")
      .then(res => res.json())
      .then(result => this.setState({ cases: result?.paging?.total }))

    fetch("https://unirp.herokuapp.com/incident/identifychild/?action=count")
      .then(res => res.json())
      .then(result => this.setState({ children: result?.result }))
  }
  // console.log('hey', result?.paging?.total)
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
    const { activeIndex, cases, children } = this.state

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
              <p className="text-white h6">
                <Translate>NUMBER OF CASES REPORTED</Translate>:
              </p>
              <h1 className="font-weight-bold text-white display-1">{cases}</h1>
              <button className="btn text-white border border-white rounded">
                <Link to="/report-incident" className="w-100 h-100 text-white">
                  <Translate>Report A Case</Translate>
                </Link>
              </button>
            </div>

            <div className="h-100 d-flex flex-column justify-content-evenly m-3">
              <p className="text-white h6">
                <Translate>NUMBER OF CHILDREN IDENTIFIED</Translate>:
              </p>
              <h1 className="font-weight-bold text-white display-1">
                {children}
              </h1>
              <button className="btn text-white border border-white rounded">
                <Link to="/track" className="w-100 h-100 text-white">
                  <Translate>Track</Translate>
                </Link>
              </button>
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
