import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (setNumbers) str += "0123456789";
    if (setCharacters) str += "!@#$%^&*()+-_[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, numbers, characters, setPassword]);


  useEffect(() => {
    passwordGenerator()
  },[length,setCharacters,setNumbers,passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  } , [password])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounder-lg px-4 py-6 my-10 text-orange-500 bg-gray-800'>
     <h1 className='text-4xl text-center my-4'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3 my-4'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button className='m-2 bg-zinc-500 p-3 text-black text-lg'
         onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input
           type='range'
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={setNumbers}
          id='numberInput'
          onChange={() => setNumbers((prev) => !(prev)
            )} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={setCharacters}
          id='characterInput'
          onChange={() => setCharacters((prev) => !(prev)
            )} 
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

     </div>
    </>
  )

}



export default App
