const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const noteRouter = require("./noteRoutes");
const {
  getTickets,
  createTickets,
  getUserTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

router.route("/").get(protect, getTickets).post(protect, createTickets);

// Re-route into note router
router.use("/:ticetId/notes", noteRouter);
router
  .route("/:id")
  .get(protect, getUserTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
