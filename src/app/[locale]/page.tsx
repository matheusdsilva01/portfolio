"use client";
import { useEffect } from "react";

import Contact from "@/components/Contact";
import LinksCard from "@/components/LinksCard";
import ProjectsSections from "@/components/ProjectsSections";
import ResumeCard from "@/components/ResumeCard";
import SkillsSections from "@/components/Skills";
import axios from "axios";

function Home() {
  useEffect(() => {
    (async () => {
      if (process.env.NODE_ENV === "development") return;
      try {
        const response = await axios.get("https://ipapi.co/json/");
        const location = Array.from(Object.entries(response.data))
          .map(el => el.join(": "))
          .join(", ");
        await axios.post("/api/location", { location });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
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
  );
}

export default Home;
