<template>
  <v-app id="sandbox">
    <v-app-bar app>
      <v-toolbar-title>Strims</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10"></v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import "./components/StrimList.vue";

export default Vue.extend({
  name: "App" as string,

  components: {},

  data() {
    return {};
  }
});
</script>
