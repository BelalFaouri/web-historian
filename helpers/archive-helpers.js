var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var pathes = require('fs-path')

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {

fs.readFile(exports.paths.list, 'utf8', function (err, content) {
  console.log('Example from callbackReview.js')
  if (err) {
    console.log('fs.readFile failed :(\n', err)
  } else {
  	content=content.split('\n')
  	callback(content)
    // console.log('fs.readFile successfully completed :)\n', content)
  }
});
};

exports.isUrlInList = function(url, callback) {

fs.readFile(exports.paths.list, 'utf8', function (err, content) {
  console.log('Example from callbackReview.js')
  if (err) {
    console.log('fs.readFile failed :(\n', err)
  } else {
  	content=content.split('\n')
 // callback(content[i])
 var result=false;
 for (var i = 0; i < content.length; i++){
 	if(content[i] === url){
 		result=true
 	}
 }
 	callback(result, content)


}
});

};

exports.addUrlToList = function(url, callback) {
	fs.writeFile(exports.paths.list, url, function (err){
		if (err){
			console.log(err)
		}
		callback()
	})
};

exports.isUrlArchived = function(url, callback) {
	var result = false;
	pathes.find(exports.paths.archivedSites, function(err, list){
		var files = list.files
		for (var i = 0; i < files.length; i++){
			if (url === files[i].slice(files[i].lastIndexOf('/') + 1, files[i].length)){
				result = true
			}	
		}
		callback(result, files)
	})

};

exports.downloadUrls = function(urls) {
};
