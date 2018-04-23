import Api from '@/services/Api'

export default {
  // get bookmark
  index (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  // set bookmark
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  // delete bookmark
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
