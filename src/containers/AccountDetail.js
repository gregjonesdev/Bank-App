import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class AccountDetail extends Component {

  render() {

    console.log("Hey o")
    console.log(this.props.user)
    console.log(this.props.user._id)
    console.log(this.props.users)




    const { id } = this.props.match.params

    let accountIndex = this.props.account.id
    console.log(accountIndex) //logs account index (i.e. 0 or 1)
    const userIdx = this.props.users.findIndex(user => user._id === this.props.user._id);
    console.log(userIdx)

    console.log(this.props.match.params)

    const bal = this.props.users[userIdx].accounts[accountIndex].balance || this.props.account.balance

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
