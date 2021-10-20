import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';
import Bounce from 'react-reveal/Bounce'

class NameForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: '0',
  value2: '0', sing: '+', answer: 0, iter: 0, list: []};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(event) {
    this.setState({value: event.target.value});
  }
  handleChange2(event) {
    this.setState({value2: event.target.value});
  }
  handleChange3(event) {
    this.setState({sing: event.target.value});
  }
  renderHist(){
    this.state.list.push(<div align="center">{this.state.value + ' ' + this.state.sing + ' ' + this.state.value2 + ' = ' + this.state.answer}</div>);
  }
  handleSubmit(event) {
    let element = document.getElementById("hist");
    switch (this.state.sing){
      case '+':
        this.state.answer = Number(this.state.value) + Number(this.state.value2);
        break;
      case '-':
        this.state.answer = Number(this.state.value) - Number(this.state.value2);
        break;
      case '/':
          this.state.answer = Number(this.state.value) / Number(this.state.value2);
          break;
      default:
          this.state.answer = 'Error';
          break;
    }
    console.log(this.state.answer);
    if(this.state.answer === 'Error'){
      element.style.backgroundColor = '#e22f2f'
    }
    else{
      element.style.backgroundColor = '#6f8ddf'
    }
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
          <input size="5" type="text" value={this.state.value} onChange={this.handleChange1} />
        </label>
        <label><input size="1" type="text" value={this.state.sing} onChange={this.handleChange3}/></label>
        <label>
          <input size="5" type="text" value={this.state.value2} onChange={this.handleChange2} />
        </label> = {this.state.answer}</div>
        <br></br>
        <br></br><div align="center">
        <input type="submit" value="Посчитать"/></div>
        <div class="History" id="hist"><Bounce left><h1 align="center">История</h1><br />{this.state.list}</Bounce></div><br />
      </form>
      </div>
    );
  }
}

export default NameForm;
