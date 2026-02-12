import { BriefcaseBusinessIcon, Calendar, Code2Icon, LayoutDashboard, List, Puzzle, Settings, User2Icon, UsersIcon } from "lucide-react";

export const SideBarOptions=[
    {
        name:'Dashboard',
        icon:LayoutDashboard,
        path:'/dashboard'
    },
    {
        name:'Scheduled Interview',
        icon:Calendar,
        path:'/scheduled-interview'
    },
     {
        name:'All Interview',
        icon:List,
        path:'/all-interview'
    },
     {
        name:'Settings',
        icon:Settings,
        path:'/settings'
    },
     
];

export const InterviewType = [
    {
        title: 'Technical',
        icon: Code2Icon
    },
    {
        title: 'Behavioral',
        icon: User2Icon
    },
    {
        title: 'Experience',
        icon: BriefcaseBusinessIcon
    },
    {
        title: 'Problem Solving',
        icon: Puzzle
    },
    {
        title: 'Leadership',
        icon: UsersIcon
    }
];

export const QUESTIONS_PROMPT =  
/*`You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of high-quality interview questions:

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

📝 Instructions:

- Analyze the job description to identify key responsibilities, required skills, and expected experience.
- Generate a list of interview questions that match the interview duration.
- Ensure the questions are relevant to a real-life {{type}} interview.
- ONLY RETURN a JSON array. Do NOT include any explanations, notes, or text outside the array.
- Each question object must have two properties:
  - "question": the interview question
  - "type": one of "Experience", "Technical", "Behavioral", "Leadership"

🎯 Example JSON output:

[
  { "question": "Tell me about a time you worked on a challenging project.", "type": "Behavioral" },
  { "question": "Explain the difference between state and props in React.", "type": "Technical" }
]
`;*/

`You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:

Job Title: {{jobTitle}}

Job Description:{{jobDescription}}

Interview Duration: {{duration}}

Interview Type: {{type}}

📝 Your task:

Analyze the job description to identify key responsibilities, required skills, and expected experience.

Generate a list of interview questions depends on interview duration

Adjust the number and depth of questions to match the interview duration.

Ensure the questions match the tone and structure of a real-life {{type}} interview.

🧩 Format your response in JSON format with array list of questions.
format:[
{
 "question":"string",
 "type":"Technical/Behavioral/Experince/Problem Solving/Leadership"
},{
...
}]

🎯 The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`


