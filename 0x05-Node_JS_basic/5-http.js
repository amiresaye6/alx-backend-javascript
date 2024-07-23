const http = require('http');
const url = require('url');
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

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
    } else if (path === '/students') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      const dbFilePath = process.argv[2];

      if (!dbFilePath) {
        res.end('Database file path not provided.');
        return;
      }

      try {
        const studentData = await countStudents(dbFilePath);
        res.end(`This is the list of our students\n${studentData}`);
      } catch (error) {
        res.end('Cannot load the database');
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
