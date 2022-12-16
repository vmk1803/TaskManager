import commonFetch from "./commonFetch"
import localStorage from "./localStorage"

export const getUserProfileApi = async (signUpDetails) => {
    console.log(signUpDetails, "details")
    try {
        const response = await commonFetch(`http://localhost:3003/user/signup`,
            "POST",
            { signUpDetails },
            new Headers({
                "content-type": "application/json"
            }),
        )
        return response
    } catch (error) {
        console.log("error in getUserProfileApi", error);
        throw error
    }
}

export const getUserRefreshTokenApi = async (accessToken) => {
    try {
        const response = await commonFetch(`http://localhost:3003/user/refreshToken`,
            "POST",
            {},
            new Headers({
                "content-type": "application/json",
                "accessToken": accessToken
            })
        )
        return response
    } catch (error) {
        console.log('error in user refresh token', error);
        throw error;
    }
}

export const saveUserTasksApi = async (tasks) => {
    try {
        const { accessToken = "" } = localStorage.getItemFromLocalStorage("trackingData");
        const response = await commonFetch(`http://localhost:3003/task/saveTasks`,
            "POST",
            { tasks },
            new Headers({
                'content-type': "application/json",
                "accesstoken": accessToken
            }))
        return response
    } catch (error) {
        console.log('error in save userTasks api', error);
        throw error;
    }
}