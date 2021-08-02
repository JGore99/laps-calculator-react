"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LapCalculator = function (_React$Component) {
  _inherits(LapCalculator, _React$Component);

  function LapCalculator(props) {
    _classCallCheck(this, LapCalculator);

    var _this = _possibleConstructorReturn(this, (LapCalculator.__proto__ || Object.getPrototypeOf(LapCalculator)).call(this, props));

    _this.handleParkSelection = _this.handleParkSelection.bind(_this);
    _this.handleLaps = _this.handleLaps.bind(_this);
    _this.state = {
      park: undefined,
      miles: 0,
      elev: 0,
      laps: 0
    };
    return _this;
  }

  _createClass(LapCalculator, [{
    key: "handleParkSelection",
    value: function handleParkSelection(e) {
      var _this2 = this;

      var selectedPark = e.target.value;
      console.log(selectedPark);
      if (selectedPark === "prospect") {
        this.setState({ park: "Prospect Park", miles: 3.35, elev: 118 }, function () {
          console.log(_this2.state.miles);
        });
      } else if (selectedPark === "central") {
        this.setState({ park: "Central Park", miles: 6.1, elev: 220 }, function () {
          console.log(_this2.state.miles);
        });
      }
    }
  }, {
    key: "handleLaps",
    value: function handleLaps(e) {
      var _this3 = this;

      this.setState({ laps: e.target.value }, function () {
        console.log(_this3.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Park Lap Calculator";
      var _state = this.state,
          park = _state.park,
          miles = _state.miles,
          elev = _state.elev,
          laps = _state.laps;

      return React.createElement(
        "div",
        null,
        React.createElement(HandleImageDisplay, { park: park }),
        React.createElement(
          "select",
          { name: "park-name", onChange: this.handleParkSelection },
          React.createElement(
            "option",
            { value: "disabled" },
            "Park Selector"
          ),
          React.createElement(
            "option",
            { value: "prospect" },
            "Prospect Park"
          ),
          React.createElement(
            "option",
            { value: "central" },
            "Central Park"
          )
        ),
        React.createElement("input", {
          type: "number",
          min: "0",
          name: "laps",
          onChange: this.handleLaps
        }),
        React.createElement(
          "p",
          null,
          "Laps"
        ),
        React.createElement(HandleCalculation, { park: park, miles: miles, elev: elev, laps: laps })
      );
    }
  }]);

  return LapCalculator;
}(React.Component);

var HandleCalculation = function HandleCalculation(_ref) {
  var park = _ref.park,
      miles = _ref.miles,
      elev = _ref.elev,
      laps = _ref.laps;

  console.log(park, miles, elev, laps);
  if (park === undefined || laps === 0) {
    return null;
  } else {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        park
      ),
      React.createElement(
        "p",
        null,
        "Miles: ",
        (miles * laps).toFixed(2)
      ),
      React.createElement(
        "p",
        null,
        "Elevation: ",
        (elev * laps).toFixed(2)
      )
    );
  }
};

var HandleImageDisplay = function HandleImageDisplay(_ref2) {
  var park = _ref2.park;

  if (park === "Prospect Park") {
    return React.createElement(
      "div",
      null,
      React.createElement("img", {
        src: "https://fitballingrunningmom.files.wordpress.com/2015/04/nyc-prospectpark-map.jpg"
      })
    );
  } else if (park === "Central Park") {
    return React.createElement(
      "div",
      null,
      React.createElement("img", {
        src: "https://i0.wp.com/got2run4me.com/wp-content/uploads/2017/05/BIRU-WP-20170516T065827GMT-0400.jpg?w=518"
      })
    );
  } else {
    return null;
  }
};

var appRoot = document.getElementById("app");

ReactDOM.render(React.createElement(LapCalculator, null), appRoot);

/*
render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
  */
