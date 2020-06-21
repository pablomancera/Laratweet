const { default: Axios } = require("axios");

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <div class="card" style="width: 64rem;">
                    <form v-on:submit.prevent="publicarTweet(tweet)">
                        <div class="card-header">Publicar tweet</div>

                        <div class="card-body">
                            <textarea
                                v-model="tweet.content"
                                id="post"
                                rows="10"
                                style="box-sizing: border-box; width: 100%;"
                                maxlength="512"
                            ></textarea>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary" style="margin-left: 90%">
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
