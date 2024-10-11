import React, { useState } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import {
    MdOutlineDoubleArrow,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const options = [
  { value: "one", label: "Option One" },
  { value: "two", label: "Option Two" },
];
export const PreguntaChecks = () => {
  const [selected, setSelected] = useState([]);

  return (
    <DualListBox
      icons={{
        moveToAvailable: <MdOutlineKeyboardArrowLeft />,
        moveAllToAvailable: [
          <MdOutlineKeyboardDoubleArrowLeft key={1} />,
        ],
        moveToSelected: <MdOutlineKeyboardArrowRight />,
        moveAllToSelected: [
            <MdOutlineKeyboardDoubleArrowRight key={1} />,
        ],
        moveDown: <MdOutlineKeyboardArrowDown />,
        moveUp: <MdOutlineKeyboardArrowUp />,
        moveTop: <MdOutlineKeyboardDoubleArrowUp />,
        moveBottom: <MdOutlineKeyboardDoubleArrowDown />,
      }}
      preserveSelectOrder={true}
      showOrderButtons={true}
      options={options}
      selected={selected}
      onChange={(newValue) => setSelected(newValue)}
    />
  );
};
