import { useState } from "react";
import Header from "./Header";
import Meal from "./Meal";

let globfoods = [
    { id: 1, name: "Push ups", calories: 70, quantity: 1, unit: "" },
    { id: 2, name: "Pull ups", calories: 120, quantity: 1, unit: "slice" },
    { id: 3, name: "Sit ups", calories: 100, quantity: 1, unit: "slice" },
    { id: 4, name: "Crunches", calories: 104, quantity: 1, unit: "" },
    { id: 5, name: "Curls", calories: 105, quantity: 1, unit: "" },
    { id: 6, name: "Squats", calories: 253, quantity: 1, unit: "" },
];

const CustomEntryDisplay = (selected) => (
    <>
        <p className="pt-4 text-center font-bold text-xl">
            <span>{selected.name}</span>
        </p>
        <div className="px-6 py-6 mt-14 text-center">
            <p>
                {" "}
                Number of set:
                <input
                    value="1.0"
                    className="border border-gray-500 w-[30px] mx-2"
                    type="text"
                    size="3"
                    onChange={() => {}}
                />
            </p>
            <p>
                {" "}
                Number of reps per set:
                <input
                    value="1.0"
                    className="border border-gray-500 w-[30px] mx-2"
                    type="text"
                    size="3"
                    onChange={() => {}}
                />
            </p>
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

const Exercise = () => {
    const [foods, setFoods] = useState(globfoods);
    const [date, setDate] = useState(new Date());
    const dateFormatted = formatDate(date);
    const [foodEntries, setFoodEntries] = useState([]);
    const [diaryEntries, setDiaryEntries] = useState({});

    const changeDate = (event) => {
        const newDate = event.target.value;
        console.log("the new date  is", newDate);

        if (!diaryEntries[newDate]) {
            setFoodEntries([]);
        } else {
            setFoodEntries(diaryEntries[newDate]);
        }

        setDate(new Date(newDate));
    };

    return (
        <>
            <Header text={"Exercise"} />
                <div className="px-6 px-y text-xl">
                    Your exercise diary for {dateFormatted}{" "}
                    <input
                        type="date"
                        value={formatDateForInput(date)}
                        onChange={changeDate}
                        autoComplete="off"
                    />
                </div>
                <div className=" py-4">
                    <Meal
                        inputFormattedDate={formatDateForInput(date)}
                        diaryEntries={diaryEntries}
                        setDiaryEntries={setDiaryEntries}
                        foodEntries={foodEntries}
                        setFoodEntries={setFoodEntries}
                        mealName={"Strength Training"}
                        foods={foods}
                        addBtnText={"add exercise"}
                        CustomDisplayComponent={CustomEntryDisplay}
                    />
                    <Meal
                        inputFormattedDate={formatDateForInput(date)}
                        diaryEntries={diaryEntries}
                        setDiaryEntries={setDiaryEntries}
                        foodEntries={foodEntries}
                        setFoodEntries={setFoodEntries}
                        mealName={"Cardiovascular"}
                        foods={foods}
                        addBtnText={"add exercise"}
                        CustomDisplayComponent={CustomEntryDisplay}
                    />
                    <div className="items-center flex justify-center"></div>
                </div>
        </>
    );
};

export default Exercise;
