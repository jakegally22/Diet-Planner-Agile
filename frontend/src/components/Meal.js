import { useState } from "react";
import Button from "./Button";

const SelectedEntryDisplay = ({ selectedFood, CustomDisplayComponent }) => {
    if (!CustomDisplayComponent) {
        console.log("SelectedEntryDisplay: CustomDisplayComponent not defined");
        return;
    }

    if (selectedFood) {
        return (
            <div className="max-w-[300px] bg-blue-100">
                {CustomDisplayComponent(selectedFood)}
            </div>
        );
    }

    return <div className="max-w-[300px] bg-blue-100"></div>;
};

const FoodResult = ({ food, selectFood }) => {
    const { name, calories, quantity, unit } = food;
    return (
        <div
            onClick={() => {
                selectFood(food);
            }}
            className="px-2 border-b border-gray-400 hover:bg-gray-100 hover:ml-1 hover:cursor-pointer"
        >
            <p className="py-1">{name}</p>
            <p className="text-[13px] text-zinc-500">
                Calories: {calories}, Qty: {String(quantity)} {unit}
            </p>
        </div>
    );
};

const FoodResultsDisplay = ({ foods, selectFood }) => (
    <div className="min-h-[250px] border border-black overflow-y-scroll">
        {foods.map((food) => (
            <FoodResult food={food} key={food.id} selectFood={selectFood} />
        ))}
    </div>
);

const FoodSearcher = ({
    addFoodEntry,
    toggleIsAddingFood,
    foods,
    CustomDisplayComponent,
}) => {
    const [newText, setNewText] = useState("");
    const [selectedFood, setSelectedFood] = useState(null);
    const filteredFoods =
        newText === ""
            ? []
            : foods.filter(
                  (food) =>
                      food.name.toLowerCase().search(newText.toLowerCase()) > -1
              );

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("added", selectedFood.name);
        addFoodEntry(selectedFood);
    };

    const nameOnChange = (event) => {
        setNewText(event.target.value);
    };

    const selectFood = (food) => {
        setSelectedFood(food);
        console.log("You have selected", food);
    };

    return (
        <form onSubmit={onSubmit} className="py-5">
            <div className="flex flex-wrap justify-center">
                <div className="max-w-[300px]">
                    <input
                        placeholder={"search"}
                        value={newText}
                        onChange={nameOnChange}
                        className="my-5 px-1 border border-gray-300"
                    />
                    <FoodResultsDisplay
                        foods={filteredFoods}
                        selectFood={selectFood}
                    />
                </div>
                <SelectedEntryDisplay
                    selectedFood={selectedFood}
                    CustomDisplayComponent={CustomDisplayComponent}
                />
            </div>
            <div className="flex justify-center mt-5">
                <Button onClick={() => {}} type="submit" text={"add"} />
                <Button onClick={toggleIsAddingFood} text={"cancel"} />
            </div>
        </form>
    );
};

const MealDiaryEntries = ({
    mealName,
    toggleIsAddingFood,
    filteredFoods,
    addBtnText,
}) => (
    <>
        <div>
            <p className="text-blue-700 text-xl">{mealName}</p>
            {filteredFoods.map((food) => (
                <p className=" text-base" key={food.id}>
                    {food.name}
                </p>
            ))}
        </div>
        <div>
            <Button
                onClick={() => {
                    console.log("press");
                    toggleIsAddingFood();
                }}
                text={addBtnText}
            />
        </div>{" "}
    </>
);

const Meal = ({
    foodEntries,
    setFoodEntries,
    mealName,
    foods,
    addBtnText,
    CustomDisplayComponent,
    setDiaryEntries,
    diaryEntries,
    inputFormattedDate,
}) => {
    const [isAddingFood, setIsAddingFood] = useState(false);
    const filteredFoods = foodEntries.filter(
        (foodEntry) => foodEntry.mealName === mealName.toLowerCase()
    );

    const toggleIsAddingFood = () => setIsAddingFood(!isAddingFood);

    const addFoodEntry = (food) => {
        const newFoodEntry = { ...food, mealName: mealName.toLowerCase() };
        const newFoodEntries = foodEntries.concat(newFoodEntry);
        setFoodEntries(newFoodEntries);
        let newDiaryEntry = { ...diaryEntries };
        newDiaryEntry[inputFormattedDate] = newFoodEntries;
        console.log("newDiaryEntry = ", newDiaryEntry);
        setDiaryEntries(newDiaryEntry);
        toggleIsAddingFood();
    };

    return !isAddingFood ? (
        <div className="px-6 py-6 shadow-lg rounded-xl">
            <MealDiaryEntries
                isAddingFood={isAddingFood}
                mealName={mealName}
                toggleIsAddingFood={toggleIsAddingFood}
                filteredFoods={filteredFoods}
                addBtnText={addBtnText}
                selected
            />
        </div>
    ) : (
        <div className="px-6 py-6 shadow-lg rounded-xl  ">
            <FoodSearcher
                addFoodEntry={addFoodEntry}
                foodEntries={foodEntries}
                toggleIsAddingFood={toggleIsAddingFood}
                foods={foods}
                CustomDisplayComponent={CustomDisplayComponent}
            />
        </div>
    );
};

export default Meal;
