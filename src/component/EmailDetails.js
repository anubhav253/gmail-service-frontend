import React from 'react'
import { connect } from 'react-redux';
import ShowLabels from './ShowLabels';
import axios from 'axios'


class EmailDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLabelEnable: false,
      labelsData: [],
      labelCount: 0
    };
  }

  handleViewLabelClick = () => {
    console.log(this.state.isLabelEnable)
    let isLabelEnable = !this.state.isLabelEnable
    this.setState({ 
      isLabelEnable
    })
  }

  componentDidMount() {
    let body = JSON.parse(this.props.login.body)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${body.access_token}`
    }
    axios.get('https://gmail.googleapis.com/gmail/v1/users/hivertester1@gmail.com/labels', { headers: headers })
      .then(response => {
        this.setState({
          labelsData: response.data.labels,
          labelCount: response.data.labels.length
        })
        console.log("resp", response)
      }
      )
  }
  
  render() {
    let { isLabelEnable, labelsData, labelCount } = this.state

    return <div style={{display: 'flex', flexDirection: 'column', width: '100%', padding: '24px'}}>
      <div style={{fontSize: "20px", fontWeight: 700}}>Email Details</div>
      <div style={{display: 'flex', alignSelf: 'center'}}>
        <div>Label Count: {labelCount}</div>
        <div onClick={this.handleViewLabelClick.bind(this)} style={{cursor: 'pointer', marginLeft: '16px', textDecoration: 'underline', color: 'blue'}}>View all</div>
      </div>
      {isLabelEnable && <ShowLabels labelsData={labelsData} />}

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login.login
  }
}

export default connect(mapStateToProps)(EmailDetails);
