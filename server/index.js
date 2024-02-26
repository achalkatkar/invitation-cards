import express from "express";

const app = express();
app.get("/students", (req, res) => {
  const students = ["Saurabh", "Yogita", "Bandini", "Harshada", "Darshan"];
  res.json(students);
});

app.post("/student", (req, res) => {
  const name = req.body.name;
  const roll = req.body.roll;

  res.json({
    status: "success",
    message: `Student ${name} created with roll number ${roll}`,
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});