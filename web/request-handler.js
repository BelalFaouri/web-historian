var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs')
// require more modules/folders here!

exports.handleRequest = function (req, res) {
	if(req.method === 'GET'){
		if (req.url === '/'){
			fs.readFile(path.join(__dirname, '/public/index.html'), 'utf8', (err, data) => {
				if (err) {throw err}
					res.writeHeader(200, '{contentType : text/html}')
					res.end(data)
			})
		}
	}
};
