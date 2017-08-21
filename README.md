
# React/Redux Banking App

![app gif](https://thumbs.gfycat.com/ImaginativePlainGar-size_restricted.gif)

## Overview

This application contains a list of users with one or more accounts at a bank. When a user is selected, a list of the accounts is displayed and a withdrawl from any of the accounts can be made.

I organized the application into components/containers, actions, and a reducer that managed the state of the user list, and the currently selected user and account.

When a user is selected, a USER_SELECTED action is created, with a payload of whichever user ID was selected. This will trigger the corresponding switch case in the reducer to return a new state with selectedUser updated. Any containers that are mapped to state.selectedUser will then receive the updated information.

Though Redux was a little difficult to implement, I can really appreciate its role in keeping complex applications up to date when state information changes. I found organization and careful attention to detail to be crucial in successfully designing this application.
