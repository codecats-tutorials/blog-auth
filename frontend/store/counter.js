export default {
	state: {
        counter: 0
    },
    mutations: {
        increment (state, value) {
            state.counter = value;
        }
    },
    getters: {
        value (state, getters) {
            return state.counter;
        }
    },
    actions: {
        update(ctx, i) {
        	localStorage.getItem('token')
        	
            return fetch('rest/v1/counter/1/', {
            	'method': 'PUT', 
            	'headers': {
	                'Accept': 'application/json, text/plain, */*',
	                'Content-Type': 'application/json',
	                ...(localStorage.getItem('token') ? {'Authorization': `Token ` + localStorage.getItem('token')}: {})
	            }, body: JSON.stringify({
                    value: i
                })
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Not added');
                }
            }).then(({value}) => {
                ctx.commit('increment', value);
            });
        },
        get(ctx) {
            return fetch('rest/v1/counter/1/').then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Fail')
                }
            }).then(({value}) => {
                ctx.commit('increment', value);
            });
        }
    }
}