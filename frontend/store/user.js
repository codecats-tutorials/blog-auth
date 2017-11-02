export default {
    state: {
        username: null,
        token: null
    },
    mutations: {
        setUser (state, data) {
            state.username = data.username;
            state.token = data.token
        }
    },
    getters: {
        getToken (state) {
            return state.token;
        },
        getUsername (state) {
            return state.username;
        }
    },
    actions: {
        login (ctx, {username, password}) {
            return fetch('rest/v1/api-token-auth/', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify({
                    'username': username,
                    'password': password
                })
            }).then((response) => {
                if (response.ok) {
                    return response[response.status === 204 ? 'text' : 'json']();
                } else {
                    return response.json().then(err => { throw err; });
                }
            }).then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('usernmae', username);
                ctx.dispatch('init');
            });
        },
        init (ctx) {
            ctx.commit('setUser', {'username': localStorage.getItem('username'), 'token': localStorage.getItem('token')})
        },
        logout (ctx) {
            // TODO: should be async because on server I'm still logged in, token should be removed on backend side
            localStorage.clear('username');
            localStorage.clear('token');
            ctx.commit('setUser', {'username': null, 'token': null});
        }
    }
};
