/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

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

Vue.component("nuevo-tweet", require("./components/NuevoTweet.vue").default);
Vue.component(
    "mostrar-tweets",
    require("./components/MostrarTweets.vue").default
);

Vue.component("tweet-seleccionado", require("./components/TweetSeleccionado.vue").default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    data: {
        tweets: [],
        tweet: {
            content: ""
        },
        tweetselecc: {
            id: 0,
            content: "",
            user_id: 0,
            created_at: new Date(),
            updated_at: new Date()
        },
    },
    created: function() {
        this.fetchTweets();
    },
    methods: {
        storeTweet(tweet) {
            if (this.tweet.content.trim() === "") {
                alert("El campo Contenido es obligatorio");
                return;
            }
            Axios.post("/tweet", tweet).then(() => this.fetchTweets());
        },
        fetchTweets() {
            Axios.get("/tweet").then(tweets => (this.tweets = tweets.data));
        },
        showTweet(id) {
            console.log("showTweet "+id);
            Axios.get(`/tweet/${id}`).then(tweet => {
                this.tweetselecc.id = tweet.data.id;
                this.tweetselecc.content = tweet.data.content;
                this.tweetselecc.user_id = tweet.data.user_id;
                this.tweetselecc.created_at = tweet.data.created_at;
                this.tweetselecc.updated_at = tweet.data.updated_at;
            });
        }
    }
});
