import Api from '@/services/Api'

export default {
  // get all songs
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  // create a song
  post (song) {
    return Api().post('songs', song)
  },
  // get one song
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  // update a song
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  // delete a song
  delete (songId) {
    return Api().delete(`songs/${songId}`)
  }
}
