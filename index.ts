import express from "express";
const app = express();
const port = 13306;

app.get('/', (req, res) => {
  res.send('dfaaRello World! v1.4');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});