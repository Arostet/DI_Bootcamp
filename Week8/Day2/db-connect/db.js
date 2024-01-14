const knex = require("knex");
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "benbichri",
    database: "web-server",
  },
});

// SELECT
// db.select("id", "name", "email", "password")
// db.select("*")

//   .from("users")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// =====-------======
// db("users")
//   .select("id", "name", "email", "password")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// //=======--------======
// db.raw("select * FROM USERS").then((data) => {
//   console.log(data.rows);
// });

//INSERT

// db("users")
//   .insert([
//     {
//       name: "Boitt",
//       email: "Boitt@gmail.com",
//       password: "afdsfdffdsasad",
//     },
//     {
//       name: "Harry",
//       email: "Harry@gmail.com",
//       password: "afdsfdffdsasad",
//     },
//     {
//       name: "Mikkeyyy",
//       email: "Mikkkeyy@gmail.com",
//       password: "afdsfdffdsasad",
//     },
//   ])
//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //UPDATE
// db("users")
//   .update({ name: "Dan" })
//   .where({ id: 9 })
//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//DELETE
db("users")
  .where({ id: 8 })
  .del()
  .returning("*")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
