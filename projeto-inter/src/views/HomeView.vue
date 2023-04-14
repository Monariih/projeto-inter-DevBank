<template>
  <v-app-bar>
    <v-app-bar-title>
      DevsBank
    </v-app-bar-title>
    <v-btn-toggle>
      <v-btn
        link to="/"

      >
        btn
      </v-btn>
      <v-btn
        link to="/login"
      >
        btn
      </v-btn>
    </v-btn-toggle>
  </v-app-bar>

<v-main>
  login
</v-main>
</template>

<script>
export default{
  data: () => {
    return ({
      togglePage: 0,
    })
  }
}
</script>
