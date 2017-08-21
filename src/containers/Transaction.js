import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Transaction extends Component {
  render() {
    let accountIndex = this.props.account.id
    const userIdx = this.props.users.findIndex(user => user._id === this.props.user._id);

    let bal = this.props.account.balance

    if (this.props.users[userIdx].accounts[accountIndex]) {
      bal = this.props.users[userIdx].accounts[accountIndex].balance
    }

    return(
      <div>
        <h3>Please select an amount to withdraw from your {this.props.account.accountType} account.</h3>
        <h3>Balance: {bal}</h3>

        <Link className="btn amount five" onClick={() => {
            this.props.withdrawFunds(5)
          }} to="/user_detail/${id}/${account.id}">$5</Link>
        <Link className="btn amount ten" onClick={() => {
            this.props.withdrawFunds(10)
          }} to="/user_detail/${id}/${account.id}">$10</Link>
        <Link className="btn amount five" onClick={() => {
            this.props.withdrawFunds(20)
          }} to="/user_detail/${id}/${account.id}">$20</Link>
        <Link className="btn btn-primary return" to="/user_detail/${id}/${account.id}" >Back to User Details</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        withdrawFunds: withdrawFunds
    }, dispatch)
}


export default connect(mapStateToProps,  mapDispatchToProps)(Transaction);
