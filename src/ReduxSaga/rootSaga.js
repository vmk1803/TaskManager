import { all } from "redux-saga/effects"
import { watchGetUserProfileReqSaga, watchSaveUserTasksSaga, watchUserRefreshToken } from "./userSaga"

function* rootSaga() {
    yield all([
        watchGetUserProfileReqSaga(),
        watchUserRefreshToken(),
        watchSaveUserTasksSaga()
    ])
}

export default rootSaga