let postDataFetch = (url) => {
    fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entities[entities.length - 1])
    })
}
let getDataFetch = (url) => {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.json()
    }).then((response) => {
        console.log(response)
        entities = response

    })

}
let putDataFetch = (url, data) => {
    fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
let deleteDataFetch = (url) => {
    fetch(url, {
        method: "DELETE"
    })
}
let searchDataFetch = (attribute = 'entitytType', paramert = 'computer') => {
    getDataFetch(`${LINKS.data}?${attribute}=${paramert}`);
    createTable()
}