import { call, put, select, takeLatest } from "redux-saga/effects"
import localStorage from "../Api/localStorage"
import { getUserProfileApi, getUserRefreshTokenApi, saveUserTasksApi } from "../Api/userApi"
import { GET_USER_PROFILE_REQUEST, REFRESH_TOKEN, SAVE_USER_TASKS } from "../Redux/actions/actions"
import { getUserProfileSuccess, setUserType } from "../Redux/actions/userAction"

function* getUserProfileRequest(action) {
    try {
        const {
            error = false,
            body = {}
        } = yield call(getUserProfileApi, action.payload.signUpDetails)
        if (!error) {
            // set data to localstorage
            yield localStorage.setItemToLocalStorage("trackingData", { accessToken: body.accessToken });
            // store userProfile in redux
            yield put(getUserProfileSuccess(body))
        }
    } catch (error) {

    }
}

export function* watchGetUserProfileReqSaga(action) {
    yield takeLatest(GET_USER_PROFILE_REQUEST, getUserProfileRequest)
}

function* getUserRefreshToken(action) {
    const {
        accessToken = ""
    } = action.payload;
    try {
        const response = yield getUserRefreshTokenApi(accessToken);
        if (!response.error) {
            yield put(getUserProfileSuccess(response.body))
        }
    } catch (error) {
        yield put(setUserType(error))
    }
}

export function* watchUserRefreshToken(action) {
    yield takeLatest(REFRESH_TOKEN, getUserRefreshToken)
}

function* saveUserTasksRequest(action) {
    const {
        tasks = []
    } = action.payload;
    try {
        const response = yield call(saveUserTasksApi, tasks);
        const userInfo = yield select(state => state.userProfile.userInfo);
        if (!response.error) {
            yield put(getUserProfileSuccess({ ...userInfo, userTasks: response.updatedTasks }))
        }
    } catch (error) {
        console.log('error in saveUserTasksRequestSaga', error);
    }
}

export function* watchSaveUserTasksSaga(action) {
    yield takeLatest(SAVE_USER_TASKS, saveUserTasksRequest)
}