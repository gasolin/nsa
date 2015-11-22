var handle = require('preprocess');

var src = 'index.html';
var dest = 'dist/index.html';

handle.preprocessFile(src, dest, {}, function() {console.log('done')},
{
  srcDir: './',
  srcEol: '\r\n'
});
// {:process.process.env}, function() {console.log('done')}, {type: 'js'}
