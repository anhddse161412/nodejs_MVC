const Person = require("../models/person");

class personController {
   async getPersons(req, res) {
      try {
         const persons = await Person.find();
         res.json(persons);
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   getPerson(req, res) {
      res.json(res.person);
   }

   async postPerson(req, res) {
      const person = new Person({
         title: req.body.title,
         description: req.body.description,
      });
      try {
         const newPerson = await person.save();
         res.status(201).json(newPerson);
      } catch (err) {
         res.status(400).json({ message: err.message });
      }
   }

   async updatePerson(req, res) {
      try {
         let person = res.person;
         const updatePerson = new Person({
            title: req.body.title,
            description: req.body.description,
         });
         person.title = updatePerson.title;
         person.description = updatePerson.description;
         const updatedPerson = await person.save();
         res.json(updatedPerson);
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   async deletePerson(req, res) {
      try {
         await res.person.remove();
         res.json({ message: `Deleted Subscriber : ${res.person.id}` });
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   async findPersonById(req, res, next) {
      let person;
      try {
         person = await Person.findById(req.params.id);
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
      res.person = person;
      next();
   }

   async notFoundroute(req, res) {
      res.send("404");
   }
}

module.exports = new personController();
