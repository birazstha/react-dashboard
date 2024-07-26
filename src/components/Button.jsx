export default function Button({ btnType }) {
  let btnTitle = "";
  let btnColor = "";
  let btnIcon = "";

  if (btnType === "create") {
    btnTitle = "Create";
    btnColor = "bg-green-700";
    btnIcon = "fa fa-plus";
  } else if (btnType === "list") {
    btnTitle = "List";
    btnColor = "bg-blue-700";
    btnIcon = "fa fa-list";
  }

  return (
    <>
      <button className={`${btnColor} rounded-[5px] text-white px-2 h-[32px] min-w-[70px]`}>
        <i className={`${btnIcon} mr-1`}></i>
        {btnTitle}
      </button>
    </>
  );
}
