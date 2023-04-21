<template>
  <v-row
    align="baseline"
    class="pa-2 ma-2"
  >
      <v-col
        class="pa-2 ma-2"
      >
          Serviços:
          <v-divider
            class="ma-1"
          ></v-divider>
          <v-row>
              <v-col>
                  PIX <Icon icon="fa6-brands:pix" /><v-spacer></v-spacer>
                  TRANSFERÊNCIAS <Icon icon="fa6-solid:money-bill-transfer" /><v-spacer></v-spacer>
                  CONSULTAS <Icon icon="mdi:account-cash" /><v-spacer></v-spacer>
                  SAQUES <Icon icon="solar:cash-out-bold" /><v-spacer></v-spacer>
                  PAGAMENTOS <Icon icon="mdi:payment-clock" />
              </v-col>
          </v-row>
      </v-col>
      <v-col
        cols="6"
        class="pa-2 ma-2"
      >
          Sobre Nós
          <v-divider
            class="ma-1"
          ></v-divider>
          <v-row>
              <v-col>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet architecto atque, dicta dignissimos dolor dolore dolorem doloribus dolorum fugiat ipsa maxime neque non obcaecati quam quod reiciendis vero voluptate?
              </v-col>
          </v-row>
      </v-col>

      <v-col
        class="pa-2 ma-2"
      >
          Direitos a:
          <v-divider
            class="ma-1"
          ></v-divider>
          <v-row>
              <v-col>
                  Lucas Monari - 30146470<v-spacer></v-spacer>
                  Douglas Zucolotto - 29708672<v-spacer></v-spacer>
                  Fernando Macena - 29660351<v-spacer></v-spacer>
                  Gabriel Vianna - 29604745<v-spacer></v-spacer>
                  Douglas Cantuario - 29527996<v-spacer></v-spacer>
                  Guilherme Rodrigues - 29684994<v-spacer></v-spacer>
                  José Azevedo Júnior - 29685729<v-spacer></v-spacer>
                  Gabriel dos Santos - 30165709<v-spacer></v-spacer>
              </v-col>
          </v-row>
      </v-col>
  </v-row>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: "footer",
    components: {
        Icon,
    }
}
</script>

<style scoped>

</style>