const Event = require('../models/event');

// Create Event
exports.createEvent = async (req, res) => {
  const { name, description, date } = req.body;
  const owner = req.user.id;
  try {
    const event = new Event({ name, description, date, owner });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('owner', 'username');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
