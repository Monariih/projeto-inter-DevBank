<template>
  <BankHome />
</template>

<script>
import { defineComponent } from 'vue';

// Components

import BankHome from '@/components/BankHome.vue';

export default defineComponent({
  name: 'HomeView',

  components: {

    BankHome
  },
});
</script>
