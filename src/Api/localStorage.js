export default {
    setItemToLocalStorage: (keyName, data) => {
        console.log(keyName, data, "loca")
        return localStorage.setItem(keyName, JSON.stringify(data))
    },
    getItemFromLocalStorage: (keyName) => {
        return JSON.parse(localStorage.getItem(keyName))
    }
}