const initialState = "light";

//deixando os parâmetros opcionais (state=initialState e actions={});
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.theme };
  }

  return state;
};
