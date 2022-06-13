// ACTIONS
const incrementAction = { type: "INCREMENT" };
const incrementby10Action = { type: "incrementByTen" };
const decrementAction = { type: "DECREMENT" };
const decrementby10Action = { type: "decrementByTen" };
const resetAction = { type: "reset" };

// REDUCER
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "incrementByTen":
      return state + 10;
    case "decrementByTen":
      return state - 10;
    case "reset":
      return 0;
    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const incrementBy10Button = document.getElementById("button-incrementby10");
const decrementButton = document.getElementById("button-decrement");
const decrementBy10Button = document.getElementById("button-decrementby10");
const resetButton = document.getElementById("button-reset");

// MAIN
const render = () => {
  counterRender.innerText = store.getState();
};

//  We call render the first time so that we can see the value on the page at the begin.
render();
//     We can provide a function to store.subscribe that will be triggered every time the state change.
store.subscribe(render);

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
incrementBy10Button.addEventListener("click", () =>
  store.dispatch(incrementby10Action)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);
decrementBy10Button.addEventListener("click", () =>
  store.dispatch(decrementby10Action)
);
resetButton.addEventListener("click", () => store.dispatch(resetAction));
