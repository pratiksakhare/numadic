const request = require('request');

let parseJson = (obj, allKeys) => {
    if (typeof obj != "object") {
        return;
    }
    if(Array.isArray(obj)) {
        obj.forEach(obj_i => {
            if (typeof obj_i == "object") {
                return parseJson(obj_i, allKeys);
            }
        }) 
    } else {
        let keys = Object.keys(obj);
        keys.forEach(key => {
            allKeys.push(key);
            if (typeof obj[key] == "object") {
                return parseJson(obj[key], allKeys);   
            }
        })
    }
}
let returnKeys = (url, cb) => {

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let allKeys = [];
            parseJson(JSON.parse(body), allKeys);
            return cb(allKeys)
        } else {
            return cb([]);
        }
    })
}

module.exports = {returnKeys}


