const express = require('express');
// const http = require('http');
// const url = require('url');
const fs = require('fs').promises;

// Function to count students and return formatted data
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);
    const numberOfStudents = students.length;
    let result = `Number of students: ${numberOfStudents}\n`;

    const fields = {};
    students.forEach((student) => {
      const [firstname,,, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    for (const [field, studentsList] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
    const dbFilePath = process.argv[2];

    try {
        const studentData = await countStudents(dbFilePath);
        res.end(`This is the list of our students\n${studentData}`);
      } catch (error) {
        res.end('Cannot load the database');
      }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
