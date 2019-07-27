import React from "react";
import { connect } from "react-redux";
import { Row, Button } from "antd";

import TrailerColumn from "../components";
import "../style.css";
import { updateActiveTrailerData } from "../../actions/assignment-2";



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
    // this.setState
    if (windowWidth !== window.innerWidth) {
      this.findMinRow();
    }
    this.setState({ windowWidth: window.innerWidth })
  }

  getNumberOfItems(key, offsetTop) {
    const { offsetTopArray } = this.state;
    /* if (initialiseArray) {
      this.setState({ offsetTopArray: [] });
    } */
    offsetTopArray.push(offsetTop);
    if (key > 8) {
      this.findMinRow()
    }
  }

  countOccurence() {
    const { offsetTopArray } = this.state;

    let i = 0;
    let minOffsetTop = offsetTopArray[0];

    offsetTopArray.map((element) => {
      if (element === minOffsetTop)
        i++;
      else return i
    })
    return i;
  }

  findMinRow() {
    let val = this.countOccurence();
    // console.log("findminrow", val)
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

    let rowAbove = Math.floor((parseInt(index)) / parseInt(itemsPerRow))
    this.setState({ rowAbove });
    let activeIndex = TrailerURL.indexOf("v=");
    const trailerData = {
      activeEventTitle: EventTitle,
      activeTrailerURL: `https://www.youtube.com/embed/${TrailerURL.substring(activeIndex + 2, activeIndex + 13)}?autoplay=1&mute=1&enablejsapi=1`,
      activeEventLanguage: EventLanguage,
      activeEventGenre: EventGenre,
      activeShowDate: ShowDate,
      activeWtsPerc: wtsPerc,
      activeWtsCount: wtsCount,
      activeDwtsCount: dwtsCount,
      activeMaybeCount: maybeCount,
      activeIndex: index
    }
    updateActiveTrailerData(trailerData);
  }

  render() {
    const { apiData } = this.props;
    const { itemsPerRow, rowAbove } = this.state;
    // console.log(itemsPerRow)

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