import { Button, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { updateActiveTrailerData } from "../../actions/assignment-2";
import TrailerColumn from "../components";
import "../style.css";

class Assignment2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow: 0,
      offsetTopArray: [],
      rowAbove: undefined,
      windowWidth: window.innerWidth
    }
  }

  componentDidMount() {
    this.onChangeWidth();
    window.addEventListener("resize", this.initialiseArray.bind(this));
    updateActiveTrailerData({});
  }

  initialiseArray() {
    this.setState({ offsetTopArray: [] });
  }

  onChangeWidth() {
    const { windowWidth } = this.state;
    // change configuration according to screen size
    if (windowWidth !== window.innerWidth) {
      this.findMinRow();
    }
    this.setState({ windowWidth: window.innerWidth });
  }

  getNumberOfItems(key, offsetTop) {
    const { offsetTopArray } = this.state;

    offsetTopArray.push(offsetTop);
    if (key > 8) {
      this.findMinRow()
    }
    return true;
  }

  countOccurence() {
    const { offsetTopArray } = this.state;

    let i = 0;
    let minOffsetTop = offsetTopArray[0];

    offsetTopArray.map((element) => {
      if (element === minOffsetTop)
        return i++;
      else return i
    })
    return i;
  }

  findMinRow() {
    let val = this.countOccurence();

    this.setState({ itemsPerRow: val })
  }

  onClickTrailer(index, item) {
    const { apiData, updateActiveTrailerData } = this.props;
    const { itemsPerRow } = this.state;
    const {
      EventTitle, TrailerURL, EventLanguage,
      EventGenre, ShowDate, wtsPerc, wtsCount,
      dwtsCount, maybeCount
    } = apiData[item];

    // row above trailer is clicked
    let rowAbove = Math.floor((parseInt(index)) / parseInt(itemsPerRow))
    this.setState({ rowAbove });

    let activeIndex = TrailerURL.indexOf("v=");

    const trailerData = {
      activeEventTitle: EventTitle,
      activeTrailerURL: `https://www.youtube.com/embed/${TrailerURL.substring(activeIndex + 2, activeIndex + 13)}??wmode=opaque&autohide=1&autoplay=1&enablejsapi=1"`,
      activeEventLanguage: EventLanguage,
      activeEventGenre: EventGenre,
      activeShowDate: ShowDate,
      activeWtsPerc: wtsPerc,
      activeWtsCount: wtsCount,
      activeDwtsCount: dwtsCount,
      activeMaybeCount: maybeCount,
      activeIndex: index
    }

    // redux store update
    updateActiveTrailerData(trailerData);
  }

  hideTrailer() {
    const { updateActiveTrailerData } = this.props

    // empty redux store
    const trailerData = {
      activeEventTitle: undefined,
      activeTrailerURL: undefined,
      activeEventLanguage: undefined,
      activeEventGenre: undefined,
      activeShowDate: undefined,
      activeWtsPerc: undefined,
      activeWtsCount: undefined,
      activeDwtsCount: undefined,
      activeMaybeCount: undefined,
      activeIndex: undefined
    }
    updateActiveTrailerData(trailerData);
    // updateActiveTrailerData({});
  }

  render() {
    const { apiData } = this.props;
    const { itemsPerRow, rowAbove } = this.state;
    console.log(itemsPerRow, rowAbove)

    return (
      <div>
        <Row className="heading-row">
          <p className="two-heading">Movie Trailers</p>
          <Button className="coming-soon-button">Coming Soon</Button>
        </Row>

        <div className="trailer-wrapper" style={{}}>
          {
            Object.keys(apiData).map((item, index) =>
              <TrailerColumn
                apiData={apiData}
                item={item}
                key={index}
                index={index}
                getNumberOfItems={(key, offsetTop) => this.getNumberOfItems(key, offsetTop)}
                onClickTrailer={(index, item) => this.onClickTrailer(index, item)}
                hideTrailer={() => this.hideTrailer()}
                showTrailer={index === itemsPerRow * rowAbove}
              />
            )}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { assignment2 } = state;
  // console.log(state);
  return {
    apiData: assignment2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveTrailerData: (data) => dispatch(updateActiveTrailerData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignment2);