import './App.css'
import Header from './components/Header.jsx'
import TeachingSection from "./components/TeachingSection.jsx"
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";




function App() {
    const [tab, setTab] = useState('feedback')


  return (
    <>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>


        {tab === 'feedback' && <>
            <FeedbackSection></FeedbackSection>
            <IntroSection></IntroSection>
        </>}

        {tab === 'main' && <>
            <TeachingSection></TeachingSection>
            <Header></Header>
        </>}




    </>
  )
}

export default App