import { 
    fectchNewsList,
    fectchJobsList,
    fectchAskList,
    fectchUserInfo,
}  from '../api/index.js';


export default {
    fetch_news(context) {
        fectchNewsList()
            .then(response => {
                context.commit('set_news', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    fetch_jobs(context) {
        fectchJobsList() 
            .then(response => {
                console.log(context);
                console.log(response);
                context.commit('set_jobs', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
    
    fetch_ask(context) {
        fectchAskList() 
            .then(response => {
                console.log(response);
                context.commit('set_ask', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        
    fetch_user({ commit }, name) {
        fectchUserInfo(name)
            .then( ({data}) => {
                console.log(data);
                commit('set_user', data)
            })
            .catch(error => {
                console.log(error);
            });
    }
}