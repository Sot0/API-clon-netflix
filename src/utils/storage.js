const cloudinary = require('cloudinary');

const storage = ({stream}) => {
	cloudinary.config({ 
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
		api_key: process.env.CLOUDINARY_API_KEY, 
		api_secret: process.env.CLOUDINARY_API_SECRET
	});
	return new Promise((resolve, reject) => {
		const buffer = cloudinary.v2.uploader.upload_stream({ resource_type: 'auto', folder: 'clon-netflix' },(err, result) => {
			if(err) reject(err);
			resolve(result);
		});
		stream.pipe(buffer);
	});
};

module.exports = storage;