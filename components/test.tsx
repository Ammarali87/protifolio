import { useState, useRef } from 'react';


function Test() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  const secondInputRef = useRef<HTMLInputElement>(null);

  const add = () => {
    setCount(count + 1);
    if (secondInputRef.current) {
	}
}; 

console.log('Second Input Value:', secondInputRef.current.value);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="First Input" />
      <input type="text" ref={secondInputRef} placeholder="Second Input with Ref" />
      <button onClick={add}>Increment</button>
      <h1>{user}</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default Test;
