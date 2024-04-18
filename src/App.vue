<template>
    <RouterView />
</template>

<script lang="ts" name="" setup>
    import { RouterLink, RouterView } from 'vue-router'
    import xhRequest from './service'
    console.log(
        xhRequest.instance.get('/login').then((res) => {
            console.log(res)
        })
    )
</script>

<style scoped></style>
