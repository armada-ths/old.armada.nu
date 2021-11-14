import React, {  useState } from 'react';
import './index.scss';
import ReactMarkdown from 'react-markdown'


const Conceptvisualization = () => {
  const [showText, setShowText]=useState("Live")
  const [livBut, setLive] = useState("act")
  const [vidBut, setVid] = useState("nact")
  const [broBut, setBro] = useState("nact")
  const [chatBut, setChat] = useState("nact")
  const [dayBut, setDay] = useState("nact")
  const live = `Some companies will have live presentations during the fair. They will be hosted at graduateland and the companies will be streamed online.`
  const video = `You need to apply and then get it confirmed. You can also be referred to another time in case a lot of other students applied for the same time but the company is still very interested in talking to you. Can be found in the company booth. The function are meant for shorter conversations `
  const broken = `The virtual way of eavesdropping. Companies have decided in advance how long and what their breakout rooms will consist of. Join in a more passive way, The virtual call will consist of several students at the same time. You will al be able to listen to what everyone says, students including company representatives. `
  const chat = `Are initiated in text form. Later on the company can switch to a video chat, one you don’t need to pre book. Think of it as texting evolving to facetime. All chats initiated during the fair will be able to continue to exist for some time even after the fair has closed. If you start chatting with one person, it’s super easy for the company to refer you to one of their coworkers in case that would be necessary. So you have one chat per company, no matter how many different representatives you would talk to.`
  const dayplanner = `A calendar at the platform where you collect events you're interested in. The events could be live presentations, specific breakout rooms or applied and accepted video conversations. `

  return (<div className="containerConcept">
    <h1>Concepts</h1>

   <div className="containerButtons">
 
  <button className={livBut} onClick={()=>{
    setShowText("Live");
    setLive("act");
    setVid("nact");
    setBro("nact");
    setChat("nact");
    setDay("nact")

}}>Live Presentation</button>
  <button className={vidBut} onClick={()=>{
    setShowText("Video");
    setLive("nact");
    setVid("act");
    setBro("nact");
    setChat("nact");
    setDay("nact")

}}>Video Conversation</button>
  <button className={broBut} onClick={()=>{
    setShowText("Break");
    setLive("nact");
    setVid("nact");
    setBro("act");
    setChat("nact");
    setDay("nact")

}}>Break out rooms</button>

  <button className={chatBut}  onClick={()=>{
    setShowText("Day-planner");
    setLive("nact");
    setVid("nact");
    setBro("nact");
    setChat("act");
    setDay("nact")

}}>Day-planner</button>
  <button className={dayBut} onClick={()=>{
    setShowText("Chat");
    setLive("nact");
    setVid("nact");
    setBro("nact");
    setChat("nact");
    setDay("act")

}}>Chat</button>
  </div> 
  <div className="containerText">
  {showText==="Live" && 
  <ReactMarkdown>{live}</ReactMarkdown>
}
{showText==="Video" && 
<ReactMarkdown>{video}</ReactMarkdown>
}
{showText==="Break" && 
<ReactMarkdown>{broken}</ReactMarkdown>
}{showText==="Chat" && 
<ReactMarkdown>{chat}</ReactMarkdown>
}
{showText==="Day-planner" && 
<ReactMarkdown>{dayplanner}</ReactMarkdown>
}

</div> 
  </div>);
}

export default Conceptvisualization;