const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: false,
    enum: ['Guerrier', 'Alchimiste', 'Sorcier', 'Espions', 'Enchanteur']
  },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  img: { type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);


