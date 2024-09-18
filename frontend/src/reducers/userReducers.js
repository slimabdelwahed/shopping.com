const initialState = {
    userInfo: null,
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return { ...state, loading: true };
      case 'USER_LOGIN_SUCCESS':
        return { ...state, loading: false, userInfo: action.payload };
      case 'USER_LOGIN_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'USER_LOGOUT':
        return { ...state, userInfo: null };
      case 'USER_PROFILE_REQUEST':
        return { ...state, loading: true };
      case 'USER_PROFILE_SUCCESS':
        return { ...state, loading: false, userInfo: action.payload };
      case 'USER_PROFILE_FAIL':
        return { ...state, loading: false, error: action.payload };
      case 'USER_UPDATE_PROFILE_REQUEST':
        return { ...state, loading: true };
      case 'USER_UPDATE_PROFILE_SUCCESS':
        return { ...state, loading: false, userInfo: action.payload };
      case 'USER_UPDATE_PROFILE_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;