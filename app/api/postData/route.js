import { NextResponse } from "next/server";
const POST_SCHEMA = require('@/models/post');


export  async function POST(req , res) {
    const {title , url} = await req.body;
    try{
        if(!title || !url){
            return NextResponse.json(
                {success:false,error:"no data provided"},
                {status:400}
            )
        }
      // save to database process here
    
    const newPost = new POST_SCHEMA({title,url});

 
    }
    catch(error){
        console.error('Error processing data:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Internal Server Error' },
            { status: 500 }
          );
    }
}