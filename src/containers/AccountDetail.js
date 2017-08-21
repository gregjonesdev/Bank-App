import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withdrawFunds }  from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
  render() {
    let accountIndex = this.props.account.id
    const userIdx = this.props.users.findIndex(user => user._id === this.props.user._id);
    let bal = this.props.account.balance

    if (this.props.users[userIdx].accounts[accountIndex]) {
      bal = this.props.users[userIdx].accounts[accountIndex].balance
    }

    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for  {this.props.user.name}</h6>
            <div className= "card-text">
              Balance: {bal}
            </div>
          </div>
          <div className="functions">
            <Link className="btn btn-withdraw" to='/user_detail/${id}/${account.id}/transaction'>Withdraw Funds</Link>
            <Link className="btn btn-primary" to="/user_detail/${id}" >Back to User Details</Link>
          </div>
        </div>
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

export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetail);
