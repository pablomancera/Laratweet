const { default: Axios } = require("axios");

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <div class="card" style="width: 64rem;">
                    <form v-on:submit.prevent="publicarTweet(tweet)">
                        <div class="card-header bluebar">Publicar tweet</div>

                        <div class="card-body">
                            <textarea
                                v-model="tweet.content"
                                class="tweetinput"
                                id="post"
                                rows="8"
                                maxlength="512"
                                placeholder="Escribe algo..."
                            ></textarea>
                        </div>
                        <div class="card-footer">
                            <button
                                type="submit"
                                class="btn btn-primary"
                                style="margin-left: 90%"
                            >
                                ¡Publicar!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tweet: {
                content: ""
            }
        };
    },
    methods: {
        publicarTweet: function(tweet) {
            if (document.getElementById("post").value.trim() === "") {
                alert("¡No puedes publicar un tweet vacío!");
                return;
            }
            axios.post("/tweet", tweet).then(() => {
                this.$emit("fetch-tweets");
                document.getElementById("post").value = "";
            });
        }
    }
};
</script>
