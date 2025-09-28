"use client";
import { ImageIcon, MapPin, Smile, X, Camera, Globe, Users, Lock } from "lucide-react";
import { useState } from "react";

export default function CreatePost() {
  const [selectedAudience, setSelectedAudience] = useState("public");
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center items-start py-8 px-4">
      <div className="w-full max-w-2xl">
        {/* Header Card */}
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl mb-6 p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Create Post</h1>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          {/* User Profile Section */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JD</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">John Doe</h3>
              <select 
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="text-sm text-gray-600 bg-gray-100 rounded-lg px-3 py-1 border-0 focus:ring-2 focus:ring-blue-500 mt-1"
              >
                <option value="public">🌐 Public</option>
                <option value="friends">👥 Friends</option>
                <option value="private">🔒 Only me</option>
              </select>
            </div>
          </div>

          {/* Post Content */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
              <textarea
                rows={4}
                placeholder="What's on your mind, John?"
                className="w-full border-0 resize-none text-lg placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent text-gray-800 font-medium"
              ></textarea>
            </div>

            {/* Image Upload Area */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer group">
              <div className="text-center">
                <Camera size={48} className="mx-auto text-gray-400 group-hover:text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Add photos/videos</h3>
                <p className="text-gray-500 text-sm">or drag and drop</p>
                <input type="file" className="hidden" accept="image/*,video/*" multiple />
              </div>
            </div>

            {/* Enhanced Features */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-700">Add to your post</span>
              <div className="flex space-x-3">
                <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors group">
                  <ImageIcon size={20} className="text-green-600 group-hover:text-green-700" />
                </button>
                <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors group">
                  <MapPin size={20} className="text-red-500 group-hover:text-red-600" />
                </button>
                <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors group">
                  <Smile size={20} className="text-yellow-500 group-hover:text-yellow-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                Save Draft
              </button>
              <button className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Share Post
              </button>
            </div>
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 border border-white/20">
          <h3 className="font-semibold text-gray-900 mb-3">✨ Tips for great posts</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Use high-quality images to get more engagement</li>
            <li>• Write compelling captions that tell a story</li>
            <li>• Add relevant hashtags to reach more people</li>
            <li>• Post when your audience is most active</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
