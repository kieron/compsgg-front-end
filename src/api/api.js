const API = process.env.VUE_APP_API_BASE_URL

const authenticate = async ({ provider, queryString }) => new Promise(resolve => {
    fetch(`${API}/auth/${provider}/callback${queryString}`)
        .then(res => res.status === 200 ? res :
            resolve({
                error: true,
                message: `Couldn't login to Strapi. Status: ${res.status}`
            })
        )
        .then(res => res.json())
        .then(res => resolve({
            error: false,
            data: res
        }))
        .catch(err => {
            resolve({
                error: true,
                message: err
            })
        });
})

export default {
    authenticate
}