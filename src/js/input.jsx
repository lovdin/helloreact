import React from "react";
import ReactDom from "react-dom";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      guestsNum: 2,
      pickedCabin: 'economy'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({[target.name]: value});
  }

  handleSubmit(event) {
    alert(`Is going: ${this.state.isGoing},
Number of guests: ${this.state.guestsNum},
Picked cabin: ${this.state.pickedCabin},`);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input type="number" name="guestsNum" value={this.state.guestsNum} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Pick your cabin:
          <select name="pickedCabin" value={this.state.pickedCabin} onChange={this.handleChange}>
            <option value="first">first class</option>
            <option value="economy">economy class</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDom.render(
  <Reservation />,
  document.getElementById('root')
);
