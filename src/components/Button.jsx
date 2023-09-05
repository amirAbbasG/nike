const Button = ({
  label,
  iconUrl,
  className = "text-white border-coral-red bg-coral-red",
  fulWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 gap-2 rounded-full font-montserrat text-lg leading-none border ${
        fulWidth ? "w-full" : ""
      } ${className}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
