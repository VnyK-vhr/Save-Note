import React, { useState } from "react";
import { Note } from "../styles/Note.styled";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import { bgColors, colors } from "../Utils/Colors";
import DeleteIcon from "@mui/icons-material/Delete";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Notes({ notes, setNotes, noteInfo }) {
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [del, setDelete] = useState(false);
  const [pen, setPen] = useState(false);

  function deleteNote(delId) {
    let index = notes.findIndex((el) => el.id === delId);
    if (index !== -1) {
      notes = [
        ...notes.slice(0, index),
        ...notes.slice(index + 1, notes.length),
      ];
      setDelete(true);
    }
    setTimeout(() => {
      setNotes(notes);
      localStorage.setItem("notes", JSON.stringify(notes));
      setDelete(false);
    }, 300);
  }
  function updateText(e, id) {
    let index = notes.findIndex((el) => el.id === id);
    if (index !== -1)
      notes = [
        ...notes.slice(0, index),
        { ...notes[index], text: e.target.value },
        ...notes.slice(index + 1, notes.length),
      ];
    setNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  function updateColor(id, color) {
    let index = notes.findIndex((el) => el.id === id);
    if (index !== -1) {
      notes = [
        ...notes.slice(0, index),
        { ...notes[index], bg: color },
        ...notes.slice(index + 1, notes.length),
      ];
    }
    setNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  function updatePen(id, color) {
    let index = notes.findIndex((el) => el.id === id);
    if (index !== -1) {
      notes = [
        ...notes.slice(0, index),
        { ...notes[index], fg: color },
        ...notes.slice(index + 1, notes.length),
      ];
    }
    setNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  function strfDate(date) {
    date = new Date(date);
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    let amPm = hours >= 12 ? "pm" : "am";
    hours = (hours > 12 ? hours - 12 : hours).toString();
    hours = hours ? hours : "12";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "14px",
          width: "100%",
        }}
      >
        <span>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</span>
        <span style={{ marginLeft: "auto" }}>
          {hours.padStart(2, 0)}:{minutes.padStart(2, 0)} {amPm}
        </span>
      </div>
    );
  }
  return (
    <Note
      focus={focus === noteInfo.id}
      bgColor={noteInfo.bg}
      del={del}
      fg={noteInfo.fg}
    >
      <div>
        <IconButton
          sx={{ position: "absolute", right: "100px", top: "3px" }}
          aria-controls="pen-menu"
          aria-haspopup="true"
          aria-expanded={pen ? "true" : undefined}
          onClick={(e) => {
            setPen(!pen);
            setAnchor(e.currentTarget);
          }}
          id="pen-button"
        >
          <div
            style={{
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              backgroundColor: "#fff",
            }}
          >
            <EditIcon sx={{ color: noteInfo.fg, transform: "scale(0.7)" }} />
          </div>
        </IconButton>
        <Menu
          id="pen-menu"
          open={pen}
          MenuListProps={{
            "aria-labelledby": "pen-button",
          }}
          sx={{ positon: "absolute", top: "0px" }}
          anchorEl={anchor}
          onClose={() => setPen(false)}
        >
          {Object.keys(colors).map((el) => (
            <MenuItem
              key={el}
              selected={colors[el] === noteInfo.fg}
              onClick={() => {
                setPen(false);
                updatePen(noteInfo.id, colors[el]);
              }}
            >
              <CircleIcon sx={{ color: colors[el] }} /> &nbsp;{el}
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          sx={{ position: "absolute", right: "55px", top: "3px" }}
          aria-controls="color-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          id="bg-button"
          onClick={(e) => {
            setOpen(!open);
            setAnchor(e.currentTarget);
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              backgroundColor: "#fff",
            }}
          >
            <CircleIcon sx={{ color: noteInfo.bg }} />
          </div>
        </IconButton>
        <Menu
          id="color-menu"
          open={open}
          MenuListProps={{
            "aria-labelledby": "bg-button",
          }}
          sx={{ positon: "absolute", top: "0px" }}
          anchorEl={anchor}
          onClose={() => setOpen(false)}
        >
          {Object.keys(bgColors).map((el) => (
            <MenuItem
              key={el}
              selected={bgColors[el] === noteInfo.bg}
              onClick={() => {
                setOpen(false);
                updateColor(noteInfo.id, bgColors[el]);
              }}
            >
              <CircleIcon sx={{ color: bgColors[el] }} /> &nbsp;{el}
            </MenuItem>
          ))}
        </Menu>
      </div>

      <IconButton
        sx={{ position: "absolute", right: "10px", top: "3px" }}
        onClick={() => deleteNote(noteInfo.id)}
      >
        <DeleteIcon />
      </IconButton>
      <textarea
        autoFocus
        onFocus={(e) => {
          setFocus(noteInfo.id);
        }}
        onBlur={() => setFocus(false)}
        value={noteInfo.text || ""}
        onChange={(e) => updateText(e, noteInfo.id)}
      />
      <div className="created">{strfDate(noteInfo.created)}</div>
    </Note>
  );
}
