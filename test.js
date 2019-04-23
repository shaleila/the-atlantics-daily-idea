const getmp3 = require('./getmp3.js');

(async function(){
	const mp3 = await getmp3();
	console.log(mp3);
})();