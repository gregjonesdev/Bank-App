import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';


class Transaction extends Component {
  render() {
    return(
      <div>
        <h3>Please select an amount to withdraw from your {this.props.account.accountType} account.</h3>
        <h3>Your current balance is: {this.props.account.balance}</h3>

        <Link className="btn amount five" onClick={() => {
          alert(`$5 will be deducted from your ${this.props.account.accountType} account`); 
          this.props.withdrawFunds(5)
        }} to="/user_detail/${id}/${account.id}">$5</Link>
        <Link className="btn amount ten" to="/">$10</Link>
        <Link className="btn amount twenty" to="/">$20</Link>
        <Link className="btn btn-primary return" to="/user_detail/${id}/${account.id}" >Back to User Details</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
