import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Col, Icon, Row } from "antd";
import "../style.css";

const PlaySVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#fff" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
  </svg>
);

const LikeSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
    <path d="M 23 3 C 22.449219 3 22 3.449219 22 4 L 22 11.75 L 18 22 L 18 43 C 18.414063 44.164063 19.695313 45 21 45 L 40 45 C 42.207031 45 44 43.207031 44 41 C 44 40.175781 43.738281 39.417969 43.3125 38.78125 C 44.871094 38.234375 46 36.742188 46 35 C 46 34.019531 45.648438 33.132813 45.0625 32.4375 C 46.222656 31.738281 47 30.453125 47 29 C 47 28.019531 46.648438 27.132813 46.0625 26.4375 C 47.222656 25.738281 48 24.453125 48 23 C 48 20.792969 46.207031 19 44 19 L 29.375 19 C 29.984375 17.070313 31 13.617188 31 12 C 31 8.234375 28.242188 3 25.53125 3 Z M 3 19 C 2.714844 19 2.441406 19.128906 2.25 19.34375 C 2.058594 19.558594 1.964844 19.839844 2 20.125 L 5 44.125 C 5.0625 44.625 5.496094 45 6 45 L 15 45 C 15.550781 45 16 44.554688 16 44 L 16 20 C 16 19.449219 15.550781 19 15 19 Z M 11.5 38 C 12.328125 38 13 38.671875 13 39.5 C 13 40.328125 12.328125 41 11.5 41 C 10.671875 41 10 40.328125 10 39.5 C 10 38.671875 10.671875 38 11.5 38 Z "></path>
  </svg>
)

const CalendarSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64">
    <path d="M 16 5 C 14.344 5 13 6.344 13 8 L 13 11 L 8 11 C 6.344 11 5 12.344 5 14 L 5 56 C 5 57.656 6.344 59 8 59 L 56 59 C 57.656 59 59 57.656 59 56 L 59 14 C 59 12.344 57.656 11 56 11 L 51 11 L 51 8 C 51 6.344 49.656 5 48 5 C 46.344 5 45 6.344 45 8 L 45 11 L 35 11 L 35 8 C 35 6.344 33.656 5 32 5 C 30.344 5 29 6.344 29 8 L 29 11 L 19 11 L 19 8 C 19 6.344 17.656 5 16 5 z M 16 7 C 16.551 7 17 7.449 17 8 L 17 16 C 17 16.551 16.551 17 16 17 C 15.449 17 15 16.551 15 16 L 15 8 C 15 7.449 15.449 7 16 7 z M 32 7 C 32.551 7 33 7.449 33 8 L 33 16 C 33 16.551 32.551 17 32 17 C 31.449 17 31 16.551 31 16 L 31 8 C 31 7.449 31.449 7 32 7 z M 48 7 C 48.551 7 49 7.449 49 8 L 49 16 C 49 16.551 48.551 17 48 17 C 47.449 17 47 16.551 47 16 L 47 8 C 47 7.449 47.449 7 48 7 z M 8 13 L 13 13 L 13 16 C 13 17.656 14.344 19 16 19 C 17.656 19 19 17.656 19 16 L 19 13 L 29 13 L 29 16 C 29 17.656 30.344 19 32 19 C 33.656 19 35 17.656 35 16 L 35 13 L 45 13 L 45 16 C 45 17.656 46.344 19 48 19 C 49.656 19 51 17.656 51 16 L 51 13 L 56 13 C 56.551 13 57 13.449 57 14 L 57 21 C 56.449 21 56 21.449 56 22 L 56 24 C 56 24.551 56.449 25 57 25 L 57 56 C 57 56.551 56.551 57 56 57 L 8 57 C 7.449 57 7 56.551 7 56 L 7 25 C 7.551 25 8 24.551 8 24 L 8 22 C 8 21.449 7.551 21 7 21 L 7 14 C 7 13.449 7.449 13 8 13 z M 12 21 C 11.449 21 11 21.449 11 22 L 11 24 C 11 24.551 11.449 25 12 25 C 12.551 25 13 24.551 13 24 L 13 22 C 13 21.449 12.551 21 12 21 z M 17 21 C 16.449 21 16 21.449 16 22 L 16 24 C 16 24.551 16.449 25 17 25 C 17.551 25 18 24.551 18 24 L 18 22 C 18 21.449 17.551 21 17 21 z M 22 21 C 21.449 21 21 21.449 21 22 L 21 24 C 21 24.551 21.449 25 22 25 C 22.551 25 23 24.551 23 24 L 23 22 C 23 21.449 22.551 21 22 21 z M 27 21 C 26.449 21 26 21.449 26 22 L 26 24 C 26 24.551 26.449 25 27 25 C 27.551 25 28 24.551 28 24 L 28 22 C 28 21.449 27.551 21 27 21 z M 32 21 C 31.449 21 31 21.449 31 22 L 31 24 C 31 24.551 31.449 25 32 25 C 32.551 25 33 24.551 33 24 L 33 22 C 33 21.449 32.551 21 32 21 z M 37 21 C 36.449 21 36 21.449 36 22 L 36 24 C 36 24.551 36.449 25 37 25 C 37.551 25 38 24.551 38 24 L 38 22 C 38 21.449 37.551 21 37 21 z M 42 21 C 41.449 21 41 21.449 41 22 L 41 24 C 41 24.551 41.449 25 42 25 C 42.551 25 43 24.551 43 24 L 43 22 C 43 21.449 42.551 21 42 21 z M 47 21 C 46.449 21 46 21.449 46 22 L 46 24 C 46 24.551 46.449 25 47 25 C 47.551 25 48 24.551 48 24 L 48 22 C 48 21.449 47.551 21 47 21 z M 52 21 C 51.449 21 51 21.449 51 22 L 51 24 C 51 24.551 51.449 25 52 25 C 52.551 25 53 24.551 53 24 L 53 22 C 53 21.449 52.551 21 52 21 z M 14 28 C 13.448 28 13 28.448 13 29 L 13 47 C 13 47.552 13.448 48 14 48 L 50 48 C 50.552 48 51 47.552 51 47 L 51 29 C 51 28.448 50.552 28 50 28 L 14 28 z M 15 30 L 22 30 L 22 37 L 15 37 L 15 30 z M 24 30 L 31 30 L 31 37 L 24 37 L 24 30 z M 33 30 L 40 30 L 40 37 L 33 37 L 33 30 z M 42 30 L 49 30 L 49 37 L 42 37 L 42 30 z M 15 39 L 22 39 L 22 46 L 15 46 L 15 39 z M 24 39 L 31 39 L 31 46 L 24 46 L 24 39 z M 33 39 L 40 39 L 40 46 L 33 46 L 33 39 z M 42 39 L 49 39 L 49 46 L 42 46 L 42 39 z M 10 51 C 9.449 51 9 51.449 9 52 C 9 52.551 9.449 53 10 53 L 54 53 C 54.551 53 55 52.551 55 52 C 55 51.449 54.551 51 54 51 L 10 51 z"></path>
  </svg>
);

const MaybeSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M 12.298828 2.0078125 C 9.2536504 1.8592539 6.6687031 3.9932031 6.1113281 6.8457031 C 5.9933281 7.4477031 6.4914687 8 7.1054688 8 C 7.5894687 8 7.9859375 7.6497813 8.0859375 7.1757812 C 8.5179375 5.1197812 10.534922 3.6391719 12.794922 4.0761719 C 14.716922 4.4481719 16.103141 6.2667031 15.994141 8.2207031 C 15.908141 9.7697031 14.910672 10.751859 13.763672 11.880859 C 12.712672 12.915859 11.548484 14.061281 11.146484 15.738281 C 10.992484 16.377281 11.460188 17 12.117188 17 C 12.594188 17 12.981703 16.657359 13.095703 16.193359 C 13.373703 15.069359 14.217016 14.238687 15.166016 13.304688 C 16.490016 12.001688 17.99 10.525391 18 8.0253906 C 18.011 5.2883906 16.274906 2.9158438 13.628906 2.2148438 C 13.179656 2.0958438 12.733854 2.0290352 12.298828 2.0078125 z M 11.5 20 C 11.224 20 11 20.224 11 20.5 L 11 21.5 C 11 21.776 11.224 22 11.5 22 L 12.5 22 C 12.776 22 13 21.776 13 21.5 L 13 20.5 C 13 20.224 12.776 20 12.5 20 L 11.5 20 z"></path>
  </svg>
)

const DislikeSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path d="M 2 2 C 1.448 2 1 2.448 1 3 L 1 13 C 1 13.552 1.448 14 2 14 L 4 14 C 4.552 14 5 13.552 5 13 L 5 3 C 5 2.448 4.552 2 4 2 L 2 2 z M 9 2 C 7.895 2 7 2.895 7 4 L 7 13.992188 C 7 14.522187 7.2099844 15.029297 7.5839844 15.404297 L 13.113281 20.945312 C 13.696281 21.529312 14.640516 21.533078 15.228516 20.955078 C 15.595516 20.594078 15.752578 20.068453 15.642578 19.564453 L 14.648438 15 L 21 15 C 22.105 15 23 14.105 23 13 L 23 11.001953 C 23 10.730953 22.944891 10.461891 22.837891 10.212891 L 19.830078 3.2109375 C 19.515078 2.4759375 18.791188 2 17.992188 2 L 9 2 z"></path>
  </svg>
)

class TrailerColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerCode: "",
      trailerVisible: false,
      hideTrailer: false,
      addStyle: this.props.index === this.props.activeTrailer.activeIndex ? true : false,
      activeElement: {}
    }
    this.myInput = React.createRef()
  }

  componentDidMount() {
    this.sendValueToParent();
    window.addEventListener("resize", this.sendValueToParent.bind(this));
  }

  sendValueToParent() {
    const { index } = this.props;
    const { trailerVisible } = this.state;

    if (trailerVisible) this.handleClick();
    if (index < 10)
      this.props.getNumberOfItems(index, this.myInput.current.offsetTop);
  }

  handleClick() {
    this.setState({ trailerVisible: true });
    const result = this.props.onClickTrailer(this.props.index, this.props.item);
    this.setState({ activeElement: result });
  }

  render() {
    const { apiData, item, showTrailer, activeTrailer, hideTrailer } = this.props;

    const { DispReleaseDate, wtsCount, wtsPerc, EventTitle } = apiData[item];
    // const { activeEventTitle } = activeElement;
    const {
      activeEventTitle, activeTrailerURL,
      activeEventLanguage, activeEventGenre, activeShowDate,
      activeWtsPerc, activeWtsCount, activeDwtsCount,
      activeMaybeCount, activeIndex
    } = activeTrailer;

    return (
      <React.Fragment>
        {
          showTrailer && activeIndex !== undefined
            ?
            <div className="trailer-row">
              <div className="close" onClick={() => hideTrailer()}>
                <Icon type="close" className="icon-close" />
              </div>
              <div
                className="iframe-col"
              >
                <iframe
                  width={"100%"}
                  height={"100%"}
                  style={{ border: "1px solid #000" }}
                  src={activeTrailerURL}
                  title={activeEventTitle}>
                </iframe>
              </div>
              <div className={"trailer-info"}>
                <div className="trailer-title">
                  {activeEventTitle}
                </div>
                <div className="trailer-language">
                  {activeEventLanguage}
                </div>
                <div className={"genre-wrapper"}>
                  {
                    activeEventGenre && activeEventGenre.split("|").map((item, i) =>
                      <div className={"genre-item"} key={i}>
                        {item}
                      </div>
                    )
                  }
                </div>

                <Row>
                  <Col span={12} >
                    <Row type={"flex"}>
                      <Col>
                        <Icon component={LikeSVG} className="trailer-info-like" />
                      </Col>
                      <Col>
                        <Row className="trailer-info-percentage">{activeWtsPerc}%</Row>
                        <Row className="trailer-info-wtscount">{activeWtsCount} votes</Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row type={"flex"}>
                      <Col>
                        <Icon component={CalendarSVG} className="trailer-info-calendar" />
                      </Col>
                      <Col>
                        <Row className="trailer-info-percentage">{activeShowDate && activeShowDate.split(",")[0]}</Row>
                        <Row className="trailer-info-wtscount">{activeShowDate && activeShowDate.split(",")[1]}</Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="stats">
                  <Col span={8} className="info-will-watch">
                    <Row>
                      <Icon component={LikeSVG} className="stats-like" />
                    </Row>
                    <Row className="will-watch-text">
                      Will Watch
                    </Row>
                    <Row className="will-watch-count">
                      ({activeWtsCount})
                    </Row>
                  </Col>
                  <Col span={8} className="info-maybe-watch">
                    <Row>
                      <Icon component={MaybeSVG} className="stats-maybe" />
                    </Row>
                    <Row className="maybe-watch-text">
                      Maybe
                    </Row>
                    <Row className="maybe-watch-count">
                      ({activeMaybeCount})
                    </Row>
                  </Col>
                  <Col span={8} className="info-not-watch">
                    <Row>
                      <Icon component={DislikeSVG} className="stats-dislike" />
                    </Row>
                    <Row className="not-watch-text">
                      Won't Watch
                    </Row>
                    <Row className="not-watch-count">
                      ({activeDwtsCount})
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
            :
            null
        }
        <div className={`trailer-thumbmail ${(this.props.index === activeIndex) ? "selectedItem" : null}`}
          ref={this.myInput}
          onClick={() => this.handleClick()}
        >
          <div className={"trailers-container"}>
            <div className="image-wrapper">
              <img
                src={`https://in.bmscdn.com/events/moviecard/${item}.jpg`}
                alt={"Bookmyshow Trailers"}
                className={"trailers-image"}
              />
              <div className="trailer-date">
                <div className="date">{moment(new Date(DispReleaseDate)).format("DD")}</div>
                <div className="month">{moment(new Date(DispReleaseDate)).format("MMM")}</div>
              </div>
              <div className="trailer-play">
                <Icon component={PlaySVG} className="play-button" />
              </div>
              <div className="trailer-like">
                <Icon component={LikeSVG} className="like" />{wtsPerc}%
                  <p className="votes">
                  {wtsCount.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} votes
                   </p>
              </div>
            </div>

          </div>
          <div className={"trailer-name"}>{EventTitle}</div>
        </div>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  const { activeTrailer } = state;

  return {
    activeTrailer
  }
}

export default connect(mapStateToProps)(TrailerColumn);