import React from "react";
import Grid from "@mui/material/Grid";
import Notes from "./Notes";

export default function Container({ notes, setNotes }) {
  //   function strfDate(date) {
  //     let currentDate = new Date();
  //     let createdDate = new Date(date);
  //     let string = [];
  //     if (currentDate.getFullYear() === createdDate.getFullYear())
  //       if (currentDate.getMonth() === createdDate.getMonth())
  //         if (currentDate.getDay() === createdDate.getDay()) {
  //           //   Created Today
  //           string.push("Today");
  //           //   Created this hour
  //           if (currentDate.getHours() === createdDate.getHours())
  //             if (currentDate.getMinutes() === createdDate.getMinutes()) {
  //               //   Created this minute
  //               string.push(
  //                 `${currentDate.getSeconds() - createdDate.getSeconds}`
  //               );
  //             }
  //         }
  //   }

  return notes?.length ? (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={4} columns={{ xs: 2, sm: 8, md: 16 }}>
        {notes.map((el, i) => (
          <Grid item key={el} xs={2} sm={4} md={4}>
            <Notes noteInfo={el} notes={notes} setNotes={setNotes} />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <div
      style={{
        width: window.innerWidth * 0.99,
        height: window.innerHeight * 0.99,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "2rem",
        color: "#ddd",
        textAlign: "center",
      }}
    >
      No Notes.
    </div>
  );
}
