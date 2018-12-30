import fetch from 'isomorphic-fetch'

export function Post(url, params) {
    const result = fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: params
    });

    return result;
}
