

export default function Input({ name, type, errors, ...props }) {
  const formatName = (str) => {
    return str
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  return (
    <>
      <div className="flex flex-col mb-2">
        <input
          type={type ? type : "text"}
          id={name}
          name={name}
          placeholder={formatName(name)}
          className={`w-full border-[1px] ${
            errors ? "border-2 border-red-700" : "border-[#c2c2c2]"
          } p-2 rounded-sm cursor-pointer focus:border-[#6663e6] focus:outline-none focus:ring-2 focus:ring-[#6663e6]`}
          {...props}
        />
        <span className="mb-2 text-red-600">{errors}</span>
      </div>
    </>
  );
}
