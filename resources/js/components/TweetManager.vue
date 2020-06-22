const { default: Axios } = require("axios");

<template>
    <div style="margin-top: 32px">
        <div class="container">
            <div class="row justify-content-center">
                <div>
                    <div class="card" style="width: 64rem;">
                        <div v-if="authuser.id == user.id" class="card-header" style="background-color: #577284; color: white;">{{ user.name }} dice...</div>
                        <div v-else class="card-header" style="background-color: #77a8a8; color: white;">{{ user.name }} dice...</div>
                        <div class="card-body">
                            {{ tweet.content }}
                        </div>
                        <div class="card-footer">
                                <button class="btn btn-primary" @click="$emit('ver-tweet', tweet)" data-toggle="modal" data-target="#exampleModal">Ver</button>
                                <button v-if="authuser.id === user.id" @click="$emit('eliminar-tweet', index)" class="btn btn-danger">
                                    Eliminar
                                </button>
                            <i v-if="tweet.updated_at === tweet.created_at" style="float: right; line-height: 37px">
                                Publicado el
                                {{
                                    tweet.created_at
                                        | moment("MMMM Do YYYY, h:mm:ss a")
                                }}
                            </i>
                            <i v-else style="float: right; line-height: 37px">
                                Actualizado el
                                {{
                                    tweet.updated_at
                                        | moment("MMMM Do YYYY, h:mm:ss a")
                                }}
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["user", "tweet", "authuser", "index"]
};
</script>
