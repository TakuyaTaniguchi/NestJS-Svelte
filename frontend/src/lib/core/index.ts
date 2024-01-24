// place files you want to import through the `$lib` alias in this folder.

const host = 'http://localhost:3000'

export const  apiCLient = async (url: string, method: string, body?: any) => {
    return fetch(`${host}/${url}`, {
        method: method,
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
        return res.json();
        })
        .catch((err) => console.log(err));
}