import React from 'react'
import { connect } from 'react-redux';
import DefaultTable from './DefaultTable';


class ShowLabels extends React.Component {

  render() {
    let { labelsData = [] } = this.props
    console.log("labelsData", labelsData)

    return <div style={{marginTop: "24px"}}>
      <DefaultTable labelsData={labelsData} />
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(ShowLabels);
