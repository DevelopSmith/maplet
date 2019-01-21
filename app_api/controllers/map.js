var maps = require('../utilities/maps.js');

module.exports.getTile = (req, res) => {
	const { x, y, z } = req.params;

	maps.getTile(z, x, y, buf => {
		if(Buffer.isBuffer(buf)){
			// tile
			res.writeHead(200, {'content-type': 'image/png'});
			res.end(buf);
		}else{
			// tile doesn't exists
			res.writeHead(500, {'content-type': 'text/plain'});
			res.end(buf);
		}
	});
}
