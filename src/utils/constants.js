const nutritionModel = [
    {
        "name": "Calories",
        "amount": 0,
        "unit": "cal",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Fat",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Saturated Fat",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
    {
        "name": "Carbohydrates",
        "amount": 0,
        "unit": "g",
        "percentOfDailyNeeds": 0
    },
]


const statsModel = {
  totalCal : 0,
  totalFat : 0,
  totalProtein : 0,
  totalCarb : 0,
  totalBurnt : 0,
  meals: {
    breakfast: {
      totalCal : 0,
      totalFat : 0,
      totalProtein : 0,
      totalCarb : 0,
      foods: [],
      nutrients: nutritionModel,
    },
    lunch: {
      totalCal : 0,
      totalFat : 0,
      totalProtein : 0,
      totalCarb : 0,
      foods: [],
      nutrients: nutritionModel,
    },
    dinner: {
      totalCal : 0,
      totalFat : 0,
      totalProtein : 0,
      totalCarb : 0,
      foods: [],
      nutrients: nutritionModel,
    },
    snacks: {
      totalCal : 0,
      totalFat : 0,
      totalProtein : 0,
      totalCarb : 0,
      foods: [],
      nutrients: nutritionModel,
    },
  },
  nutrients: nutritionModel,
};


const foodModel = {
  "id": 1111,
  "name": "name",
  "nameClean": "name clean",
  "amount": 1,
  "unit": "g",
  "image": "imgFile",
  "meta": [],
  "nutrition": {
      "nutrients": nutritionModel,
      "caloricBreakdown": {
          "percentProtein": 30,
          "percentFat": 20,
          "percentCarbs": 50
      },
      "weightPerServing": {
          "amount": 0,
          "unit": "g"
      }
  }
}

const defaultSettings = {
    goalCal: 1800,
    goalFat: 50,
    goalProtein: 80,
    goalCarb: 200,
}

const SPOONACULAR_API_KEY="fe8fb94beaa8418e91b22e1aa962388c"
export {statsModel, foodModel, defaultSettings, nutritionModel, SPOONACULAR_API_KEY};
