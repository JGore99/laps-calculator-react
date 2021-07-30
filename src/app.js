class LapCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleParkSelection = this.handleParkSelection.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
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

  handleCalculation() {
    e.preventDefault();
    const numberOfLaps = e.target.elements.option.value
    console.log(numberOfLaps);
    if (this.state.park !== undefined) {
      console.log("sup?");
    } else {
      ("Where are you at?");
    }
  }
  handleLaps() {
    console.log("hit");
  }
  render() {
    const title = "Park Lap Calculator";
    return (
      <div>
        <select name="park-name" onChange={this.handleParkSelection}>
          <option value="disabled">Park Selector</option>
          <option value="prospect">Prospect Park</option>
          <option value="central">Central Park</option>
        </select>
        <img
          src={
            "https://fitballingrunningmom.files.wordpress.com/2015/04/nyc-prospectpark-map.jpg"
          }
        />
        <form>
          <input type="number" min="0"></input>
          <p>Laps</p>
          <button onSubmit={this.handleCalculation}>Calculate</button>
        </form>
      </div>
    );
  }
}

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
