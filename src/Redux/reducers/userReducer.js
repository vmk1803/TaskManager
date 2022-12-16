import { GET_USER_PROFILE_SUCCESS, SET_SIGNUP_MODAL, SET_USER_AUTH_TYPE } from "../actions/actions";

const init = {
    isSignUpModalOpen: false,
    userType: ""
};

const userReducer = (state = init, action) => {
    switch (action.type) {
        case SET_SIGNUP_MODAL:
            return { ...state, isSignUpModalOpen: action.payload.isSignUpModalOpen }
        case GET_USER_PROFILE_SUCCESS:
            return { ...state, userInfo: action.payload.userProfile, userType: "AUTHENTICATED" }
        case SET_USER_AUTH_TYPE:
            return { ...state, userType: action.payload.userType }
        default: return state
    }
}

export default userReducer