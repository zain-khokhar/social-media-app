import { NextResponse } from "next/server";


export  async function POST(req , res) {
    const data = await req.body;
    try{
        
        console.log("Received Data:", data);
    }
    catch(error){
        console.error('Error processing data:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Internal Server Error' },
            { status: 500 }
          );
    }
}