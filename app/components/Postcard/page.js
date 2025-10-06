import { ThumbsUp ,MessageCircle , Share2 } from "lucide-react";
import React from 'react'

 function ActionButtons(){
    return (
        <div className="flex justify-around border-t border-gray-200 pt-4 text-gray-600">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                <ThumbsUp size={18}/> Like
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                <MessageCircle size={18}/>Comment
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                <Share2 size={18}/>Share
            </button>
        </div>
    )
}

//  post card 

export default function Postcard(){
    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-50">
            <div className="w-[60vw] max-w-2xl min-h-[500px] bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Post Title</h3>
                    <img 
                    src="\a (4).jpg"
                    alt="POST"
                    className="w-full h-80 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                        This is a professional post description that provides context and engaging content for the audience. 
                        It demonstrates high-quality formatting and presentation.
                    </p>
                </div>
                <div className="px-6 pb-6">
                    <ActionButtons/>
                </div>
            </div>
        </div>
    )
}
