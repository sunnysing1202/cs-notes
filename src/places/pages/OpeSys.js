import React from 'react'
import NavigationMob from "../../shared/components/Navigation/NavigationMob";
import SubHeader from "../../shared/components/SubjectsHeader/SubHeader";
import DwnNts from "../../shared/components/DownloadNotes/DwnNts";
import DwnQs from "../../shared/components/DownloadQuestions/DwnQs";
import Footer from "../../shared/components/Footer/Footer";

const OpeSys = () => {
  return (
    <>
            <NavigationMob />

            <SubHeader />
            <h1>Operating System</h1>
		<DwnNts />
		<DwnQs />
            <Footer />
        </>
  )
}

export default OpeSys