import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "family",
  password: "369133",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let currentUserColor;
let users = [];

async function getUsers(){
  const result = await db.query("SELECT * from users");
  // console.log(result.rows);
  return result.rows;
}

async function checkVisisted() {
  try{
    const result = await db.query("select countries.country_code, users.color from ledger join users on ledger.user_id = users.id join countries on ledger.country_id = countries.id where ledger.user_id = $1",
    [currentUserId]);
    currentUserColor = result.rows[0].color;
    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });
    return countries;
  }catch(error){
    return [];
  }

}
app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  users = await getUsers();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: currentUserColor,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  console.log(input);
  try{
    const result = await db.query("SELECT id FROM countries WHERE LOWER(country_name) LIKE '%' || $1;",
    [input.toLowerCase()]);
    const user_id = currentUserId;
    const country_id = result.rows[0].id;
    // console.log(country_id);
    try{
      await db.query("INSERT INTO ledger(user_id, country_id) VALUES ($1, $2);",
      [user_id, country_id]);
      res.redirect("/");
    }catch(error){
      console.log(" hey error: "+ error);
    }
  }catch(error){
    console.log(error);
  }
});

app.post("/user", async (req, res) => {
  if(req.body.add == "new"){
    res.render("new.ejs")
  }else{
    currentUserId = req.body.user;
    res.redirect("/");
  }
  
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const name = req.body.name;
  const color = req.body.color;
  
  const result = await db.query("INSERT INTO users(name, color) VALUES($1, $2) RETURNING *;",
    [name, color]
  );

  res.redirect("/");

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
