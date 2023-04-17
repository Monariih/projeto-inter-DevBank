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
            <v-form @submit.prevent="create">
                <v-container>
                    <v-card-item>
                        <v-text-field
                            v-model="nomeCompletoCadastra"
                            :rules="[rules.required]"
                            label="Nome completo"
                            variant="underlined"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="emailCadastra"
                            :rules="[rules.confirm]"
                            label="E-mail"
                            variant="underlined"
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="cpfCadastra"
                            label="CPF ou CNPJ"
                            variant="underlined"
                            :rules="[rules.required]"
                            v-mask="['###.###.###-##','##.###.###/####-##']"
                        ></v-text-field>
                        <v-text-field
                                v-model="passwordCadastra"
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
                                type="submit"

                                color="success"
                        >
                            Cadastrar
                        </v-btn>
                    </v-card-item>
                </v-container>
            </v-form>
        </v-card>
    </v-main>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
    name: "CreateView.vue",
    components: {AppBar},
    data: () => {
        return ({
            // Declaração das variáveis de cadastro
            nomeCompletoCadastra: null,
            emailCadastra: null,
            cpfCadastra: null,
            passwordCadastra: null,
            show1: false,
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
        })
    },

    methods: {
        create() {
            alert("logon")
        }
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