const path = require('path');
// Create path to HTML 
module.exports = function(app) {
  //Created GET request funtion to get notes

  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public\index.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public\index.html'));
  });

  // If no matching route for note is found default to index
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public\index.html'));
  });
};