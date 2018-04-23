<template>
  <div>
    <!-- Primera Fila -->
    <v-layout class="ml-2">
      <v-flex xs6>
        <metadata :song="song" />
      </v-flex>

      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>

    <!-- Segunda Fila -->
    <v-layout class="mt-2">
      <v-flex xs6>
        <tabs :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Metadata from './Metadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tabs from './Tabs'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Metadata,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<style scoped>
</style>
