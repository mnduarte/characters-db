const mongoose = require('mongoose')
const contextService = require('request-context');

const characterSchema = new mongoose.Schema({
  _id:    { type: String, required: true  },
  gender: { type: String, required: true },
  image:  { type: String, required: true},
  name:   { type: String, required: true},
  originPlanet: { type: String, required: true },
  series: { type: String, required: true },
  species: { type: String,required: true},
  status: { type: String, required: true},
  likes: { type: Number, required: true},
  likes_from: { type: Array}
})

characterSchema.set('toObject', { virtuals: true })
characterSchema.set('toJSON', { virtuals: true })

characterSchema.virtual('like')
  .get(function() {
    const user = contextService.get('request.req.user');
    const likesFrom = this.likes_from
    /*console.log(typeof likesFrom)
    console.log(this.likes_from)
    console.log(user)*/
    return likesFrom.some(e => e.username === user.username)
  })



module.exports = mongoose.model('Character', characterSchema)