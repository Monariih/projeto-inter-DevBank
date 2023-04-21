<template>
    <AppBar/>
    <v-main
        id="main"
    >
        <v-container></v-container>
        <v-card
            id="card_create"
            align="center"
        >
            <v-card-title>
                Abrir conta
                <v-card-subtitle>
                    <hr>
                </v-card-subtitle>
            </v-card-title>
            <v-form @submit.prevent="handleSubmit">
                <v-container>
                    <v-card-item>
                        <v-text-field
                            v-model="fullName"
                            :rules="[rules.required]"
                            label="Nome completo"
                            variant="underlined"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="email"
                            type="email"
                            :rules="[rules]"
                            label="E-mail"
                            variant="underlined"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="cpf"
                            label="CPF"
                            variant="underlined"
                            :rules="[rules.required]"
                            v-mask="['###.###.###-##']"
                        ></v-text-field>
                        <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                variant="underlined"
                                label="Senha"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-btn
                                @click="createUser"
                                type="submit"
                                color="success"
                        >
                            Cadastrar
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
import devsBankApi from "@/libraries";

export default {
    name: "CreateView.vue",
    components: {AppBar},
    data: () => {
        return ({
            // Declaração das variáveis de cadastro
            email: null,
            fullName: null,
            cpf: null,

            show1: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },

        })
    },
    methods: {
        async createUser(){
            if (this.fullName != null && this.cpf != null && this.email != null && this.password != null) {
                let create = await devsBankApi.TransferFunctions.createData(this.email, this.fullName, this.cpf)

                console.log(create)
            }
        }

    },
    setup() {
        const email = ref('')
        const password = ref('')

        const store = useStore()
        const router = useRouter()
        const error = ref('')

        const handleSubmit = async () => {
            try{
                await store.dispatch('signup', {email: email.value, password: password.value})
                router.push('/')
            }catch (err){
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
#card_create{
    margin: auto;
    background-color: #560d00;
    width: 30%;
    color: #FFFFFF;;
}
</style>