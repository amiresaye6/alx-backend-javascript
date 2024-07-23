const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

// Get the database file path from command line arguments
const dbFilePath = process.argv[2];

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
