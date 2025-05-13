const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/twiml", (req, res) => {
    const { lat, long } = req.query;
  
    const message = `Emergency alert from FYP project. The device is at latitude ${lat} and longitude ${long}. Please check your email for more details.`;
  
    const twiml = `
        <Response>
          <Say voice="alice">${message}</Say>
        </Response>
      `;
  
    res.set("Content-Type", "text/xml");
    res.send(twiml);
  });

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));