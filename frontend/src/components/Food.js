import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";
import Meal from "./Meal";

const CustomEntryDisplay = (selectedFood) => (
    <>
        <p className="pt-4 text-center font-bold text-xl">
            <span>{selectedFood.name}</span>
        </p>
        <div className="px-6 py-6 mt-14 text-center">
            <input
                value="1.0"
                className="border border-gray-500 w-[30px] mx-2"
                type="text"
                size="3"
                onChange={() => {
                    console.log("I'm changing. Happy now?");
                }}
            />
            servings of {selectedFood.quantity} {selectedFood.unit}
        </div>
    </>
);

const formatDate = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
};

const formatDateForInput = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${yyyy}-${mm}-${dd}`;
};

const Meals = () => {
    const [foods, setFoods] = useState(null);
    const [date, setDate] = useState(new Date());
    const dateFormatted = formatDate(date);
    const [foodEntries, setFoodEntries] = useState([]);
    const [diaryEntries, setDiaryEntries] = useState({});

    useEffect(() => {
        axios.get("/api/foods").then((res) => {
            console.log(res);
            setFoods(res.data);
        });
    }, []);

    const changeDate = (event) => {
        const newDate = event.target.value;

        if (!diaryEntries[newDate]) {
            setFoodEntries([]);
        } else {
            setFoodEntries(diaryEntries[newDate]);
        }

        setDate(new Date(newDate));
    };

    return (
        <>
            <div className="px-6 px-y text-xl">
                Your food diary for {dateFormatted}{" "}
                <input
                    type="date"
                    value={formatDateForInput(date)}
                    onChange={changeDate}
                    autoComplete="off"
                />
            </div>
            <div className=" py-4">
                <Meal
                    foodEntries={foodEntries}
                    setFoodEntries={setFoodEntries}
                    mealName={"Breakfast"}
                    foods={foods}
                    addBtnText={"add food"}
                    CustomDisplayComponent={CustomEntryDisplay}
                    setDiaryEntries={setDiaryEntries}
                    inputFormattedDate={formatDateForInput(date)}
                    diaryEntries={diaryEntries}
                />
                <Meal
                    foodEntries={foodEntries}
                    setFoodEntries={setFoodEntries}
                    mealName={"Lunch"}
                    foods={foods}
                    addBtnText={"add food"}
                    CustomDisplayComponent={CustomEntryDisplay}
                    setDiaryEntries={setDiaryEntries}
                    inputFormattedDate={formatDateForInput(date)}
                    diaryEntries={diaryEntries}
                />
                <Meal
                    foodEntries={foodEntries}
                    setFoodEntries={setFoodEntries}
                    mealName={"Dinner"}
                    foods={foods}
                    addBtnText={"add food"}
                    CustomDisplayComponent={CustomEntryDisplay}
                    setDiaryEntries={setDiaryEntries}
                    inputFormattedDate={formatDateForInput(date)}
                    diaryEntries={diaryEntries}
                />
                <Meal
                    foodEntries={foodEntries}
                    setFoodEntries={setFoodEntries}
                    mealName={"Snacks"}
                    foods={foods}
                    addBtnText={"add food"}
                    CustomDisplayComponent={CustomEntryDisplay}
                    setDiaryEntries={setDiaryEntries}
                    inputFormattedDate={formatDateForInput(date)}
                    diaryEntries={diaryEntries}
                />
                <div className="items-center flex justify-center"></div>
            </div>
        </>
    );
};

const Food = () => (
    <>
        <Header text={"Food Diary"} />
        <Meals />
    </>
);

export default Food;
