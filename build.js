var handle = require('preprocess');

var src = 'index.html';
var dest = 'dist/index.html';

handle.preprocessFile(src, dest, {
  PANELS: [
    'wifi-manageNetworks',
    'wifi-manageCertificates',
    'wifi-selectCertificateFile',
    'wifi'
  ].toString(),
  DIALOGS: [
    'wifi-status',
    'wifi-auth',
    'wifi-joinHidden',
    'wifi-wps',
    'wifi-enterCertificateNickname'
  ].toString()
},
  function() {console.log('done')},
{
  srcDir: './',
  srcEol: '\r\n'
});
