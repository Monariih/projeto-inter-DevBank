<template>
    <v-app-bar>
      <v-app-bar-title>
        DevsBank
      </v-app-bar-title>
      <v-btn-toggle>
        <v-btn
          value="0"
          link to="/"

        >
          btn
        </v-btn>
        <v-btn
          value="1"
          link to="/login"

        >
          btn
        </v-btn>
      </v-btn-toggle>
  
    </v-app-bar>
  <v-main>

  </v-main>
</template>

  <script>
  export default{
    data: () => {
      return ({
        togglePage: 1,
      })
    }
  }
  </script>
  