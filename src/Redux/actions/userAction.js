import { GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, REFRESH_TOKEN, SAVE_USER_TASKS, SET_LOGIN_MODAL, SET_SIGNUP_MODAL, SET_USER_AUTH_TYPE } from "./actions";

export const setSignUpModal = (toggleStatus) => ({
    type: SET_SIGNUP_MODAL,
    payload: { isSignUpModalOpen: toggleStatus }
})

export const getUserProfileRequest = (userAuthDetails, authType) => ({
    type: GET_USER_PROFILE_REQUEST,
    payload: { userAuthDetails, authType }
})

export const getUserProfileSuccess = (userProfile) => ({
    type: GET_USER_PROFILE_SUCCESS,
    payload: { userProfile }
})

export const checkRefreshToken = (accessToken) => ({
    type: REFRESH_TOKEN,
    payload: { accessToken }
})

export const setUserType = (userType) => ({
    type: SET_USER_AUTH_TYPE,
    payload: { userType }
})

export const setUserTasksRequest = (tasks) => ({
    type: SAVE_USER_TASKS,
    payload: { tasks }
})

export const setLoginModal = (toggleStatus) => ({
    type: SET_LOGIN_MODAL,
    payload: { toggleStatus }
})