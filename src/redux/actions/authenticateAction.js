function login(id, password) {
  return (dispatch, getState) => {
    console.log("middleware:", id, password);
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT_SUCCESS", payload: null });
  };
}

export const authenticateAction = { login, logout };
