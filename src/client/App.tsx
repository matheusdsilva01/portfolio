import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import axios from "axios";

import Contact from "./components/Contact";
import LinksCard from "./components/LinksCard";
import ProjectsSections from "./components/ProjectsSections";
import ResumeCard from "./components/ResumeCard";
import SkillsSections from "./components/Skills";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    (async () => {
      const response = await axios.get("https://ipapi.co/json/");
      const loc = Array.from(Object.entries(response.data))
        .map(el => el.join(": "))
        .join(", ");
      await axios.post("/location", { location: loc });
    })();
  }, []);
  return (
    <>
      <div className="m-auto min-h-screen max-w-screen-2xl space-y-5 p-3 text-2xl text-primary-900 md:p-10">
        <div className="flex h-96 w-full flex-col justify-between bg-primary-50 md:flex-row">
          <ResumeCard />
          <LinksCard />
        </div>
        <div className="space-y-5">
          <SkillsSections />
          <ProjectsSections />
          <Contact />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
