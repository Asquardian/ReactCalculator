import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';
import Bounce from 'react-reveal/Bounce'

class NameForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '0',
  value2: '0', answer: 0, iter: 0, list: []};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(event) {
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }
  renderHist(){
    this.state.list.push(<div align="center">{this.state.value + ' + ' + this.state.value2 + ' = ' + this.state.answer}</div>);
  }
  handleSubmit(event) {
    this.state.answer = Number(this.state.value) + Number(this.state.value2);
    console.log(this.state.answer);
    event.preventDefault();
    this.renderHist();
    ReactDOM.render(<NameForm />, document.getElementById('root'));
  }

  render() {
    return (<div><br />
      <div class="Name"><Bounce>Калькулятор</Bounce></div>
      <form onSubmit={this.handleSubmit}>
        <div align="center" class="inputNum">
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange1} />
        </label>
        <label>
          +
          <input type="text" value={this.state.value2} onChange={this.handleChange2} />
        </label> = {this.state.answer}</div>
        <br></br>
        <br></br><div align="center">
        <input type="submit" value="Посчитать" id="bu"/></div>
        <Bounce left><br /><h1 align="center">История</h1><br />{this.state.list}</Bounce>
      </form>
      </div>
    );
  }
}

export default NameForm;
