export default function Input({ name, type }) {
  const formatName = (str) => {
    return str
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };
  return (
    <input
      type={type ? type : "text"}
      id={name}
      name={name}
      placeholder={formatName(name)}
      className="border-[1px] border-[#c2c2c2] mb-4 p-2 rounded-sm cursor-pointer focus:border-[#6663e6] focus:outline-none focus:ring-2 focus:ring-[#6663e6]"
    />
  );
}
