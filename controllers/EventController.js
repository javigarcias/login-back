const {Event} = require('../models');

const EventController = {

    async getAll(req,res){
        try{
           const events = await Event.findAll();
           res.status(201).send(events);
        } catch(error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get events'})
            }
    },
    
    async create(req,res) {
        try{
            const newEvent = {
                event:req.body.event,
                date:req.body.date,
                UserId:req.user.id
            }
            const event = await Event.create(newEvent);
            res.status(201).send(event);
        } catch(error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem create event'})
        }
        
    },
    async delete(req, res) {
        try {
          const event = await Event.destroy({
            where: {
              id: req.params.id,
            },
          });
          if (!event) {
            return res.status(400).send({
              message: "Event not found",
            });
          }
          res.status(201).send({
            message: "Event deleted",
          });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem delete user" });
        }
      },
      async update(req, res) {
        try {
          const event = await Event.update(req.body, {
            where: {
              id: req.params.id,
            },
          
          });
          if (!event) {
            return res.status(404).send({
              message: "Event not found",
            });
          }
          res.status(201).send({
            message: "Event data update",
          });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: "There was a problem update event" });
        }
      }
     
}

module.exports = EventController;