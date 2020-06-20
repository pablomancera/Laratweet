const { default: Axios } = require("axios");

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <div class="card" style="width: 64rem;">
                    <div class="card-header">{{ usuario.name }} dice...</div>
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
                    <div class="card-footer"> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="$emit('show-tweet', tweet.id)" id="verTweet">Ver tweet</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["tweet"],
    data () {
        return {
            usuario: {
                name: ''
            }
        }
    },
    created() {
        axios.get(`/userid/${this.tweet.user_id}`).then(user => this.usuario.name = user.data.name);
    }
};
</script>
