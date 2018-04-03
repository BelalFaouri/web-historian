var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  res.end(`<!DOCTYPE>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  Enter a URL here:
  <form method="POST">
    <input type="input" name="url"></input>
  </form>
</body>
</html>
`);
  
};
