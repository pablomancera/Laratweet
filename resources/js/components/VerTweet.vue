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
                <div class="modal-header">
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
                        style="box-sizing: border-box; width: 100%;"
                    ></textarea>
                    <p v-else>{{ tweet.content }}</p>
                    <p class="font-italic">
                        {{
                            tweet.updated_at | moment("MMMM Do YYYY, h:mm:ss a")
                        }}
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button
                        v-if="user.id === authuser.id"
                        type="button"
                        class="btn btn-primary"
                        @click="$emit('actualizar-tweet', tweet)"
                        data-dismiss="modal"
                    >
                        Save changes
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
