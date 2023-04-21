<template
    v-if="userState"
>
    <AppBar/>
</template>

<script>
import AppBar from "@/components/loged/AppBar.vue";

export default {
    name: "homeUserView.vue",
    components: {AppBar}
}
</script>

<style scoped>

</style>