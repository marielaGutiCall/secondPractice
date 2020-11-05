export const STATE = {
  dataSignUp: {},
};

export const reducerSignUp = (state = STATE, action) => {
  switch (action.type) {
    case "SIGNUP_USER": {
      const newDataSignUp = action.payload;
      return {
        ...state,
        dataSignUp: { ...state.dataSignUp, ...newDataSignUp },
      };
    }
    default:
      return state;
  }
};


