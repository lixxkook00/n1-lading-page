const account_reducer = (state, action) => {
  if (action.type === "SET_CURRENT_ACCOUNT") {
    const address = action.payload;
    return { ...state, account: address };
  }
  return state;
};

export default account_reducer;
