import React from "react";
import ReactDom from "react-dom";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'lime'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your favorite fruit:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grape">grape</option>
            <option value="lime">lime</option>
            <option value="coco">coco</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDom.render(
  <FlavorForm />,
  document.getElementById('root')
);
