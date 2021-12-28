const mongoose = require("mongoose")

const todosSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  status : {
    type: Number
  },
  categories: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  }
},
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todosSchema);

module.exports = Todo;