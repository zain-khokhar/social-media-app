import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";


// Configure Cloudinary using environment variable
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);

// Handle POST requests for image upload
export async function POST(request) {
  try {
    const { uploadedFiles } = await request.json();
    console.log('Uploading to Cloudinary, payload starts:', uploadedFiles?.substring(0, 100));
    console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);

    // Upload the base64 image string to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(uploadedFiles, {
  resource_type: "auto",
});
    console.log('Cloudinary upload success:', uploadRes.secure_url);
    return NextResponse.json({ url: uploadRes.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    const message = error?.message || 'unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}