const express = require('express');
const multer  = require('multer');
const path = require('path');
const app = express();
const port = 7777;

// middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// homepage routing
app.get('/', (req, res)=>{
    res.status(200).send({message: "Welcome!"});
});
// try to hit any random end point for this eg. localhost:7777/aasgdgfd
app.get('/*/', (req, res)=>{
  res.status(200).send({message: "Oops! This page is not available!"});
});

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb)=> {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send({
    message:'File uploaded successfully', 
    url:`http://localhost:7777/uploads/${req.file.filename}`
  });
});

// port listing
app.listen(port, ()=>{
  console.log("Server is running");
});


