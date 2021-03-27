import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/Main.scss'
import axios from 'axios'
import { connect } from 'react-redux';
import * as ACTIONS from "../store/actions/action"

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginError: ""
    };
  }

  handelEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  validateForm = () => {
    let { email, password } = this.state

    return email.length > 0 && password.length > 0
  }

  handleSubmit = (e) => {
    // console.log("event+", e)
    let { email, password } = this.state
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/user_login', { email, password })
      .then(response => {
        if (response.data.status === 200) {
          console.log(response.data)
          this.props.successLogin(response.data)
          this.props.history.push('/profile')
        } else {
          this.props.failureLogin()
          this.setState({
            loginError: "Invalid email or password"
          })
        }
      });
  }

  render() {
    let { email, password, loginError } = this.state

    return <div className="login-page-container" style={{textAlign: '-webkit-center'}}>
      <Form onSubmit={this.handleSubmit} style={{width: '50%'}}>
        {loginError.length > 0 && <div style={{ color: "red", marginBottom: "8px" }}>{loginError}</div>}
        <Form.Group size="lg" controlId="email" style={{ marginBottom: "20px" }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => this.handelEmailChange(e)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => this.handlePasswordChange(e)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!this.validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    successLogin: (login) => dispatch(ACTIONS.successLoginCall(login)),
    failureLogin: () => dispatch(ACTIONS.failureLoginCall())
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
