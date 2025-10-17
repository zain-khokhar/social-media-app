"use client";

import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log('Selected file:', e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError(null);
    setImageUrl(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        console.log('Upload successful:', data.url);
        setImageUrl(data.url);
      } else {
        setError(data.error || 'Upload failed. Please try again.');
      }
    } catch (err) {
      console.error('An error occurred:', err);
      setError('An error occurred during upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Upload Image to Cloudinary</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </div>
        <button type="submit" disabled={uploading || !file} style={{ marginTop: '1rem' }}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
      )}

      {imageUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Upload Successful!</h3>
          <p>
            Image URL:{' '}
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              {imageUrl}
            </a>
          </p>
          <img
            src={imageUrl}
            alt="Uploaded image"
            style={{ maxWidth: '400px', marginTop: '1rem' }}
          />
        </div>
      )}
    </main>
  );
}