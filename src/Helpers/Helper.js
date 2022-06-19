class Helper {


//     if (!source && source.length !== 0) {
//     localStorage.setItem(key, JSON.stringify(source));
// }

    static setLocalStorageData(key, source) {

        if (source) {
            if (source.length !== 0) {
                localStorage.setItem(key, JSON.stringify(source));
            }
        }


    }

    static getLocalStorageData(key) {
        if (!localStorage.getItem(key) || !localStorage.getItem(key).length < 0) {
            return 0;
        }
        return JSON.parse(localStorage.getItem(key));
    }

    static idGenerator(subject) {
        return subject + '_' + Date.now()
    }
}

export default Helper;