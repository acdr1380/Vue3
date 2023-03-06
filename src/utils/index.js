const { VITE_PROJECTNAME, VITE_PROJECTNUMBER } = import.meta.env;

function setStorage(key = '', value) {
    if (key && value) {
        localStorage.setItem(`${VITE_PROJECTNAME}_${VITE_PROJECTNUMBER}_${key}`, value);
    } else {
        throw new Error('未获取到key!');
    }
}

function getStorage(key = '') {
    if (key) {
        localStorage.getItem(`${VITE_PROJECTNAME}_${VITE_PROJECTNUMBER}_${key}`);
    } else {
        throw new Error('未获取到key!');
    }
}

export { setStorage, getStorage };
