import express from 'express';
import sequelize from './database';
import User from './models/user';
require('dotenv').config();


const app = express();
app.use(express.json());

// Define a route to test the database connection
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate()
    next()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

app.post('/insert', async (req, res) => {
    try {
      const { user_name, user_email, user_password, user_image, total_orders } = req.body;
  
      const newUser = await User.create({
        user_name,
        user_email,
        user_password,
        user_image,
        total_orders,
        created_at: new Date(),
        last_logged_in: new Date(),
      });
  
      // Respond with the newly created user record
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).send('Error inserting user');
    }
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
