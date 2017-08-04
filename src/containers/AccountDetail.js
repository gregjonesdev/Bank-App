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

    const { id } = this.props.match.params


    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className= "card-subtitle mb-2 text-muted">{this.props.account.accountType} for  {this.props.user.name}</h6>
            <div className= "card-text">
              Balance: {this.props.account.balance}
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
