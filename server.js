const express = require('express');
const app = express();
const db = require('./db');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categories');
const ticketRoutes = require('./routes/tickets');
const messageRoutes = require('./routes/messages');
const priorityRoutes = require('./routes/priority');
const ticketAssignmentRoutes = require('./routes/ticket_assignments');
const faqRoutes = require('./routes/faq');



app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/priority', priorityRoutes);
app.use('/api/ticket_assignments', ticketAssignmentRoutes);
app.use('/api/faq', faqRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
