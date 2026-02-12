 import { QUESTIONS_PROMPT } from "@/services/Constants";
 import { NextResponse } from "next/server";
 import OpenAI from "openai";

 export async function POST(req){

    const{jobPosition,jobDescription,duration,type}=await req.json();

     const FINAL_PROMPT=QUESTIONS_PROMPT
     .replace('{{jobTitle}}',jobPosition)
     .replace('{{jobDescription}}',jobDescription)
     .replace('{{duration}}',duration)
     .replace('{{type}}',type)

    console.log(FINAL_PROMPT);
     try{
     const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY,
        })
     const completion = await openai.chat.completions.create({
     model: "google/gemma-2-9b-it",
     messages: [
       { role: "user", content:FINAL_PROMPT}
     ],
     //response_format: 'json'
   })
   //console.log(completion.choices[0].message)
   return NextResponse.json(completion.choices[0].message)
 }
 catch(e)
 {
     console.log(e)
     return NextResponse.json(e)
 }

}

// import { QUESTIONS_PROMPT } from "@/services/Constants";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// export async function POST(req) {
//   try {
//     const { jobPosition, jobDescription, duration, type } = await req.json();

//     const interviewType = Array.isArray(type)
//     ? type.join(", ")
//     : type || "General";

//     const safeDuration = duration?.trim() || "5 minutes";

//     const FINAL_PROMPT = QUESTIONS_PROMPT
//       .replace('{{jobTitle}}', jobPosition)
//       .replace('{{jobDescription}}', jobDescription)
//       .replace('{{duration}}', safeDuration)
//       .replace('{{type}}', interviewType);

//     console.log("FINAL PROMPT:", FINAL_PROMPT);

//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: process.env.OPENROUTER_API_KEY,
//     });

//     const completion = await openai.chat.completions.create({
//       model: "openai/gpt-oss-120b:free",
//       messages: [
//         {
//           role: "system",
//           content: "You are an expert interview coach. Generate clear interview questions."
//         },
//         {
//           role: "user",
//           content: FINAL_PROMPT
//         }
//       ],
//       temperature: 0.7,
//       max_tokens: 500,
//     });

//     const text = completion.choices[0]?.message?.content;

//     if (!text) {
//       throw new Error("AI returned empty response");
//     }

//     console.log("AI RESPONSE:", text);

//     return NextResponse.json(
//       { success: true, questions: text },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error("API ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: error.message || "Server error",
//       },
//       { status: 500 }
//     );
//   }
// }
