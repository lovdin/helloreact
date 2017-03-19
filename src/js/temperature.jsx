import React from "react";
import ReactDom from "react-dom";

const SCALE_NAMES = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convert(temperature, convertFunc) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertFunc(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
}

function BoilingVerdict(props) {
  const orNot = (props.celsius >= 100) ? '' : 'not ';
  return <p>{`The water would ${orNot}boil at normal atmospheric pressure.`}</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const scaleSymbol = scale === 'c' ? 'C°' : 'F°';

    return (
      <fieldset>
        <legend>Enter temperature in {SCALE_NAMES[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <strong>&nbsp;{scaleSymbol}</strong>
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'};

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({temperature, scale: 'c'});
  }

  handleFahrenheitChange(temperature) {
    this.setState({temperature, scale: 'f'});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? temperature : convert(temperature, toCelsius);
    const fahrenheit = scale === 'f' ? temperature : convert(temperature, toFahrenheit);

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDom.render(
  <Calculator />,
  document.getElementById('root')
);
