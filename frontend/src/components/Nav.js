import { Link } from "react-router-dom";

const NavButton = ({ text, href }) => (
    <Link
        to={href}
        className="w-[80px] text-white font-medium px-2 py-2 m-1 hover:underline hover:cursor-pointer text-center"
    >
        <span>{text}</span>{" "}
    </Link>
);

const Nav = () => {
    return (
        <nav className="bg-red-500 ">
            <div className="max-w-[900px] m-auto flex justify justify-evenly h-12 align-middle">
                <NavButton text={"Home"} href="/" />
                <NavButton text={"Recipes"} href="/recipes" />
                <NavButton text={"Food"} href="/food" />
                <NavButton text={"Exercise"} href="exercise" />
            </div>
        </nav>
    );
};

export default Nav;
