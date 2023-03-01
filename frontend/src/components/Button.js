const Button = ({ text, onClick, type }) => (
    <button type={type}
        onClick={() => {
            onClick();
        }}
        className="h-[45px] bg-blue-400 text-base text-white font-medium rounded px-2 py-2 m-1 hover:bg-blue-600"
    >
        {" "}
        {text}{" "}
    </button>
);

export default Button;
