import React from 'react'
import { connect } from 'react-redux';
import EmailDetails from './EmailDetails';
import LoginPage from './LoginPage'
import ProfileHeader from './ProfileHeader';


class ProfilePage extends React.Component {

  componentWillMount() {
    if(!this.props.login) {
      this.props.history.push('/login')
      return <LoginPage />
    }
  }
  render() {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
      <ProfileHeader />
      <EmailDetails />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.login
  }
}

export default connect(mapStateToProps)(ProfilePage);
