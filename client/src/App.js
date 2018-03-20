import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fieldText: '',
      queryText: '',
      isPalindrome: false,
      ajaxPong: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ fieldText: e.target.value })
  }

  changePalindromeState(state) {
    this.setState({ isPalindrome: state })
    this.setState({ ajaxPong: true })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ ajaxPong: false })
    this.setState({ queryText: this.state.fieldText })

    this.callApi()
      .then(res => {
        switch(res.status) {
          case 200:
            this.changePalindromeState(true)
          break
          case 400:
            this.changePalindromeState(false)
          break
          default:
            alert('Something went wrong')
          break
        }
      })
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/string/palindrome?text=' + this.state.fieldText)
    return response
  }

  render() {
    return (
      <div className="container">
        <form className="central-form" onSubmit={this.handleSubmit}>
          <h2 className="form-heading">Palindrome checker</h2>
          <input type="text" name="text" className="form-control first-field" placeholder="Text or word" required autoFocus value={this.state.fieldText} onChange={this.handleChange}/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Check</button>
          
          <div className="alert alert-success" role="alert" style={this.state.ajaxPong && this.state.isPalindrome ? {} : {display:'none'}}>
            <b>{this.state.queryText}</b> is a Palindrome.
          </div>
          <div className="alert alert-danger" role="alert" style={this.state.ajaxPong && !this.state.isPalindrome ? {} : {display:'none'}}>
            <b>{this.state.queryText}</b> is NOT a Palindrome.
          </div>
        </form>
      </div>
    );
  }
}

export default App;
