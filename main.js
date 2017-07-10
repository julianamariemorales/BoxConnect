// Initialize SDK
var BoxSDK = require('box-node-sdk');
var fs = require('fs');
//var buf = new Buffer(2147483648);

var CLIENT_ID = 'ew766zlcqitx5bgvoa671jzdo0ajgz14',
	CLIENT_SECRET = '1Z8aDyj74STxUBZSWPj3tNEI29AXDaID',
	PUBLIC_KEY_ID = '2034207554',
	PRIVATE_KEY_PATH = './path/to/your_private_key.pem',
	PRIVATE_KEY_PASSPHRASE = 'YOUR PRIVATE KEY PASSPHRASE',
	ENTERPRISE_ID = '23087170';

var sdk = new BoxSDK({
	//clientID: 'ew766zlcqitx5bgvoa671jzdo0ajgz14',
  	//clientSecret: '1Z8aDyj74STxUBZSWPj3tNEI29AXDaID'
  clientID: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET'
});

// Create a basic API client
//var client = sdk.getBasicClient('USER_ACCESS_TOKEN');
var client = sdk.getBasicClient('iTJOtBVjwOqqvFNgL1CoFi34AtVrNqMu');


// Get some of that sweet, sweet data!
client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser) {
  if(err) throw err;
  console.log('Hello, ' + currentUser.name + '!');
});

// The SDK also supports Promises
client.users.get(client.CURRENT_USER_ID)
	.then(user => console.log('Hello', user.name, '!'))
	.catch(err => console.log('Got an error!', err));


//upload the zip file
var zipData = fs.createReadStream('projectsbackupfromwinauto.zip');
client.files.uploadFile('31797103379', 'projectsbackupfromwinauto.zip', zipData, function(err, file) {
	if(err) throw err;
	console.log('New file ', file.name,' uploaded!');
});


/*
var pdfData = fs.createReadStream('Blue Prism Developer Resources.pdf');
client.files.uploadFile('31797103379', 'Blue Prism Developer Resources.pdf', pdfData, function(err, file) {
	if(err) throw err;
	console.log('New file ', file.name,' uploaded!');
});

var fileData = fs.createReadStream('twitter.jpg');
client.files.uploadFile('31797103379', 'twitter.jpg', fileData, function(err, file) {
	if(err) throw err;
	console.log('New file ', fileData.name,' uploaded!');
});


client.folders.create('31797103379', 'fortest2', function(err, newFolder){
	if(err) throw err;
  	console.log('New folder ', newFolder.name,' created!');
});
*/

/*
//upload
// Upload a file into folder 
var stream = fs.createReadStream('Blue Prism Developer Resources.pdf');

client.files.getChunkedUploader(
	'31797103379',
	null ,
	'Blue Prism Developer Resources.pdf',
	stream,
	null,
	function(err, uploader) {
		if (err) {
			// handle error
			console.log('cannot upload this wtf', stream.name);
			return;
		}

		uploader.on('error', function(err) {
			// handle unrecoverable upload error
		});

		uploader.on('uploadComplete', function(file) {
			console.log('File upload complete!', stream.name);
		});

		uploader.start();
	}
);
*/
