const apiRequest = async (url = ' ', optionsObj = null, errMsg = null) => {
    try{
        const response = fetch(url, optionsObj);
        if (!response.ok) throw Error('Please relod the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
         return errMsg;
    }
}

export default apiRequest