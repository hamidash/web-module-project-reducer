# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* additionOne eventhandler in App.js is called, which dispatches addOne() function from action creator (which returns {type:ADD_ONE} action)
* Action is started in reducer with passed ADD_ONE action creater type
* reducer copies the state, and changes state.total by adding 1 to its current value
* Change in the state.total, was passe to TotalDisplay from App.js and since the state changed, there was a render of the TotalDisplay component which displayed new state.total
* TotalDisplay shows the total plus 1.
