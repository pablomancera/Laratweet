const { default: Axios } = require("axios");

<template>
    <div>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["user", "tweet"]
};
</script>
