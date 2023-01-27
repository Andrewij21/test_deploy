import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
app.use(cors({ origin: true }));

async function flickr() {
  const response = await fetch(
    "https://www.flickr.com/services/feeds/photos_public.gne?format=json"
  );
  // console.log({ res: await response });
  const data = await response.text();
  return JSON.parse(data.slice(15, -1));
}

app.get("/", async (req, res) => {
  const data = await flickr();
  // console.log({ data });
  res.send(data);
});
//testing

app.post("/", (req, res) => {
  res.send("METHOD POST");
});
