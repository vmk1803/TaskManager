const commonFetch = async (url, method, body, headers) => {
    let sendObj = {
        method,
        headers
    };
    if (method === "PUT" || method === "POST") {
        sendObj = {
            ...sendObj,
            body: JSON.stringify(body)
        }
    }

    const response = await fetch(url, sendObj);
    const data = await response.json();

    return data
}
export default commonFetch