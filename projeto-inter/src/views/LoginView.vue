<template>
    <AppBar />
    <AppSideOptions/>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import AppSideOptions from "@/components/AppSideOptions.vue";

export default{
  components: {AppSideOptions, AppBar},
  data: () => {
    return ({
      togglePage: 1,
    })
  }
}
</script>
  