const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let songs = null
      const search = req.query.search

      if (search) {
        const Sequelize = require('sequelize')
        const Op = Sequelize.Op
        songs = await Song.findAll({
          where: {
            [Op.or]: [
              'title',
              'artist',
              'genre',
              'album'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 15
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the Song/Songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create the Song.'
      })
    }
  },
  async show (req, res) {
    try {
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the Song.'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the Song.'
      })
    }
  },
  async delete (req, res) {
    try {
      const song = await Song.destroy({
        where: {
          id: req.params.songId
        }
      })
      if (song) {
        res.send({
          msg: `Song deleted`
        })
      } else {
        res.send({
          msg: `Song not found`
        })
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the Song.'
      })
    }
  }
}
