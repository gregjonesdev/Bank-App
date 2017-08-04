import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  render() {
    return (
      <div>
        This is a fucking account detail
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
    //balance?
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}

export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetail);
