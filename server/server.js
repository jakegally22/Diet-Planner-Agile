require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//---------------------------------Send to table 2

app
  .route("/api/v1/restaurants")
  .get(async (req, res, next) => {
    try {
      // const results = await db.query("SELECT * FROM restaurants");
      const results = await db.query(
        "select * from restaurants1"
        // "select * from restaurants LEFT JOIN (SELECT restaurant_id, count(*), trunc(AVG(rating)) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id"
      );
      res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: results.rows,
      });
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res, next) => {
    // const { name, calories, price_range } = req.body;
    //const { name, price_range } = req.body;

    const { name, calories} = req.body;

    try {
      const results = await db.query(
        // "INSERT INTO restaurants(name, calories, price_range) VALUES($1, $2, $3) returning *",
        // [name, calories, price_range]
        // "INSERT INTO restaurants(name, price_range) VALUES($1, $2) returning *",
        // [name, price_range]

        //ORIGINAL KEEP
        //"INSERT INTO restaurants(name) VALUES($1) returning *",
        //[name]

        "INSERT INTO restaurants1(name, calories) VALUES($1,$2) returning *",
        [name,calories]
      );
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  });

app
  .route("/api/v1/restaurants/:id")
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;

      const results = await db.query(
        "select * from restaurants1",
        // "select * from restaurants LEFT JOIN (SELECT restaurant_id, count(*), trunc(AVG(rating)) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1",
        [id]
      );
      // const reviews = await db.query(
      //   "SELECT * FROM reviews WHERE restaurant_id = $1",
      //   [id]
      // );
      res.status(200).json({
        status: "success",
        data: {
          restaurant: results.rows[0],
          //reviews: reviews.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    // const { name, calories, price_range } = req.body;
    //const { name, price_range } = req.body;
    const { name, calories } = req.body;

    try {
      const results = await db.query(
        // "UPDATE restaurants SET name = $1, calories = $2, price_range = $3 WHERE id = $4 returning *",
        // [name, calories, price_range, id]
        // "UPDATE restaurants SET name = $1, price_range = $2 WHERE id = $3 returning *",
        // [name, price_range, id]
        //"UPDATE restaurants SET name = $1, WHERE id = $2 returning *",
        "UPDATE restaurants1 SET name = $1,calories = $2, WHERE id = $3 returning *",
        [name, calories,id]
      );
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      const results = await db.query(
        "DELETE FROM restaurants1 WHERE id = $1 returning id",
        [id]
      );
      res.status(201).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  });


app.post(`/api/v1/restaurants/:id/addReview`, async (req, res) => {
  const { name, rating, review } = req.body;
  const { id } = req.params;
  try {
    const results = await db.query(
      "INSERT INTO reviews(restaurant_id, name, review, rating) VALUES($1, $2, $3) returning *",
      [id, name, review, rating]
    );
    res.status(200).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});


//---------------------------------Send Data to Table 2



app
  .route("/api/v1/restaurants2")
  .get(async (req, res, next) => {
    try {
      // const results = await db.query("SELECT * FROM restaurants");
      const results = await db.query(
        "select * from restaurants2"
        // "select * from restaurants LEFT JOIN (SELECT restaurant_id, count(*), trunc(AVG(rating)) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id"
      );
      res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: results.rows,
      });
    } catch (error) {
      console.log(error);
    }
  });
  // .post(async (req, res, next) => {
  //   // const { name, calories, price_range } = req.body;
  //   //const { name, price_range } = req.body;

  //   const { name, calories} = req.body;

  //   try {
  //     const results = await db.query(
  //       "INSERT INTO restaurants2(name, calories) VALUES($1,$2) returning *",
  //       [name,calories]
  //     );
  //     res.status(200).json({
  //       status: "success",
  //       data: results.rows[0],
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });


  app.post(`/api/v1/restaurants2/addtable2`, async (req, res,next) => {
    const { name2, calories2} = req.body;
    try {
      const results = await db.query(
        "INSERT INTO restaurants2(name, calories) VALUES($1,$2) returning *",
        [name2,calories2]
      );
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  
  });


  // app.post(`/api/v1/restaurants/:id/addReview`, async (req, res) => {
  //   const { name, rating, review } = req.body;
  //   const { id } = req.params;
  //   try {
  //     const results = await db.query(
  //       "INSERT INTO reviews(restaurant_id, name, review, rating) VALUES($1, $2, $3) returning *",
  //       [id, name, review, rating]
  //     );
  //     res.status(200).json({
  //       status: "success",
  //       data: results.rows[0],
  //     });
  //   } catch (error) {
  //     res.send(error);
  //     console.log(error);
  //   }
  // });



app
  .route("/api/v1/restaurants2/:id")
  .get(async (req, res, next) => {
    try {
      const { id } = req.params;

      const results = await db.query(
        "select * from restaurants2",
        // "select * from restaurants LEFT JOIN (SELECT restaurant_id, count(*), trunc(AVG(rating)) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1",
        [id]
      );
      res.status(200).json({
        status: "success",
        data: {
          restaurant: results.rows[0],
          //reviews: reviews.rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    // const { name, calories, price_range } = req.body;
    //const { name, price_range } = req.body;
    const { name, calories } = req.body;

    try {
      const results = await db.query(
        "UPDATE restaurants2 SET name = $1,calories = $2, WHERE id = $3 returning *",
        [name, calories,id]
      );
      res.status(200).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { id } = req.params;
      const results = await db.query(
        "DELETE FROM restaurants2 WHERE id = $1 returning id",
        [id]
      );
      res.status(201).json({
        status: "success",
        data: results.rows[0],
      });
    } catch (error) {
      console.log(error);
    }
  });

app.listen(PORT, () => console.log("Magic happening on PORT", +PORT));
