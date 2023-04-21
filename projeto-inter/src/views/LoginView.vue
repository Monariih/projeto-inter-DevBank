<template>
    <AppBar />
    <v-main
            id="main"
    >
        <v-container></v-container>
        <v-card
                id="card_login"
                align="center"
        >
            <v-card-title>
                Login
                <v-card-subtitle>
                    <hr>
                </v-card-subtitle>
            </v-card-title>
            <v-form @submit.prevent="handleSubmit">
                <v-container>
                    <v-card-item>
                        <v-text-field
                                v-model="email"
                                type="email"
                                :rules="[rules.required]"
                                label="E-MAIL / CPF"
                                variant="underlined"
                        >
                        </v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="underlined"
                                label="SENHA"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn
                            type="submit"
                            color="success"
                        >
                            Entrar
                        </v-btn>
                    </v-card-item>
                </v-container>
            </v-form>
        </v-card>
        <v-card
                id="show_error"
                v-if="error"
        >
            <div>
                {{ error }}
            </div>
        </v-card>
    </v-main>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default{
    name: 'LoginView.vue',
    components: { AppBar },

    data: () => {
        return ({
            togglePage: 1,

            // Declaração das variáveis de login

            show1: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
        })
    },
    setup() {
        const email = ref('')
        const password = ref('')

        const store = useStore()
        const router = useRouter()
        const error = ref('')

        const handleSubmit = async () => {
            try{
                await store.dispatch('login', {email: email.value, password: password.value})
                router.push('/homeUser')
            }catch (err) {
                error.value = err.message
            }
        }
        return { handleSubmit, email, password, error}
    }

}
</script>

<style scoped>
#main{
    height: 100%;
    background-color: #3c4039;
}
#card_login{
    margin: auto;
    background-color: #560d00;
    width: 30%;
    color: #FFFFFF;;
}
#show_error{
    margin: auto;
    padding: 1rem;
    width: fit-content;
    background-color: #383838;
    color: #FFFFFF;
}
</style>