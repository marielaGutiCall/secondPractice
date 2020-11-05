export const STATE = {
  dataUserSignIn: {},
};

export const reducerSignIn = (state = STATE, action) => {
  switch (action.type) {
    case "SIGNIN_USER": {
      const newDataUser = action.payload;
      return {
        ...state,
        dataUser: { ...state.dataUserSignIn, ...newDataUser },
      };
    }
    default:
      return state;
  }
};

