const { default: Axios } = require("axios");

<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div>
                    <div class="card" style="width: 64rem;">
                        <div class="card-header">Publicar tweet</div>

                        <div class="card-body">
                            <form action="">
                                <textarea
                                    name="tweet"
                                    rows="10"
                                    style="box-sizing: border-box; width: 100%;"
                                    maxlength="512"
                                    required
                                ></textarea>
                                <button>¡Publicar!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="container"
            v-for="tweet in tweets.reverse()"
            :key="tweet.id"
        >
            <div class="row justify-content-center">
                <div>
                    <div class="card" style="width: 64rem;">
                        <div class="card-header">
                            {{ getAuthor(tweet.user_id) }} dice...
                        </div>
                        <div class="card-body">
                            <p>{{ tweet.content }}</p>
                            <p>
                                Actualizado el
                                {{
                                    tweet.updated_at
                                        | moment("MMMM Do YYYY, h:mm:ss a")
                                }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['users'],
    data() {
        return {
            tweets: [],
        };
    },
    created() {
        this.fetchTweets();
        console.log(this.users);
    },
    methods: {
        fetchTweets() {
            axios.get("/tweet").then(tweets => (this.tweets = tweets.data));
        },
        getAuthor(id){
            return(this.users[(id-1)].name);
        }
    }
};
</script>
