const request = require("request-promise-native");
const util = require('util');

const parseString = require('xml2js').parseString;
const parseStringPromise = util.promisify(parseString);

module.exports = async function() {
	const body = await request("https://feeds.megaphone.fm/alexaskillproducttest");
	const result = await parseStringPromise(body);
	return result.rss.channel[0].item[0].enclosure[0].$.url;
}