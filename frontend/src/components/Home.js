import Button from "../components/Button";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const DailySummary = () => {
    return (
        <div className="">
            <div className="bg-gray-100 py-4">
                <div className="text-center">
                    {" "}
                    <p className="text-center">Calories Remaining</p>{" "}
                    <p className="text-3xl text-green-500 font-extrabold">
                        1500
                    </p>
                </div>
                <div className="items-center flex justify-center">
                    <Link to={"/food"}>
                        {" "}
                        <Button text={"Add Food"} />{" "}
                    </Link>

                    <Link to={"/exercise"}>
                        <Button text={"Add exercise"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Home = () => (
    <>
        <Header text={"Main Dashboard"} />

        <DailySummary />
    </>
);

export default Home;
