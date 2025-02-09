import express from 'express';
import 'dotenv/config'

const app = express(); 


app.get("/", (req, res) => {
  res.send("hello from backend");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});