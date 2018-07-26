const initialState = {
  logged: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "LOGGING":
    return { logged: true }

    case "LOGOUT":
    return { logged: false }

  default:
    return state
  }
}
