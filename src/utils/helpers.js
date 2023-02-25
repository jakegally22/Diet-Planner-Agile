const formatDate = (date) => {
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0');
  let yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

const findNutrient = (food, name) => {
  const arrAll = food.nutrition.nutrients;
  const myNutrient = arrAll.filter((nut) => nut.name === name);
  if (myNutrient.length>0){
    return myNutrient[0];
  }
  return {
    "name": "Not Found",
    "amount": 0,
    "unit": "cal",
    "percentOfDailyNeeds": 0
  };
}

const updateBasicInfo = (data, meal, type, amount, operator) => {
  let newData = {...data};
  newData.meals[meal][type] = Math.round(operator==="add" ? newData.meals[meal][type] + amount : newData.meals[meal][type] - amount);
  newData[type] = Math.round(operator==="add" ? newData[type] + amount : newData[type] - amount);
  return newData;
}

const addFood = (data, meal, food) => {
  let newData = {...data};
  newData.meals[meal].foods.push(food);
  const basicTypes = [["totalCal","Calories"], ["totalFat","Fat"], ["totalProtein","Protein"], ["totalCarb","Carbohydrates"]];
  basicTypes.forEach(typePair => {
    let nutrient = food.nutrition.nutrients.filter((nutrient) => nutrient.name === typePair[1])[0];
    newData = updateBasicInfo(newData, meal, typePair[0], nutrient.amount, "add");
  });

  return newData;
}

const deleteFood = (data, meal, food, order) => {
  let newData = {...data};
  newData.meals[meal].foods.splice(order, 1);
  const basicTypes = [["totalCal","Calories"], ["totalFat","Fat"], ["totalProtein","Protein"], ["totalCarb","Carbohydrates"]];
  basicTypes.forEach(typePair => {
    let nutrient = food.nutrition.nutrients.filter((nutrient) => nutrient.name === typePair[1])[0];
    newData = updateBasicInfo(newData, meal, typePair[0], nutrient.amount, "subtract");
  });
  return newData;
}



export {formatDate, findNutrient, addFood, deleteFood}
