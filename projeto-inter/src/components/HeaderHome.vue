<template>
    <v-app id="inspire">
        <v-app-bar
            id="app-bar"
        >
            <v-toolbar-title>
                DevsBank <Icon icon="iconoir:dev-mode-laptop" />
            </v-toolbar-title>
            
            <v-btn-toggle
                id="btn-group"
                v-model="text"
                rounded="8"
                color="yellow"
            >
                <v-btn value="home">
                    HOME
                </v-btn>
        
                <v-btn value="LOGIN">
                    LOGIN
                </v-btn>
        
                <v-btn value="SUPORTE">
                    SUPORTE
                </v-btn>
        
                <v-btn value="CRIAR">
                    CRIAR CONTA
                </v-btn>
            </v-btn-toggle>      
        </v-app-bar>
  
        <v-main>
        <!--  -->
        </v-main>
    </v-app>
</template>
  
<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
		Icon,
	},

    data () {
        return {
            text: 'center',
        }
    },
}
</script>

<style>
#btn-group{
    
}
#app-bar{
    background-color: rgb(87, 14, 14);
    color: white;
}
</style>