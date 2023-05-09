<template>
    <AppBar/>

    <v-row
            id="first-row"
            class="bg-grey-darken-1 text-center"
    >
        <v-col id="first-col">
            Olá (usuário) seu saldo é de (balance)
        </v-col>
    </v-row>
    <v-row
            class="bg-grey-darken-2 text-center"
    >
        <v-col
            cols="3"
            class="mt-auto mb-auto"
            id="first-row"
        >
            Somente.aqui/no|DevsBank\você-pode=>
        </v-col>
        <v-col id="second-col"
            class="mt-auto mb-auto"
        >
            <v-row>
                <v-col>
                    Transferências ilimitadas para todos os bancos.
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    Esconder o seu dinheiro num lugar seguro.
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    Sonegar imposto sem ser detectado pelo leão
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    E é claro muito mais.
                </v-col>
            </v-row>
        </v-col>
        <v-col>
            <v-parallax
                src="../src/assets/desenvolvedoraHome.jpg"
            >

            </v-parallax>
        </v-col>
    </v-row>
    <v-row
        class="bg-grey-darken-3"
    >
        <v-col class="text-center">
            Eai, qual serviço vai usar hoje?
        </v-col>
    </v-row>
    <v-row
        class="bg-grey-darken-4"
    >
        <v-col
        >
            <v-tabs
                v-model="selected"
                centered
            >
                <v-tab
                    v-for="item in items"
                    :key="item"
                    :value="item"
                >
                    {{ item.title }}
                </v-tab>
            </v-tabs>
        </v-col>
    </v-row>
        <v-row
                class="bg-grey-darken-4"
        >
            <v-col
                v-if="selected.value === 0"
            >
                <Pix/>
            </v-col>
            <v-col
                    v-if="selected.value === 1"
            >
                Area TED
            </v-col>
            <v-col
                    v-if="selected.value === 2"
            >
                Area DOC
            </v-col>
            <v-col
                    v-if="selected.value === 3"
            >
                Area SAQUE
            </v-col>
            <v-col
                    v-if="selected.value === 4"
            >
                Area Deposito
            </v-col>

        </v-row>


</template>

<script>
import AppBar from "@/components/loged/AppBar.vue";
import Pix from "@/components/loged/Pix.vue";

export default {
    name: "homeUserView.vue",
    components: {
        AppBar,
        Pix,
    },
    data(){
        return{
            selected: 'tab-2',
            items: [
                {title: 'PIX', value: 0},
                {title: 'TED', value: 1},
                {title: 'DOC', value: 2},
                {title: 'SAQUE', value: 3},
                {title: 'DEPÓSITO', value: 4}
            ]
        }
    }
}
</script>

<style scoped>
#first-col{
    font-size: 24pt;
}
#second-col{
    vertical-align: baseline;
}
</style>