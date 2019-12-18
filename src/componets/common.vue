<template>
    <div class='app'>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello word'
            }
        },
        created() {
        }
    }
</script>

<style lang="sass" scoped>
    .app {
        width: 800px;
        margin: 100px auto;
    }
</style>