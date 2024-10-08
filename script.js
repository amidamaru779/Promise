const get = "db.json"
const send = "https://jsonplaceholder.typicode.com/posts"

const getData = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err))
};

const sendData = (url, data) => {
    return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .catch((err) => console.log(err))
};

getData(get)
    .then((data) => {
        return sendData(send, data)
    })
    .then((responseData) => {
        console.log(responseData)
    })
    .catch((err) => console.log(err))