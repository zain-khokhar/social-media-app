import { NextResponse } from "next/server";


export  async function POST(req , res) {
    const data = await req.body;
    try{
        if(!data){
            return NextResponse.json(
                {success:false,error:"no data provided"},
                {status:400}
            )
        }
      // save to database process here

    

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