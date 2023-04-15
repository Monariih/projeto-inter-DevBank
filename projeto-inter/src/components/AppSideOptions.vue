<template>

    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


    <v-navigation-drawer
            v-model="drawer"
            temporary
    >
        <!--  -->
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({drawer: null}),
}
</script>