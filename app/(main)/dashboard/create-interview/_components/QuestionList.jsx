
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2, Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import QuestionListContainer from './QuestionListContainer';
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';


function QuestionList({ formData, onCreateLink }) {
 const [loading,setLoading]=useState(false);
 const [questionList,setQuestionList]=useState([]);
 const {user}=useUser();
 const [saveLoading,setSaveLoading]=useState(false);
 useEffect(()=>{
    if(formData)
    {
      GenerateQuestionList();  
    }

 },[formData])
 const GenerateQuestionList=async()=>{
    setLoading(true);
    try{
        const result=await axios.post('/api/ai-model',{
        ...formData
        })
        console.log(result.data);
        const Content = result?.data?.content;
       // const FINAL_CONTENT = Content.replace(/```json/i,'').replace(/```/g,'').trim();
        if (!Content || typeof Content !== "string") {
        console.error("Invalid AI content:", result.data);
        toast("AI returned invalid content");
        setQuestionList([]);
        return;
        }
        const cleanedContent = Content
        .replace(/```json/i, '')
        .replace(/```/g, '')
        .trim();
    const extractJSON = (text) => {
  try {
    const match = text.match(/\[[\s\S]*?\]/); // non-greedy
    if (!match) throw new Error("No JSON array found");

    const cleaned = match[0]
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .replace(/,\s*]/g, "]")
      .replace(/,\s*}/g, "}");

    return JSON.parse(cleaned);
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    return [];
  }
};


    const parsedData = extractJSON(cleanedContent);

    // 3️⃣ Set the question list
    setQuestionList(parsedData);

  
    }
    catch(e)
    {
        console.error(e);
        toast('Server Error, Try Again!');
    }finally {
        setLoading(false);
    }

 };

 const onFinish = async() => {
    setSaveLoading(true);
   const interview_id=uuidv4();
   const { data, error } = await supabase
  .from('Interviews')
  .insert([
    { 
        ...formData,
        questionList:questionList,
        userEmail:user?.email,
        interview_id:interview_id
     },
  ])
      .select()
      setSaveLoading(false);

      onCreateLink(interview_id)
   //console.log(data);       

 }
  return (
    <div>
        {loading&&
        <div className='p-5 bg-black rounded-2xl border border-primary-100 flex gap-5 items-center'>
            <Loader2Icon className='animate-spin'/>
            <div>
                <h2 className='text-lg'>Generating Interview Questions</h2>
                <p className='text-sm'>Our AI is crafting personalized questions based on your job position </p>
            </div>
        </div>
        }
         {questionList?.length>0&&
         <div>
            <QuestionListContainer questionList={questionList}/>
         </div>   
             }

            <div className='flex justify-end mt-10 '>
                <Button onClick={()=>onFinish()} disabled={saveLoading}>
                    {saveLoading&&<Loader2 className='animate-spin'/>}
                    Create Interview Link & Finish</Button>
            </div>
        
    </div>
  )

  
}

export default QuestionList