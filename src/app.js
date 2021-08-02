class LapCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleParkSelection = this.handleParkSelection.bind(this);
    this.handleLaps = this.handleLaps.bind(this);
    this.state = {
      park: undefined,
      miles: 0,
      elev: 0,
      laps: 0,
    };
  }

  handleParkSelection(e) {
    const selectedPark = e.target.value;
    console.log(selectedPark);
    if (selectedPark === "prospect") {
      this.setState({ park: "Prospect Park", miles: 3.35, elev: 118 }, () => {
        console.log(this.state.miles);
      });
    } else if (selectedPark === "central") {
      this.setState({ park: "Central Park", miles: 6.1, elev: 220 }, () => {
        console.log(this.state.miles);
      });
    }
  }

  handleLaps(e) {
    this.setState({ laps: e.target.value }, () => {
      console.log(this.state);
    });
  }
  render() {
    const title = "Park Lap Calculator";
    const { park, miles, elev, laps } = this.state;
    return (
      <div>
        <HandleImageDisplay park={park} />
        <select name="park-name" onChange={this.handleParkSelection}>
          <option value="disabled">Park Selector</option>
          <option value="prospect">Prospect Park</option>
          <option value="central">Central Park</option>
        </select>

        <input
          type="number"
          min="0"
          name="laps"
          onChange={this.handleLaps}
        ></input>
        <p>Laps</p>
        <HandleCalculation park={park} miles={miles} elev={elev} laps={laps} />
      </div>
    );
  }
}

const HandleCalculation = ({ park, miles, elev, laps }) => {
  console.log(park, miles, elev, laps);
  if (park === undefined || laps === 0) {
    return null;
  } else {
    return (
      <div>
        <h2>{park}</h2>
        <p>Miles: {(miles * laps).toFixed(2)}</p>
        <p>Elevation: {(elev * laps).toFixed(2)}</p>
      </div>
    );
  }
};

const HandleImageDisplay = ({ park }) => {
  if (park === "Prospect Park") {
    return (
      <div>
        <img
          src={
            "https://fitballingrunningmom.files.wordpress.com/2015/04/nyc-prospectpark-map.jpg"
          }
        />
      </div>
    );
  } else if (park === "Central Park") {
    return (
      <div>
        <img
          src={
            "https://i0.wp.com/got2run4me.com/wp-content/uploads/2017/05/BIRU-WP-20170516T065827GMT-0400.jpg?w=518"
          }
        />
      </div>
    );
  } else {
    return null;
  }
};

const appRoot = document.getElementById("app");

ReactDOM.render(<LapCalculator />, appRoot);

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
