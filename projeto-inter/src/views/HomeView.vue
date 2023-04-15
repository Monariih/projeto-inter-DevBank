<template>
  <AppBar/>
      <v-parallax
          src="../src/assets/desenvolvedor.jpg"
      >
          <v-row
            class="pa-6 ma-6"
          >
              <v-col>
                  <h2>O banco de todo DeVeL0P3R.</h2>
              </v-col>
          </v-row>
          <div
            class="sub-div"
          >


              <Icon icon="arcticons:developerwidget" color="white" width="70" height="70" />
          </div>
      </v-parallax>
  <v-footer
    class="bg-grey-lighten-1"
  >
      <Footer/>
  </v-footer>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Footer from "@/components/footer.vue";
import { Icon } from '@iconify/vue';

export default{
    components: {Footer, AppBar, Icon},
  data: () => {
    return ({
      togglePage: 0,
    })
  }
}
</script>

<style scoped>
h2{
    color: #FFFFFF;
}
#icon{

}
</style>