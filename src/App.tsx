import LinksCard from "components/LinksCard";
import ProjectsSections from "components/ProjectsSections";
import ResumeCard from "components/ResumeCard";
import Skills from "components/Skills";

function App() {
  return (
    <div className="m-auto min-h-screen max-w-screen-2xl space-y-5 p-3 text-2xl text-primary-900 md:p-10">
      <div className="flex h-96 w-full flex-col justify-between bg-primary-50 md:flex-row">
        <ResumeCard />
        <LinksCard />
      </div>
      <div className="space-y-5">
        <Skills />
        <ProjectsSections />
      </div>
    </div>
  );
}

export default App;
