import Pages from "./views/pages";
import { Link } from "react-router-dom";
import { TaskFieldContextProvider } from "./context";
import { useTask } from "./context";
import { selectTopic } from "./types";
import { useState,useEffect } from "react";

const App:React.FC = () => {
  const Task = useTask();
  const [pageTitle, setPageTitle] = useState<selectTopic>({ selectTopic: ""});

  // function movePage(){
  //   switch(pageTitle){
  //     case "Coding": "Coding";
  //   }
  //   if(pageTitle.selectTopic!==""){
  //   const url = window.location;
  //   window.location.replace({url}+"/"+pageTitle);
  //   }
  // }

  useEffect(()=>{
    // movePage();
  },[pageTitle])

  return (
    <>
      <TaskFieldContextProvider>
        <div className="text-sky-300 bg-sky-100 text-center py-5 text-2xl font-bold">
          Task Management For Me
        </div>
        <section className="bg-gray-50">
          <ul className="flex flex-row">
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-green-50 text-green-300"><Link to="/coding" onClick={()=>setPageTitle({selectTopic: "Coding"})}><p className="py-4 w-xl h-16">Coding</p></Link></li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-red-50 text-red-300"><Link to="/plans" onClick={()=>setPageTitle({selectTopic: "Plans"})}><p className="py-4 w-xl h-16">Plans</p></Link></li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-cyan-50 text-cyan-300"><Link to="/kintone" onClick={()=>setPageTitle({selectTopic: "Kintone"})}><p className="py-4 w-xl h-16">Kintone</p></Link></li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-pink-50 text-pink-300"><Link to="/slack" onClick={()=>setPageTitle({selectTopic: "Slack"})}><p className="py-4 w-xl h-16">Slack</p></Link></li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-violet-50 text-violet-300"><Link to="/servermanagement" onClick={()=>setPageTitle({selectTopic: "Servermanagement"})}><p className="py-4 w-xl h-16">Servermanagement</p></Link></li>
            <li className="basis-1/6 text-2xl text-center m-0 hover:bg-yellow-50 text-yellow-300"><Link to="/tips" onClick={()=>setPageTitle({selectTopic: "Tips"})}><p className="py-4 w-xl h-16">Tips</p></Link></li>
            {/* <li className="basis-1/6 text-2xl text-center m-0 hover:bg-red-50 text-black"><Link to="/axios_get" onClick={()=>setPageTitle({selectTopic: "API"})}><p className="py-4 w-xl h-16">API_crud</p></Link></li> */}
          </ul>
        </section>
        <section>
          <Pages />
        </section>
        {/* <footer>
          <ul className="flex flex-row">
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a today</Link></li>
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a week</Link></li>
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a month</Link></li>
          </ul>
        </footer> */}
        <section className="bg-gray-50">
          <ul className="flex flex-row">
            {/* <li className="basis-1/6 text-2xl text-center m-0 hover:bg-green-50 text-green-300"><Link to="/mockread" onClick={()=>setPageTitle({selectTopic: "MockRead"})}><p className="py-4 w-xl h-16">MockRead</p></Link></li> */}
          </ul>
        </section>
      </TaskFieldContextProvider>
    </>
  );
};

export default App;
