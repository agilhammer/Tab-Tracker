import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Songs from '@/components/pages/Songs/Index'
import CreateSong from '@/components/pages/CreateSongs'
import ViewSong from '@/components/pages/ViewSong/Index'
import EditSong from '@/components/pages/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
