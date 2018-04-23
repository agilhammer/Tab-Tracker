<template>
  <panel title="Search">
    <v-text-field
      label="Search by song title, artist, album or genre"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    // lodash _.debount((),500) se usa para demorar la ejecución de la búsqueda y esperar a que el usuario termine de tipear, sino hace una petición por cada tecla
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 500),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
