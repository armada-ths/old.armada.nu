import React, { useState } from "react";
import './index.scss'
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaRegCalendarCheck, FaRegFileAlt, FaFlagCheckered } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import MyCssBaseline from "./MyCssBaseline";

const VerticalTimeline = () => {

 
    const before = `* Create your account at event.armada.nu
    \n* Choose not all of your work experience, take the latest one and then the best ones. Maximum 4 employments.
    \n* Have a profile pic where you look like you. Newly taken, dressed as how you would be at an interview.\n\n
    \n* Take the time and write an introduction. Tips on what to include:
    * Work related interest, in which areas you see yourself working in, why you chose to study what you do.\n\n
    * Add tags. The tags are key to the mapping. Both mapping for companies and jobs. Remember, add similar tags, the companies can have added a different, similar tag, to their interest and jobs.\n\n 
    \n* Browse for companies. On the 9th of November you will be able to start browsing the companies.\n Do your research beforehand. What companies would you like to talk to? Make sure to follow them. 
    \n* Add to your day-planner
    * Apply for video conversation. 
    * Add break out rooms
    * Add live-presentations `
    const during = `* Keep track of your day-planner and keep adding things that interest you. 
    * Live presentations 
    * Breakout rooms 
    * Video conversations
    \n* Initiate a chat with an interesting company. 
    * Go to one of their chat topics. They give you a hint on what the company would like to discuss.
    * Remember to be genuine and a bit personal. Ask specific questions for them. You are not chatting with a robot who can find all the answers on their webpage.
    \n * Suggested more personal questions for company representatives: 
    * How long have you worked there? 
    * Why did you apply for the job in the first place? 
    * What do you think about the work environment? 
    * What are your suggestions for standing out during an interview? 
    * How does a regular day look for your role? 
    \n* Reply to chats that companies send to you. 
    At the platform, companies will be able to browse online students 
    (one of the many reasons why your profile should be as updated as possible).
    The same way goes for companies as for you, when they find someone interesting, they will write you a chat. Make sure to answer them and also check out what type of company they are. It’s easy to check out large companies you have heard of before, and easy to miss smaller companies, but they could be equally interesting. Companies can star mark students. 
    \n* Apply for jobs
    * How to and where to find them? 
    \n* What can you expect to find in the company's booths? All companies have different information, but examples are: 
    * General information on what they are doing and what type of students they are interested in 
    * Competitions 
    * Chat topics 
    * Apply for video conversations
    * Breakout rooms `
    const after = `\n* How to stay in touch with companies/company representatives after the fair? 
    * Initiated chatts will still be active for some time after the fair. 
    * All unanswered chats will exceed in an email reminder. You can also continue the conversation over email. 
    * Connect via LinkedIn 
    \n\n * Make sure to summarize after the fair. 
    * What were you impressed by? 
    * Any interesting companies to keep track of? 
    * Should I make any changes in my studies? Recommended courses etc`
  const [showText, setShowText] = useState("before")
  const [beforeColor,bCol]=useState("#00d790")
  const [duringColor,dCol]=useState("gray")
  const [afterColor,aCol]=useState("gray")
  const [befBut,setBefBut] = useState("act")
  const [durBut,setDurBut] = useState("nact")
  const [aftBut,setAftBut] = useState("nact")
    return (
        <div className="containerTime">
        <div className="VerticalTimeline">
  <MyCssBaseline/>
  <Timeline className="VerTime" minEvents={3} variant="">
  <TimelineEvent className="before"
    color={beforeColor}
    icon={FaRegFileAlt}
    title='Before'
    subtitle=''
    action={{
        label: 'Before',
        onClick: () => {setShowText("before");bCol("#00d790");dCol("gray");aCol("gray"); }
      }}
  />
  <TimelineEvent
  className="during"
  color={duringColor}
    icon={FaRegCalendarCheck}
    title='During'
    subtitle=''
    action={{
        label: 'During',
        onClick: () => {setShowText("during");bCol("gray");dCol("#00d790");aCol("gray");}
      }}
  />
  <TimelineEvent 
className="after"
color={afterColor}
    icon={FaFlagCheckered}
    title='After'
    subtitle=''
    action={{
      label: 'After',
      onClick: () => {setShowText("after");bCol("gray");dCol("gray");aCol("#00d790");}
    }}
  />
</Timeline>


        </div>
<div className="mobileVersion">
    <button className={befBut} onClick={() =>{
      setShowText("before");
      setBefBut("acct");
      setDurBut("nact");
      setAftBut("nact");
  } }>Before</button>
    <button className={durBut} onClick={() => {
      setShowText("during");
      setBefBut("nact");
      setDurBut("act");
      setAftBut("nact");
  }}>During</button>
    <button className={aftBut} onClick={() => {
      setShowText("after");
      setBefBut("nact");
      setDurBut("nact");
      setAftBut("act");
  }}>After</button>
</div>
{showText==="before" && 
<ReactMarkdown  className="butBef" children={before} ></ReactMarkdown>
}
{showText==="during" && 
<ReactMarkdown  className="butDur" children={during} ></ReactMarkdown>
}
{showText==="after" && 
<ReactMarkdown  className="butAft" children={after} ></ReactMarkdown>
}
        </div>
    )
}
VerticalTimeline.propTypes = {
    
}
export default VerticalTimeline
