import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'


class ProfileHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
      fullName: "",
      email: ""
    };
  }

  componentDidMount() {
    let body = JSON.parse(this.props.login.body)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${body.access_token}`
    }
    axios.get('https://www.googleapis.com/oauth2/v2/userinfo', { headers: headers })
      .then(response => {
        this.setState({
          avatarUrl: response.data.picture,
          fullName: response.data.name,
          email: response.data.email
        })
        console.log("resp", response)
      }
      )
  }

  render() {
    let {
      avatarUrl,
      fullName,
      email
    } = this.state

    return <div style={{ width: '100%', display: 'flex', padding: "16px", alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ height: '100px', width: "100px" }}>
        <img style={{ height: '100px', width: "100px", borderRadius: "50%" }} src={avatarUrl} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "12px", textAlignLast: 'left' }}>
        <div>Full Name: {fullName}</div>
        <div>Email: {email}</div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.login
  }
}

export default connect(mapStateToProps)(ProfileHeader);
