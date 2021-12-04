import React, { useState } from "react";
import Container from "./Container";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { bgColors, colors } from "../Utils/Colors";

function newNote() {
  let date = Date.now();
  return {
    id: date + "" + Math.floor(Math.random() * 80),
    created: date,
    bg: bgColors.Default,
    fg: colors.Black,
  };
}

export default function Main() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );
  return (
    <div>
      <Container notes={notes} setNotes={setNotes} />
      <Fab
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", right: "26px", bottom: "26px" }}
        onClick={() => {
          let n = [...notes, newNote()];
          setNotes(n);
          localStorage.setItem("notes", JSON.stringify(n));
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
