<template>
    <v-app-bar
        id="app-bar"
    >
        <v-app-bar-title>
            DevsBank<Icon icon="mdi:dev-to" color="white" />
        </v-app-bar-title>
        <v-btn-toggle
            class="mr-4"
        >
            <v-btn
              link to="/"
            >
                Home
            </v-btn>
            <v-btn
              link to="/login"
            >
                Login
            </v-btn>
            <v-btn
              link to="/create"
            >
                Criar Conta
            </v-btn>
        </v-btn-toggle>
    </v-app-bar>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon
    }
}

</script>

<style scoped>
#app-bar{
    background-color: #560d00;
    color: #FFFFFF;
}
</style>