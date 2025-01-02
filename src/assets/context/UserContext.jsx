import React, { createContext, useState } from 'react'
import run from'../gemini';
export const datacontext=createContext()

function UserContext({children}) {
let  [speaking, setSpeaking] = useState(false);
let [prompt, setPrompt] = useState("listening...");
let [response,setResponse]=useState(false)


    function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.volume=1;
    text_speak.rate=1;//salaam walekum karta hu rukh
    text_speak.pitch=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak)
    }

    async function aiResponse(prompt){
       let text= await run(prompt)
       let newText=text.split("**")&&text.split("*")&&text.split("*")&&text.replace("google","Adarsh Vishwakarma")&&text.replace("Google","Adarsh Vishwakarma")
       setPrompt(newText)
       speak(newText)
       setResponse(true)
       setTimeout(() => {
        setSpeaking(false)
       }, 5000);
    }

    let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition=new speechRecognition()
    recognition.onresult=(e)=>{
        let currentIndex=e.resultIndex
        let transcript=e.results[currentIndex][0].transcript
        setPrompt(transcript)
        takeCommand(transcript.toLowerCase())
       
    }

   
    function takeCommand(command){
        if(command.includes("open") && command.includes("youtube")){
            window.open("https://www.youtube.com/","_blank");
            speak("opening Youtube");
            setResponse(true)
            setPrompt("opening Youtube...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("facebook")){
            window.open("https://www.facebook.com/","_blank");
            speak("opening Facebook");
            setResponse(true)
            setPrompt("opening Facebook...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("twitter")){
            window.open("https://www.twitter.com/","_blank");
            speak("opening Twitter");
            setResponse(true)
            setPrompt("opening Twitter...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("google")){
            window.open("https://www.google.com/","_blank");
            speak("opening Google");
            setResponse(true)
            setPrompt("opening Google...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("gmail")){
            window.open("https://mail.google.com/","_blank");
            speak("opening Gmail");
            setResponse(true)
            setPrompt("opening Gmail...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("instagram")){
            window.open("https://www.instagram.com/","_blank");
            speak("opening Instagram");
            setResponse(true)
            setPrompt("opening Instagram...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("linkedin")){
            window.open("https://www.linkedin.com/","_blank");
            speak("opening LinkedIn");
            setResponse(true)
            setPrompt("opening LinkedIn...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("amazon")){
            window.open("https://www.amazon.com/","_blank");
            speak("opening Amazon");
            setResponse(true)
            setPrompt("opening Amazon...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("wikipedia")){
            window.open("https://www.wikipedia.org/","_blank");
            speak("opening Wikipedia");
            setResponse(true)
            setPrompt("opening Wikipedia...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("reddit")){
            window.open("https://www.reddit.com/","_blank");
            speak("opening Reddit");
            setResponse(true)
            setPrompt("opening Reddit...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("netflix")){
            window.open("https://www.netflix.com/","_blank");
            speak("opening Netflix");
            setResponse(true)
            setPrompt("opening Netflix...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("spotify")){
            window.open("https://www.spotify.com/","_blank");
            speak("opening Spotify");
            setResponse(true)
            setPrompt("opening Spotify...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("pinterest")){
            window.open("https://www.pinterest.com/","_blank");
            speak("opening Pinterest");
            setResponse(true)
            setPrompt("opening Pinterest...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("tumblr")){
            window.open("https://www.tumblr.com/","_blank");
            speak("opening Tumblr");
            setResponse(true)
            setPrompt("opening Tumblr...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("quora")){
            window.open("https://www.quora.com/","_blank");
            speak("opening Quora");
            setResponse(true)
            setPrompt("opening Quora...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("ebay")){
            window.open("https://www.ebay.com/","_blank");
            speak("opening eBay");
            setResponse(true)
            setPrompt("opening eBay...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("bing")){
            window.open("https://www.bing.com/","_blank");
            speak("opening Bing");
            setResponse(true)
            setPrompt("opening Bing...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("yahoo")){
            window.open("https://www.yahoo.com/","_blank");
            speak("opening Yahoo");
            setResponse(true)
            setPrompt("opening Yahoo...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("slack")){
            window.open("https://slack.com/","_blank");
            speak("opening Slack");
            setResponse(true)
            setPrompt("opening Slack...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("skype")){
            window.open("https://www.skype.com/","_blank");
            speak("opening Skype");
            setResponse(true)
            setPrompt("opening Skype...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("zoom")){
            window.open("https://zoom.us/","_blank");
            speak("opening Zoom");
            setResponse(true)
            setPrompt("opening Zoom...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("microsoft")){
            window.open("https://www.microsoft.com/","_blank");
            speak("opening Microsoft");
            setResponse(true)
            setPrompt("opening Microsoft...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("dropbox")){
            window.open("https://www.dropbox.com/","_blank");
            speak("opening Dropbox");
            setResponse(true)
            setPrompt("opening Dropbox...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("airbnb")){
            window.open("https://www.airbnb.com/","_blank");
            speak("opening Airbnb");
            setResponse(true)
            setPrompt("opening Airbnb...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("uber")){
            window.open("https://www.uber.com/","_blank");
            speak("opening Uber");
            setResponse(true)
            setPrompt("opening Uber...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("whatsapp")){
            window.open("https://web.whatsapp.com/","_blank");
            speak("opening WhatsApp");
            setResponse(true)
            setPrompt("opening WhatsApp...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        // Adding more unique, niche services
        else if(command.includes("open") && command.includes("vimeo")){
            window.open("https://www.vimeo.com/","_blank");
            speak("opening Vimeo");
            setResponse(true)
            setPrompt("opening Vimeo...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("flickr")){
            window.open("https://www.flickr.com/","_blank");
            speak("opening Flickr");
            setResponse(true)
            setPrompt("opening Flickr...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("deviantart")){
            window.open("https://www.deviantart.com/","_blank");
            speak("opening DeviantArt");
            setResponse(true)
            setPrompt("opening DeviantArt...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("soundcloud")){
            window.open("https://www.soundcloud.com/","_blank");
            speak("opening SoundCloud");
            setResponse(true)
            setPrompt("opening SoundCloud...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("coursera")){
            window.open("https://www.coursera.org/","_blank");
            speak("opening Coursera");
            setResponse(true)
            setPrompt("opening Coursera...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("edx")){
            window.open("https://www.edx.org/","_blank");
            speak("opening edX");
            setResponse(true)
            setPrompt("opening edX...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("github")){
            window.open("https://github.com/","_blank");
            speak("opening GitHub");
            setResponse(true)
            setPrompt("opening GitHub...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("stackoverflow")){
            window.open("https://stackoverflow.com/","_blank");
            speak("opening StackOverflow");
            setResponse(true)
            setPrompt("opening StackOverflow...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("open") && command.includes("twitch")){
            window.open("https://www.twitch.tv/","_blank");
            speak("opening Twitch");
            setResponse(true)
            setPrompt("opening Twitch...");
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        else if(command.includes("time")){
            let time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
            speak(time);
            setResponse(true)
            setPrompt(time); 
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        
        else if(command.includes("date")){
            let date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"});
            speak(date); 
            setResponse(true)
            setPrompt(date); 
            setTimeout(() => {
                setSpeaking(false);
            }, 5000);
        }
        
        else{
            aiResponse(command);
        }
    }
    

    let value={
        recognition,
        speaking,
        setSpeaking,
        prompt,
        setPrompt,
        response,
        setResponse

    }

  return (
    <div>
        <datacontext.Provider value={value}>
           {children}
        </datacontext.Provider>
    </div>
  )
}

export default UserContext

