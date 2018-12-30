import fetch from 'isomorphic-fetch'


export function Get(url) {

    let result = fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
    });
    return result;
}
