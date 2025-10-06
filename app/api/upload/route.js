import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
export const runtime = 'nodejs';

// Configure Cloudinary using environment variable
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

// Handle POST requests for image upload
export async function POST(request) {
  try {
    const { uploadedFiles } = await request.json();
    console.log('Uploading to Cloudinary, payload starts:', uploadedFiles?.substring(0, 100));
    // Upload the base64 image string to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(uploadedFiles);
    console.log('Cloudinary upload success:', uploadRes.secure_url);
    return NextResponse.json({ url: uploadRes.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    const message = error?.message || 'unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}