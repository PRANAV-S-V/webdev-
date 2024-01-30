import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client(
  {
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "369133",
    port: 5432,
  }
)
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code from visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  res.render("index.ejs", {
    countries: countries,
    total: countries.length
  });
  
});

app.post("/add", async (req, res)=>{
  let countryName = req.body.country;
  const countryDetails = await db.query(
    "select country_code from countries where country_name = $1",
     [countryName]);
     if(countryDetails.rows.length !== 0) {
        let country_code = countryDetails.rows[0].country_code;
        await db.query("insert into visited_countries(country_code) values($1);", [country_code]);
        res.redirect("/");
      }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
