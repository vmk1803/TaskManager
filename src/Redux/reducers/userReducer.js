import { GET_USER_PROFILE_SUCCESS, SET_LOGIN_MODAL, SET_SIGNUP_MODAL, SET_USER_AUTH_TYPE } from "../actions/actions";

const init = {
    isSignUpModalOpen: false,
    userType: "",
    isLoginModalOpen: false
};

const userReducer = (state = init, action) => {
    switch (action.type) {
        case SET_SIGNUP_MODAL:
            return { ...state, isSignUpModalOpen: action.payload.isSignUpModalOpen }
        case GET_USER_PROFILE_SUCCESS:
            return { ...state, userInfo: action.payload.userProfile }
        case SET_USER_AUTH_TYPE:
            return { ...state, userType: action.payload.userType }
        case SET_LOGIN_MODAL:
            return { ...state, isLoginModalOpen: action.payload.toggleStatus }
        default: return state
    }
}

export default userReducer