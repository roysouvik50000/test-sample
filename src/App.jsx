import "./App.css";
import reactSvg from "./assets/react.svg";
import profile from "./assets/profile.jpg";
function App() {
  return (
    <>
      <div className="h-m-screen bg-linear-to-bl from-violet-900 to-fuchsia-900 px-5 pt-6 pb-9">
        <h1 className="text-2xl font-medium text-gray-300 italic border-3 w-48 p-2 rounded-xl ml-[10%]">{`< WEB GRID />`}</h1>
        <div className="flex justify-around mt-20 mb-18">
          <h1 className="font-black text-3xl text-stone-900 ">
            HI <br /> I'm Souvik Roy <br /> FRONT-END <br /> WEB <br />{" "}
            DEVELOPER{" "}
          </h1>
          <img src={reactSvg} alt="" width={230} />
        </div>
        <div className="flex flex-wrap justify-around mb-12">
          <img
            src={profile}
            alt="profile"
            width={300}
            className="rounded-4xl"
          />

          <div>
            <ul className="py-7 text-2xl font-medium text-gray-200 list-decimal">
              <h1 className="font-bold underline my-2 text-black/50">TOOLS
              </h1>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>ReactJS</li>
              <li>Redux Toolkit</li>
              <li>Teilwind CSS</li>
              <li>Fairbase</li>
              <li>Famar Motion</li>
              <div>etc.</div>
            </ul>
          </div>
        </div>
      </div>
      <h2 className=" bg-black/50 flex justify-center gap-1.5 text-white py-1.5" >Created By  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>Souvik Roy</h2>
    </>
  );
}

export default App;
