const app = require("./index"); // get index.js

const port = process.env.PORT || 5000; //get the port
app.listen(port, () => console.log(`Server running on port ${port}`)); //start listening
