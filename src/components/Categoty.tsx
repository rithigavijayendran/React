import React, { useState } from 'react';
import { Link } from 'react-router-dom';


type category = {
 category_id : number;
  bmi_id: number;
  category: string;
};
//fetch the user 
export default function Category() {
  const AUTH_TOKEN = '1234567';
  const [category, setcategory] = useState<category>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data submitted');

    fetch('/api/category/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify(category),
    })
      .then((response) => response.json())
      .finally(() => console.log('user created'));
  };

  return (
   
      <form onSubmit={onSubmitData}>
      <div className="flex items-center justify-center h-screen">
  <div className="relative w-full max-w-screen-xl">
    <img className='rounded-xl' src="https://img.freepik.com/free-photo/weights-yellow-background-with-copy-space_23-2148343793.jpg?w=996&t=st=1710180495~exp=1710181095~hmac=5a6661da87bbb901376eb64b1327c1bf4f4632e605849d6e3c9ba9a6e39ad346" alt="hu" width="900px" height="400px" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-7 border border-white rounded-lg flex flex-col items-center justify-center bg-opacity-90 bg-white">
        <p className="text-lg md:text-3xl font-extrabold text-gray-800 mt-16 md:mt-0 tracking-tighter font-serif">"Sweat Now, Shine Later"</p>
        <input type="text" className="p-2 px-4 md:px-8 bg-green-100 border border-gray-500 rounded-xl mt-4 md:mt-8" placeholder="Enter your Category" value={category?.category}
          onChange={(data) => {
            setcategory({
              ...category!,
              category : String(data.target.value),
            });
          }} />
           <Link to ={`/suggestion/get/${category?.category_id}`} >
        <button type="submit" className="px-5 py-2 md:px-8 md:py-3 bg-green-600 hover:bg-green-400 text-white font-bold border border-gray-500 rounded-xl mt-4 md:mt-8 transition duration-300">Give Suggestions</button>
        </Link>
      </div>
    </div>
  </div>
</div>
      </form>
     
  );
}
