const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
