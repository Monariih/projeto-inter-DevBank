<template
    v-if="authIsReady"
>
    <v-app-bar
        id="app-bar"
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>DevsBank<Icon icon="mdi:dev-to" color="white" /></v-toolbar-title>
        <v-btn-toggle
                class="mr-4"
        >
            <v-btn
                    link to="/homeUser"
            >
                Home
            </v-btn>
            <v-btn
                    link to="/extract"
            >
                Transações
            </v-btn>
            <v-btn
                    link to="/"
                    @click="handleClick"
            >
                Sair
            </v-btn>
        </v-btn-toggle>
    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            temporary
    >
        <v-list-item
            link to="/homeUser"
        >
            <v-list-item-title>
                Home
            </v-list-item-title>
        </v-list-item>
        <v-list-item
            link to="/deposit"
        >
            <v-list-item-title>
                Depósitos
            </v-list-item-title>
        </v-list-item>
        ><v-list-item
                link to="/transfer"
        >
            <v-list-item-title>
                Transferências
            </v-list-item-title>
        </v-list-item>
        <v-list-item
                link to="/withdraw"
        >
            <v-list-item-title>
                Sacar
            </v-list-item-title>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item link to="/">
            <v-list-item-title @click="handleClick">

                Logout <v-icon icon="mdi-logout"></v-icon>

            </v-list-item-title>
        </v-list-item>

    </v-navigation-drawer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon
    },
    data: () => ({ drawer: null }),

    setup(){
        const store = useStore()

        const handleClick = () => {
            store.dispatch('logout')
        }
        return {
            handleClick,
            user: computed(() => store.state.user),
            authIsReady: computed(() => store.state.authIsReady)
        }
    }
}

</script>

<style scoped>
#app-bar {
    background-color: #560d00;
    color: #FFFFFF;
}
</style>