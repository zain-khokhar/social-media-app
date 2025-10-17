import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload buffer to Cloudinary
    // We need to wrap this in a Promise to use await
    const response = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          // Optionally, specify a folder in Cloudinary
          // folder: 'nextjs-uploads', 
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary Error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      
      // Send the buffer to Cloudinary
      uploadStream.end(buffer);
    });

    // Log the result and return the secure URL
    console.log('Cloudinary Upload Result:', response);
    return NextResponse.json({
      success: true,
      url: response.secure_url,
    });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}