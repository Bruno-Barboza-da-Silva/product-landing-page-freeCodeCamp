import express from 'express'
import cors from 'cors'

const app = express();


// app.get("/api", (request, response) => {
//   response.json({ message: "Hello from server!" });
// });


app.get('/api', (req, res) => {
  res.json({'título':'Uma notícia muito legal!'})
})


app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});