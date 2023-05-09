<template>
    <v-container>
        <v-card
            class="bg-grey-darken-3"
        >
            <v-container>
                <v-row>
                    <v-col>
                        Selecione a chave do destinatário:
                    </v-col>
                    <v-col>
                        <v-btn-toggle class="mr-0" v-model="selected" theme="dark">
                            <v-btn
                                    v-for="chave in chaves"
                                    :key="chave"
                                    :value="chave"
                            >
                                {{ chave.title }}
                            </v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                        class="mr-auto ml-auto"
                        v-if="selected.value === 0"
                    >
                        <v-card
                            class="bg-grey-darken-4 mx-auto"
                            width="600"
                        >
                            <v-form @submit.prevent="sendPix()">
                                <v-container>
                                    <v-text-field
                                        type="email"
                                        label="E-mail"
                                        variant="underlined"
                                    ></v-text-field>

                                    <v-text-field
                                        label="Valor"
                                        variant="underlined"
                                    ></v-text-field>
                                    <v-btn
                                        type="submit"
                                        color="success"
                                    >
                                        Enviar
                                    </v-btn>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-col
                            class="mr-auto ml-auto"
                            v-if="selected.value === 1"
                    >
                        <v-card
                                class="bg-grey-darken-4 mx-auto"
                                width="600"
                        >
                            <v-form>
                                <v-container>
                                    <v-text-field
                                            label="Telefone"
                                            variant="underlined"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Valor"
                                            variant="underlined"
                                    ></v-text-field>
                                    <v-btn
                                            color="success"
                                    >
                                        Enviar
                                    </v-btn>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-col
                            class="mr-auto ml-auto"
                            v-if="selected.value === 2"
                    >
                        <v-card
                                class="bg-grey-darken-4 mx-auto"
                                width="600"
                        >
                            <v-form>
                                <v-container>
                                    <v-text-field
                                            label="CPF"
                                            variant="underlined"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Valor"
                                            variant="underlined"
                                    ></v-text-field>
                                    <v-btn
                                            color="success"
                                    >
                                        Enviar
                                    </v-btn>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                    <v-col
                            class="mr-auto ml-auto"
                            v-if="selected.value === 3"
                    >
                        <v-card
                                class="bg-grey-darken-4 mx-auto"
                                width="600"
                        >
                            <v-form>
                                <v-container>
                                    <v-text-field
                                            label="Chave"
                                            variant="underlined"
                                    ></v-text-field>

                                    <v-text-field
                                            label="Valor"
                                            variant="underlined"
                                    ></v-text-field>
                                    <v-btn
                                            submit
                                            color="success"
                                    >
                                        Enviar
                                    </v-btn>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "Pix.vue",
    data(){
        return{
            selected: 0,
            chaves: [
                {title: 'E-mail', value: 0},
                {title: 'Celular', value: 1},
                {title: 'CPF', value: 2},
                {title: 'Chave Aleatória', value: 3}
            ]
        }
    },
    methods:{
      sendPix(){
          console.log("PIX")
      }
    }
}
</script>