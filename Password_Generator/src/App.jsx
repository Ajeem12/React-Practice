import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+=-[]{}`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    // passwordRef.current.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500
       bg-gray-800"
      >
        <h1 className=" text-white text-center my-3">Password generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" outline-none bg-blue-500  text-white px-3 py-0.5 shrink-0 focus:ring-1 focus:ring-blue-300"
          >
            Copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
