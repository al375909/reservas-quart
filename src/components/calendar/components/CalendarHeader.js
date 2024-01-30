import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import Button from "@mui/material/Button";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    console.log(monthIndex, "setted", monthIndex - 1);
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }
  return (
    // <header className="px-4 py-2 flex items-center">
    <header className="flex-5">
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <Button onClick={handlePrevMonth} variant="contained">
        <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">Prev</span>
      </Button>

      <Button onClick={handleNextMonth} variant="contained">
        <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">next</span>
      </Button>

      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
