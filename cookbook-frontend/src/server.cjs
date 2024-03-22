
// const express = require('express');
// const cors = require('cors');
// const app = express();


// // Enable CORS for a specific origin
// app.use(cors({ origin: 'http://localhost:5173' }));


// // Define your routes and other server configurations below this line

// // Your other routes and middleware configurations go here

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ 
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Define your routes and other server configuration below this line

// Start the server
const PORT = process.env.PORT || 8081; // Use port 8080 as an example

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/api/recipes', (req, res) => {
  // Add your code here

});

