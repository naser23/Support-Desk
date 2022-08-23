const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Note = require("../models/noteModel");
const Ticket = require("../models/ticketModel");

// @desc Get notes for a tickets
// @route GET /api/tickets/:ticketId/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);
  console.log(`User: ${user}`);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const ticket = await Ticket.findById(req.params.ticketId);
  // Why the fuck is this null?
  console.log(`ticket: ${ticket}`);
  console.log(`ticket.user: ${ticket.user}`);
  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not auhorized");
  }

  const notes = await Note.find({ ticket: req.params.ticketId });
  res.status(200).json(ticket);
});

module.exports = {
  getNotes,
};
