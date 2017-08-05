import {combineReducers} from 'redux';
import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../actions/index';
import userList from '../data/users';
import update from 'immutability-helper';

const initialState = {
    users: userList(),
    selectedUser: null,
    selectedAccount: null
}

const reducer = function(state = initialState, action) {
    console.log("REDUCER")






    switch (action.type) {
        case USER_SELECTED:
            return update(state, {
                selectedUser: {
                    $set: action.payload
                }
            });
        /*

          You will need to correct a reducer case for ACCOUNT_SELECTED here - HINT: it should mimic closely the USER_SELECTED case.

        */
        case ACCOUNT_SELECTED:
            return update(state, {
                selectedAccount: {
                    $set: action.payload
                }
            });



        case WITHDRAW_FUNDS:
        //alert(action.payload)
        //alert(state.selectedAccount.balance)
            const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
        //alert(userIdx)
            const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
        alert(accountIdx)

        return update(state, {
            selectedAccount: {
              balance: {
                $apply: function(balance) {
                    return balance - action.payload
                }
              }
            }  
        })




            // return update(state, {
            //     users: {
            //         [userIdx]: {
            //             accounts: {
            //                 [accountIdx]: {
            //                     balance: {
            //                         $apply: function(balance) {
            //                             return balance - action.payload
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // })
        default:
            return state;
    }
}



export default reducer;
