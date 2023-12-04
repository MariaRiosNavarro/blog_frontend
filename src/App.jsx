import { useRef } from "react";

function App() {
  const passwordref = useRef();

  //FETCH eingebaut dass zu unseren Server geht

  const handleLogin = () => {
    //   fetch("http://localhost:9992/api/auth", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ pass: passwordref.current.value }),
    //   });

    console.log("test");
  };

  return (
    <div className="h-screen bg-blue-300 flex justify-center items-center gap-4">
      <input
        className="border-b-2 p-6 border-red-400 rounded-xl text-2xl"
        type="password"
        ref={passwordref}
      />
      <button
        onClick={handleLogin}
        className="border-b-2 p-5 border rounded-xl  text-blue-600 bolder text-4xl bg-yellow-100"
      >
        login
      </button>
    </div>
  );
}

export default App;
