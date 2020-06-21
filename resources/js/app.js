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
Vue.component("ver-tweet", {
    props: ["tweet", "user"],
    template: `<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ user.name }} dice...</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{ tweet.content }}
            </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Close
                </button>
                <button type="button" class="btn btn-primary">
                    Save changes
                </button>
            </div>
        </div>
    </div>
</div>`
});
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
            content: "",
            user_id: 0
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
                console.log("recogiendo " + this.lenghtTweets + " tweets");
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
            this.tweet.content = tweet.content;
            this.tweet.user_id = tweet.user_id;
        }
    },
    computed: {
        idTweets: function() {
            return _.orderBy(this.tweets, "id", "desc");
        },
        lengthTweets: function() {
            return this.tweets.length;
        }
    }
});
