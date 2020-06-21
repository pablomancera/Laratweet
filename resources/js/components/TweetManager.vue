const { default: Axios } = require("axios");

<template>
    <div style="margin-top: 32px">
        <div class="container">
            <div class="row justify-content-center">
                <div>
                    <div class="card" style="width: 64rem;">
                        <div class="card-header">{{ user.name }} dice...</div>
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
                        <div class="card-footer">
                                <button class="btn btn-primary" @click="$emit('ver-tweet', tweet)" data-toggle="modal" data-target="#exampleModal">Ver</button>
                                <button v-if="authuser.id === user.id" @click="$emit('eliminar-tweet', index)" class="btn btn-danger">
                                    Eliminar
                                </button>
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
