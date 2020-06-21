/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

"use strict";

const { default: Axios } = require("axios");

require("./bootstrap");

window.Vue = require("vue");
Vue.use(require("vue-moment"));

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component("ver-tweet", require("./components/VerTweet.vue").default);
Vue.component(
    "tweet-manager",
    require("./components/TweetManager.vue").default
);
Vue.component("nuevo-tweet", require("./components/NuevoTweet.vue").default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    data: {
        users: [],
        tweets: [],
        changeCount: 0,
        tweet: {
            id: 0,
            content: "",
            user_id: 1,
            created_at: new Date(),
            updated_at: new Date() 
        }
    },
    created: function() {
        this.getUsers();
        this.fetchTweets();
    },
    methods: {
        getUsers: function() {
            axios.get("/user").then(users => (this.users = users.data));
        },
        fetchTweets: function() {
            this.tweets = [];
            axios.get("/tweet").then(tweets => {
                this.tweets = tweets.data;
            });
        },
        deleteTweet: function(index) {
            if (
                confirm(
                    "se va a eliminar el tweet de contenido: " +
                        this.idTweets[index].content
                )
            ) {
                Axios.delete(`/tweet/${this.idTweets[index].id}`).then(() => {
                    this.idTweets.splice(index, 1);
                    this.changeCount += 1;
                });
            }
        },
        showTweet: function(tweet) {
            Axios.get(`/tweet/${tweet.id}`).then(
                ftweet => this.tweet = ftweet.data
            );
        }
    },
    computed: {
        idTweets: function() {
            return _.orderBy(this.tweets, "id", "desc");
        }
    }
});
