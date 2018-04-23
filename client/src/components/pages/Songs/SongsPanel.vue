<template>
  <panel title="Songs">
    <v-btn
    slot="action"
    :to="{
          name: 'songs-create'
        }"
    class="cyan accent-2"
    light
    medium
    absolute
    right
    middle
    fab>
    <v-icon>add</v-icon>
    </v-btn>
    <div
    class="song"
    v-for="(song, index) in songs"
    :key="song.id">

    <v-layout>
    <v-flex xs6>
      <div class="song-title">
      {{song.title}}
      </div>
      <div class="song-artist">
      {{song.artist}}
      </div>
      <div class="song-album">
      {{song.album}}
      </div>

      <v-btn
      dark
      class="cyan"
        :to="{
        name: 'song',
          params: {
          songId: song.id
          }
      }">
      View
      </v-btn>
      <br>

      <v-dialog v-model="deleteDialog" persistent max-width="290">
        <v-btn
          small
          dark
          fab
          class="red"
          slot="activator">
          <v-icon>delete</v-icon>
        </v-btn>
        <v-card>
          <v-card-title class="headline">Delete song</v-card-title>
          <v-card-text>Are you sure?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="deleteDialog = false">Cancel</v-btn>
            <v-btn color="red darken-1" flat @click="eliminar(song.id, index)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>

    <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
    </v-flex>
    </v-layout>

    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null,
      deleteDialog: false
    }
  },
  methods: {
    async eliminar (id, index) {
      try {
        await SongsService.delete(id)
        this.songs.splice(index, 1)
        this.deleteDialog = false
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-album {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
