import {v2 as cloudinary} from 'cloudinary';
import exp from 'constants';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
        try {
            if(!localFilePath) return null;
            // upload file on cloudinary
            const repoonse = await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            })

            // file upload successfully 
            // console.log("File is uploaded on cloudinary", repoonse.url);
            fs.unlinkSync(localFilePath);
            return repoonse;

        } catch (error) {
            fs.unlinkSync(localFilePath)   // remove local saved temporary file, if operation is failed
            return null; 
        }
}

export {uploadOnCloudinary}