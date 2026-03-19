

/*"use client"
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Mic, Phone, Timer } from 'lucide-react';
import React, { useContext, useEffect } from 'react'
import Image from "next/image"
import Vapi from '@vapi-ai/web';
import AlertConfirmation from './_components/AlertConfirmation';

function StartInterview() {
  const {interviewInfo,setInterviewInfo}=useContext(InterviewDataContext);
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY);
  

// Start voice conversation
  vapi.start('YOUR_ASSISTANT_ID');

// Listen for events
  vapi.on('call-start', () => console.log('Call started'));
  vapi.on('call-end', () => console.log('Call ended'));
  vapi.on('message', (message) => {
  if (message.type === 'transcript') {
    console.log(`${message.role}: ${message.transcript}`);
  }
});

  useEffect(()=>{
     interviewInfo && startCall();
  },[interviewInfo])

  const startCall=()=>{
    let questionList;
    interviewInfo?.interviewData?.questionList.forEach((item,index)=>(
      questionList = item?.question+","+questionList
    ));
    
    const assistantOptions = {
      name: "AI Recruiter",
      firstMessage: "Hi "+interviewInfo?.userName+", how are you? Ready for your interview on "+interviewInfo?.interviewData?.jobPosition,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
      },
      voice: {
        provider: "openai",
        voiceId: "alloy",
      },
      model: {
        provider: "openai",
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `
  You are an AI voice assistant conducting interviews.
Your job is to ask candidates provided interview questions, assess their responses.
Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
"Hey there! Welcome to your `+interviewInfo?.interviewData?.jobPosition+`interview. Let’s get started with a few questions!"
Ask one question at a time and wait for the candidate’s response before proceeding. Keep the questions clear and concise. Below Are the questions ask one by one:
Questions: `+questionList+`
If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
"Need a hint? Think about how React tracks component updates!"
Provide brief, encouraging feedback after each answer. Example:
"Nice! That’s a solid answer."
"Hmm, not quite! Want to try again?"
Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let’s tackle a tricky one!"
After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
"That was great! You handled some tough questions well. Keep sharpening your skills!"
End on a positive note:
"Thanks for chatting! Hope to see you crushing projects soon!"
Key Guidelines:
✅ Be friendly, engaging, and witty 🎤
✅ Keep responses short and natural, like a real conversation
✅ Adapt based on the candidate’s confidence level
✅ Ensure the interview remains focused on React
`.trim(),
            },
        ],
    },
    };

     vapi.start(assistantOptions)


  }
  
  const stopInterview=()=>{
    vapi.stop()
  }
  return (
    <div className='p-15 lg:px-48 xl:px-56  bg-black'>
      <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
        <span className='flex gap-2 items-center'>
          <Timer/>
          00:00:00
        </span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
        <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
          <Image src={'/user-avatar.png'} alt='user-avatar'
          width={100}
          height={100}
          className='w-[60px] h-[60px] rounded-full object-cover'/>
          <h2 className='font-bold text-xl'>AI Recruiter</h2>
        </div>
        
        <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
          <h2 className='text-2xl bg-primary text-white p-3 rounded-full px-4 '>{interviewInfo?.userName[0]}</h2>
          <h2 className='font-bold text-xl'>{interviewInfo?.userName}</h2>
        </div>
      </div>

      <div className='flex items-center gap-5 justify-center mt-7'>
        <Mic className='h-12 w-12 p-3 bg-gray-600 text-white rounded-full cursor-pointer'/>
        <AlertConfirmation stopInterview={()=>stopInterview()}>
          <Phone className='h-12 w-12 p-3 bg-red-600 text-white rounded-full cursor-pointer'/>
        </AlertConfirmation>
        
      </div>
      <p className=' text-gray-400 text-center mt-5'>Interview in Progress..</p>
    </div>
  )
}

export default StartInterview*/

/*"use client"
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Mic, Phone, Timer } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'
import Vapi from '@vapi-ai/web';

function StartInterview() {
  const {interviewInfo,setInterviewInfo}=useContext(InterviewDataContext)
  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

// Start voice conversation
vapi.start('YOUR_ASSISTANT_ID');

// Listen for events
vapi.on('call-start', () => console.log('Call started'));
vapi.on('call-end', () => console.log('Call ended'));
vapi.on('message', (message) => {
  if (message.type === 'transcript') {
    console.log(`${message.role}: ${message.transcript}`);
  }
});


  return (
    <div className='p-20 lg:px-48 xl:px-56'>
        <h2 className='font-bold text-xl flex justify-between'>AI Interview Session
            <span className='flex gap-2 items-center'>
                <Timer/>
                00:00:00
            </span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
            <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
                <Image src={'/user-avatar.png'} alt='ai'
                width={100}
                height={100}
                className='w-[60px] h-[60px] rounded-full oject-cover'/>
                <h2 className='text-xl'>AI Recruiter</h2>
            </div>
            
             <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
                <h2 className='text-2xl bg-primary text-white p-3 rounded-full px-5'>{interviewInfo?.userName[0]}</h2>
                <h2 className='text-xl'>{interviewInfo?.userName}</h2>
            </div>
        </div>
        <div className='flex items-center gap-5 justify-center mt-5'>
            <Mic className='h-12 w-12 p-3 bg-gray-600 rounded-full cursor-pointer'/>
            <Phone className='h-12 w-12 p-3 bg-red-600 rounded-full cursor-pointer'/>
        </div>
        <h2 className='text-sm text-gray-400 text-center mt-5'>Interview in Progress..</h2>
    </div>
  )
}

export default StartInterview*/

/*"use client"

import { InterviewDataContext } from '@/context/InterviewDataContext'
import { Mic, Phone, Timer } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Vapi from '@vapi-ai/web'
import { assistantOptions } from '@/lib/assistantOptions' // adjust path

function StartInterview() {

  const { interviewInfo } = useContext(InterviewDataContext)
  const vapiRef = useRef(null)
  const [isCallActive, setIsCallActive] = useState(false)

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY)

      vapiRef.current.on('call-start', () => {
        console.log('Call started')
        setIsCallActive(true)
      })
      console.log("VAPI KEY:", process.env.NEXT_PUBLIC_VAPI_API_KEY)

      vapiRef.current.on('call-end', () => {
        console.log('Call ended')
        setIsCallActive(false)
      })

      vapiRef.current.on('message', (message) => {
        if (message.type === 'transcript') {
          console.log(`${message.role}: ${message.transcript}`)
        }
      })
    }
  }, [])

  const startInterview = async () => {
  try {
    await vapiRef.current.start("d2810a00-f065-4cc2-8ee9-d34da1b8c28b")
  } catch (err) {
    console.error("START FAILED:", err)
  }
}
  // ✅ End Interview
  const endInterview = () => {
    if (vapiRef.current) {
      vapiRef.current.stop()
    }
  }

  return (
    <div className='p-20 lg:px-48 xl:px-56'>

      <h2 className='font-bold text-xl flex justify-between'>
        AI Interview Session
        <span className='flex gap-2 items-center'>
          <Timer />
          00:00:00
        </span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
        <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
          <Image
            src={'/user-avatar.png'}
            alt='ai'
            width={100}
            height={100}
            className='w-[60px] h-[60px] rounded-full object-cover'
          />
          <h2 className='text-xl'>AI Recruiter</h2>
        </div>

        <div className='bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center'>
          <h2 className='text-2xl bg-primary text-white p-3 rounded-full px-5'>
            {interviewInfo?.userName?.[0]}
          </h2>
          <h2 className='text-xl'>{interviewInfo?.userName}</h2>
        </div>
      </div>

      <div className='flex items-center gap-5 justify-center mt-5'>

        { 🎤 Start }
        <Mic
          onClick={startInterview}
          className='h-12 w-12 p-3 bg-green-600 rounded-full cursor-pointer'
        />

        { 📞 End }
        <Phone
          onClick={endInterview}
          className='h-12 w-12 p-3 bg-red-600 rounded-full cursor-pointer'
        />

      </div>

      <h2 className='text-sm text-gray-400 text-center mt-5'>
        {isCallActive ? "Interview in Progress..." : "Click mic to start interview"}
      </h2>

    </div>
  )
}

export default StartInterview*/


/*"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { createAssistantOptions } from "@/lib/createAssistantOptions";

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);
  const questionList = interviewInfo?.interviewData?.questions || [];
  const assistantOptions = createAssistantOptions(interviewInfo, questionList);
  const vapiRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

      vapiRef.current.on("call-start", () => {
        console.log("Call started");
        setIsCallActive(true);
      });

      vapiRef.current.on("call-end", () => {
        console.log("Call ended");
        setIsCallActive(false);
      });

      vapiRef.current.on("message", (message) => {
        if (message.type === "transcript") {
          console.log(`${message.role}: ${message.transcript}`);
        }
      });
    }
  }, []);

  const startInterview = async () => {
    try {
      if (!interviewInfo) return;

      // format questions
      const questions = interviewInfo?.questionList || [];
      const formattedQuestions = Array.isArray(questions)
        ? questions.join("\n")
        : questions;

      // clone assistant options
      const assistant = JSON.parse(JSON.stringify(assistantOptions));

      // replace variables
      assistant.firstMessage = assistant.firstMessage
        .replace("{{userName}}", interviewInfo?.userName)
        .replace("{{jobPosition}}", interviewInfo?.jobPosition);

      assistant.model.messages[0].content =
        assistant.model.messages[0].content
          .replace("{{userName}}", interviewInfo?.userName)
          .replace("{{jobPosition}}", interviewInfo?.jobPosition)
          .replace("{{questionList}}", formattedQuestions);

      console.log("Starting interview with config:", assistant);

      await vapiRef.current.start(assistant);
    } catch (err) {
      console.error("START FAILED:", err);
    }
  };

  const endInterview = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">

      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00:00:00
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">

        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image
            src={"/user-avatar.png"}
            alt="ai"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h2 className="text-xl text-white">AI Recruiter</h2>
        </div>

        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <h2 className="text-2xl bg-primary text-white p-3 rounded-full px-5">
            {interviewInfo?.userName?.[0]}
          </h2>
          <h2 className="text-xl text-white">
            {interviewInfo?.userName}
          </h2>
        </div>

      </div>

      <div className="flex items-center gap-5 justify-center mt-5">

        <Mic
          onClick={startInterview}
          className="h-12 w-12 p-3 bg-green-600 rounded-full cursor-pointer"
        />

        <Phone
          onClick={endInterview}
          className="h-12 w-12 p-3 bg-red-600 rounded-full cursor-pointer"
        />

      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        {isCallActive
          ? "Interview in Progress..."
          : "Click microphone to start interview"}
      </h2>

    </div>
  );
}

export default StartInterview;*/

/*"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { createAssistantOptions } from "@/lib/createAssistantOptions";

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);
  const questionList = interviewInfo?.interviewData?.questions || [];
  const vapiRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

      vapiRef.current.on("call-start", () => {
        console.log("Call started");
        setIsCallActive(true);
      });

      vapiRef.current.on("call-end", () => {
        console.log("Call ended");
        setIsCallActive(false);
      });

      vapiRef.current.on("message", (message) => {
        if (message.type === "transcript") {
          console.log(`${message.role}: ${message.transcript}`);
        }
      });
    }
  }, []);

  const startInterview = async () => {
    try {
      //if (!interviewInfo) return;
      if (!interviewInfo || questionList.length === 0) {
      console.error("Missing interview data or questions");
      return;
    }

      const assistantConfig = createAssistantOptions(interviewInfo, questionList);

      console.log("Starting interview with config:", assistantConfig);

      await vapiRef.current.start(assistantConfig);
    } catch (err) {
      console.error("START FAILED:", err);
    }
  };

  const endInterview = () => {
    if (vapiRef.current) vapiRef.current.stop();
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00:00:00
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <Image
            src={"/user-avatar.png"}
            alt="ai"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h2 className="text-xl text-white">AI Recruiter</h2>
        </div>

        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <h2 className="text-2xl bg-primary text-white p-3 rounded-full px-5">
            {interviewInfo?.userName?.[0]}
          </h2>
          <h2 className="text-xl text-white">{interviewInfo?.userName}</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-center mt-5">
        <Mic
          onClick={startInterview}
          className="h-12 w-12 p-3 bg-green-600 rounded-full cursor-pointer"
        />
        <Phone
          onClick={endInterview}
          className="h-12 w-12 p-3 bg-red-600 rounded-full cursor-pointer"
        />
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        {isCallActive ? "Interview in Progress..." : "Click microphone to start interview"}
      </h2>
    </div>
  );
}

export default StartInterview;*/

"use client";

import { InterviewDataContext } from "@/context/InterviewDataContext";
import { Loader2Icon, Mic, Phone, Timer } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { createAssistantOptions } from "@/lib/createAssistantOptions";
import AlertConfirmation from "./_components/AlertConfirmation";
import { toast } from "sonner";
import axios from "axios";
import { supabase } from "@/services/supabaseClient";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

function StartInterview() {
  const { interviewInfo } = useContext(InterviewDataContext);

  // Fallback questions if none exist
  const questionList =
    interviewInfo?.interviewData?.questionList || [];
    

  const vapiRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null)
  const conversationRef = useRef("");
  const {interview_id}=useParams();
  const router=useRouter();
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);

      vapiRef.current.on("call-start", () => {
        console.log("Call started");
        setIsCallActive(true);
        toast('Call Connected...')

         intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
            }, 1000);
      });

      vapiRef.current.on("call-end", () => {
        console.log("Call ended");
        setIsCallActive(false);
        toast('Interview Ended');
        
        clearInterval(intervalRef.current);
        GenerateFeedback();

      });

      vapiRef.current.on("message", (message) => {
        if (message.type === "transcript") {
          const transcriptLine = `${message.role}: ${message.transcript}`;
          console.log(transcriptLine)
          conversationRef.current += transcriptLine + "\n";
        }
      });
    }
  }, []); */
  useEffect(() => {
  if (!vapiRef.current) {
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY);
  }

  const vapi = vapiRef.current;

  // ✅ 1. CALL START
  const handleCallStart = () => {
    console.log("Call started");
    setIsCallActive(true);
    toast("Call Connected...");

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // ✅ 2. CALL END
  const handleCallEnd = () => {
    console.log("Call ended");
    setIsCallActive(false);
    toast("Interview Ended");

    clearInterval(intervalRef.current);
   
    if (conversationRef.current.trim()) {
    GenerateFeedback();
  }
  };

  // ✅ 3. MESSAGE (TRANSCRIPT)
  const handleMessage = (message) => {
    if (message.type === "transcript") {
      const transcriptLine = `${message.role}: ${message.transcript}`;
      console.log(transcriptLine);
      conversationRef.current += transcriptLine + "\n";
    }
  };

  // ✅ ATTACH LISTENERS
  vapi.on("call-start", handleCallStart);
  vapi.on("call-end", handleCallEnd);
  vapi.on("message", handleMessage);

  // ✅ CLEANUP (VERY IMPORTANT)
  return () => {
    vapi.off("call-start", handleCallStart);
    vapi.off("call-end", handleCallEnd);
    vapi.off("message", handleMessage);

    clearInterval(intervalRef.current);
  };

}, []);
  const startInterview = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    const assistantConfig = createAssistantOptions(interviewInfo, questionList);

    console.log("Starting interview with config:", assistantConfig);
    
    if (!vapiRef.current) {
  console.error("Vapi not initialized");
  return;
  }
    await vapiRef.current.start(assistantConfig);

  } catch (err) {
    console.error("START FAILED:", err);
  }
};
  const endInterview = () => {
  if (loading) return; // 🚫 prevent multiple clicks

  if (vapiRef.current) {
    setLoading(true); // show spinner immediately
    vapiRef.current.stop();
  }
};
 // const endInterview = () => {
    //if (vapiRef.current) vapiRef.current.stop();
  //};
  console.log("Interview Info:", interviewInfo);
  console.log("Generated Questions:", questionList);

  const formatTime = (time) => {
  const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");

  return `${hrs}:${mins}:${secs}`;
  };

  const GenerateFeedback = async() => {

    if (!conversationRef.current) {
      console.log("No conversation captured");
      return;
    }

    const result = await axios.post('/api/ai-feedback',{
      conversation:conversationRef.current
    });

    console.log(result?.data);

    const Content = result?.data?.content || "";
    const FINAL_CONTENT = Content
    .replace(/```json/g,"")
    .replace(/```/g,"")
    .trim();

    console.log(FINAL_CONTENT);
    // Save to Database

    const { data, error } = await supabase
      .from('interview-feedback')
      .insert([
        { 
          userName: interviewInfo?.userName,
          userEmail: interviewInfo?.userEmail,
          interview_id: interview_id,
          feedback: FINAL_CONTENT,
          recommended: false
        },
  ])
      .select()
    if (error) {
  console.log("Supabase Error:", error);
} else {
  console.log("Saved:", data);
}
  //console.log(data);
  router.replace('/interview/'+interview_id+"/completed");

  
}
  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
            {formatTime(seconds)}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className="relative">
            {!isCallActive && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"/>}
              <Image
              src={"/user-avatar.png"}
              alt="ai"
              width={100}
              height={100}
              className="w-[60px] h-[60px] rounded-full object-cover"
              />
          </div>
          <h2 className="text-xl text-white">AI Recruiter</h2>
        </div>

        <div className="bg-black h-[300px] rounded-lg border flex flex-col gap-3 items-center justify-center">
          <div className="relative">
            {!isCallActive && <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"/>}
            <h2 className="text-2xl bg-primary text-white p-3 rounded-full px-5">
              {interviewInfo?.userName?.[0]}
            </h2>
          </div>
          <h2 className="text-xl text-white">{interviewInfo?.userName}</h2>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-center mt-5">
        <Mic
          onClick={!loading ? startInterview : undefined}
          className={`h-12 w-12 p-3 bg-green-600 rounded-full cursor-pointer ${loading ? "bg-gray-400" : "bg-green-600"}`}
        />
        {/*<AlertConfirmation stopInterview={endInterview}> */}
          {!loading ? <Phone className="h-12 w-12 p-3 bg-red-600 rounded-full cursor-pointer" 
          onClick={endInterview}/> : (<Loader2Icon className="animate-spin h-12 w-12" />)}
        {/* </AlertConfirmation> */}
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        {isCallActive ? "Interview in Progress..." : "Click microphone to start interview"}
      </h2>
    </div>
  );
}

export default StartInterview;
