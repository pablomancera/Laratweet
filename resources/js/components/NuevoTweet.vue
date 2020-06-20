<template>
    <div class="container">
        <div class="row justify-content-center">
            <div>
                <div class="card" style="width: 64rem;">
                    <div class="card-header">Publicar tweet</div>

                    <div class="card-body">
                        <form action="">
                            <textarea v-model="tweet.content"
                                name="tweet"
                                rows="10"
                                style="box-sizing: border-box; width: 100%;"
                                maxlength="512"
                                required
                            ></textarea>
                            <button v-on:click="$emit('nuevo-tweet', tweet)">¡Publicar!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["tweet"]
}
</script>
