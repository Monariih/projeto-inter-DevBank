<template>
  <AppBar/>
  <v-main>
      Hello
  </v-main>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default{
    components: {AppBar},
  data: () => {
    return ({
      togglePage: 0,
    })
  }
}
</script>
