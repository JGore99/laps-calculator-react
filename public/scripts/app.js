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
    _this.handleCalculation = _this.handleCalculation.bind(_this);
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
    key: "handleCalculation",
    value: function handleCalculation() {
      e.preventDefault();
      var numberOfLaps = e.target.elements.option.value;
      console.log(numberOfLaps);
      if (this.state.park !== undefined) {
        console.log("sup?");
      } else {
        "Where are you at?";
      }
    }
  }, {
    key: "handleLaps",
    value: function handleLaps() {
      console.log("hit");
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Park Lap Calculator";
      return React.createElement(
        "div",
        null,
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
        React.createElement("img", {
          src: "https://fitballingrunningmom.files.wordpress.com/2015/04/nyc-prospectpark-map.jpg"
        }),
        React.createElement(
          "form",
          null,
          React.createElement("input", { type: "number", min: "0" }),
          React.createElement(
            "p",
            null,
            "Laps"
          ),
          React.createElement(
            "button",
            { onSubmit: this.handleCalculation },
            "Calculate"
          )
        )
      );
    }
  }]);

  return LapCalculator;
}(React.Component);

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
