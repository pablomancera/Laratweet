<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div
                    class="modal-header"
                    style="background-color: #577284; color: white;"
                >
                    <h5 class="modal-title" id="exampleModalLabel">
                        {{ user.name }} dice...
                    </h5>
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
                    <textarea
                        v-if="user.id === authuser.id"
                        v-model="tweet.content"
                        cols="30"
                        rows="10"
                        maxlength="512"
                        class="tweetinput"
                    ></textarea>
                    <p v-else>{{ tweet.content }}</p>
                </div>
                <div class="modal-footer">
                    <i style="flex-grow: 3">
                        {{
                            tweet.updated_at | moment("MMMM Do YYYY, h:mm:ss a")
                        }}
                    </i>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        v-if="user.id === authuser.id"
                        type="button"
                        class="btn btn-primary"
                        @click="$emit('actualizar-tweet', tweet)"
                        data-dismiss="modal"
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["tweet", "user", "authuser"]
};
</script>
