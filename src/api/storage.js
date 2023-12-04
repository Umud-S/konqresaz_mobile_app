export const saveToStorage =  (key, value) => {
    localStorage.setItem(`${key}`, value)
}

export const readFromStorage =  (key) => {
    let data =  localStorage.getItem(key)
    if(data) return data
    else return ''
}

export const removeFromStorage =  (key) => {
    localStorage.removeItem({
        key: key
    })
}

export const clearAll =  () => {
    localStorage.clear();
}

// // Save data to localStorage
// localStorage.setItem('key', 'value');
//
// // Get saved data from localStorage
// let data = localStorage.getItem('key');
//
// // Remove saved data from localStorage
// localStorage.removeItem('key');
//
// // Remove all saved data from localStorage
// localStorage.clear();