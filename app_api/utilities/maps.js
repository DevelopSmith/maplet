const fs	  = require('fs');
const Canvas  = require('canvas');

const Image   = Canvas.Image;
const o_img   = fs.readFileSync('./public/maps/world-map.jpg');
const img     = new Image();
img.src = o_img;

module.exports.getTile = (z,x,y,fn) => {
	const canvas	= Canvas.createCanvas(256,256);
	const ctx		= canvas.getContext('2d');
	const zoom		= img.width/Math.pow(2,Number(z));

	// check if the requested tile exists
	if((x*zoom) > img.width || (y*zoom) > img.height){
		fn('Tile does not exists');
	}else{
		/*
		This is the explanation why cropping works:
		ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
		img = the image element
		sx = source x
		sy = source y
		sw = source width
		sh = source height
		dx = destination x
		dy = destination y
		dw = destination width
		dh = destination height
		*/

		// now, lets draw the tile
		ctx.drawImage(img,(x*zoom),(y*zoom),zoom,zoom,0,0,256,256);
		// and transform it into a binary buffer, so we can
		// deliver it to the client
		canvas.toBuffer(function(err, buf){
			if (err) throw err;
			fn(buf);
		});	
	}
}
