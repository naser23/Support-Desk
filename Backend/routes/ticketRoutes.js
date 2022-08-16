const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getTickets,
  createTickets,
  getUserTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

router.route("/").get(protect, getTickets).post(protect, createTickets);

router
  .route("/:id")
  .get(protect, getUserTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
