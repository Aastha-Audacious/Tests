Full Description of the code uploaded in express.js test.


const express = require('express');
This line imports the express module which is a popular web framework for Node.js.

const multer = require('multer');
This line imports the multer middleware which is used for handling file uploads.

const path = require('path');
This line imports the built-in path module which provides utilities for working with file and directory paths.

const app = express();
This line creates a new instance of the express application.

const port = 7777;
This line sets the port number on which the server will listen for incoming requests.

app.use(express.json());
This line adds the express.json() middleware to the application. This middleware is used to parse JSON data in the request body.

app.use('/static', express.static(path.join(__dirname, 'uploads')));
This line sets up a middleware to serve static files from the uploads directory. It sets the path prefix to /static so that the files can be accessed using the URL https://example.com/static/filename.jpg.

app.get('/',
Copy code
  res.status(200).send({ message: "Welcome!" });
});```
This route handles requests to the root URL (`/`) and sends a JSON response with a welcome message.

```const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});```
This sets up the `multer` middleware with a custom disk storage engine. It specifies that uploaded files should be stored in the `uploads/` directory, and the filename should be a combination of the original fieldname, the current timestamp, and the original file extension.

```const upload = multer({ storage: storage });```
This line creates a new instance of the `multer` middleware using the `storage` configuration defined above.

```app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send({
    message: 'File uploaded successfully', 
    url: `https://example.com/static/${req.file.filename}`
  });
});```
This route handles POST requests to `/upload` and uploads a single file with the field name `file`. It sends a JSON response with a success message and the URL of the uploaded file.

```app.listen(port, () => {
  console.log('Server is running');
});```
This line starts the server and listens for incoming requests on the specified port.

// try to hit any random end point for this eg. localhost:7777/aasgdgfd
app.get('/*/', (req, res)=>{
  res.status(200).send({message: "Oops! This page is not available!"});
});


