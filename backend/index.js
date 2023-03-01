const express = require("express");
const cors = require("cors");
app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let foods = [
    { id: 1, name: "egg", calories: 70, quantity: 1, unit: "" },
    { id: 2, name: "gouda cheese", calories: 120, quantity: 1, unit: "slice" },
    { id: 3, name: "bread", calories: 100, quantity: 1, unit: "slice" },
    { id: 4, name: "apple", calories: 104, quantity: 1, unit: "" },
    { id: 5, name: "banana", calories: 105, quantity: 1, unit: "" },
    { id: 6, name: "Donut, plain", calories: 253, quantity: 1, unit: "" },
];

app.get("/api/foods", (request, response) => {
    response.json(foods);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
