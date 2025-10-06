import Link from 'next/link'
import React from 'react'
import { Bell, User, Home, Plus, Search, MessageCircle } from "lucide-react"

export default function page() {
  return (
    <nav className='bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-2xl border-b border-white/10 backdrop-blur-sm'>
      <div className='flex justify-between items-center px-6 py-4 max-w-7xl mx-auto'>
        {/* Logo/Brand */}
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-xl'>S</span>
          </div>
          <Link href='/' className='text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent hover:from-purple-100 hover:to-blue-100 transition-all duration-300'>
            SocialApp
          </Link>
        </div>

        {/* Search Bar */}
        <div className='flex-1 max-w-xl mx-8'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5' />
            <input 
              type='text' 
              placeholder='Search posts, people, and more...' 
              className='w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300'
            />
          </div>
        </div>

        {/* Navigation Icons */}
        <div className='flex items-center space-x-2'>
          <Link href='/' className='p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group'>
            <Home className='w-6 h-6 group-hover:scale-110 transition-transform' />
          </Link>
          <Link href='/create-post' className='p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group'>
            <Plus className='w-6 h-6 group-hover:scale-110 transition-transform' />
          </Link>
          <button className='p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group relative'>
            <MessageCircle className='w-6 h-6 group-hover:scale-110 transition-transform' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-purple-900'></span>
          </button>
          <button className='p-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group relative'>
            <Bell className='w-6 h-6 group-hover:scale-110 transition-transform' />
            <span className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-purple-900'></span>
          </button>
          
          {/* User Profile */}
          <div className='flex items-center space-x-3 ml-4 pl-4 border-l border-white/20'>
            <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300'>
              <User className='w-5 h-5 text-white' />
            </div>
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-white'>John Doe</p>
              <p className='text-xs text-gray-300'>Premium User</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
