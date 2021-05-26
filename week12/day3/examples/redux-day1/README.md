# Intro to Redux

## How to setup Redux for your React Project

1. `npm install redux@next react-redux@next`
2. Import in your `index.js` Provider and createStore.
3. Wrap your `<App />` with `<Provider > <App /> </Provider >`
4. Create an instance of your store and put it in a store variable.
5. Create a new folder called `reducers`, inside of that folder create a file called `rootReducer.js`
6. Go to your `rootReducer` file. Create your `initialState` object.
7. Create your `rootReducer` function.
8. Your rootReducer function has two parameters, `(state=initialState, action)`.
9. In your `rootReducer` body, create a `switch` statement. You will create a `case` for each action your reducers can do for your state.
10. Export your `rootReducer`.
11. Import your `rootReducer` in your `index.js`. Pass the rootReducer to your `createStore(rootReducer)`.
12. Pass your `store` to your `Provider` as a prop.
13. You have finished setting up redux for your application. 🚀

## Use Redux in your components.

1. Import `useSelector` from `react-redux`.
2. Assign to a variable whatever state value you want to select. (`const counter = useSelector(state => state.counter)`).
3. You can now display that state variable by putting it in your JSX inside curly braces. `{counter}`.

## Change a state variable in Redux from our component.

1. Import `useDispatch` from `react-redux`.
2. Create an instance of `const dispatch = useDispatch()`.
3. Attach `dispatch` to whatever function or event handler will change that state.
4. Pass `dispatch` and object with a type that is referencing one of your `rootReducer` switch cases.(`dispatch({type: "ADD"})`)
