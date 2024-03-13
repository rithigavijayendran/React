import React, { useState } from 'react';
import {  useAuth0 } from '@auth0/auth0-react'

type Bmi = {
  user_id: number;
  bmi_id: number;
  height: number;
  weight: number;
  bmivalue?: number;
  category?: string;
};

export default function UserDetails() {
  const AUTH_TOKEN = '1234567';
  const [token, setToken] = useState<string>('') 
  const { user, getAccessTokenSilently } = useAuth0()
  const [bmi, setBmi] = useState<Bmi>({
    user_id: 0,
    bmi_id: 0,
    height: 0,
    weight: 0,
  });
  const calculateBMI = () => {
    const { height, weight } = bmi;
    const Height = Number(height);
    const Weight = Number(weight);

    if (height && weight) {
      const bmivalue = weight / Math.pow(height / 100, 2);
      const bmivalueAsNumber = Number(bmivalue);
      let category;
      if (bmivalue < 18.5) {
        category = 'Underweight';
      } else if (bmivalue < 24.9) {
        category = 'Normal Weight';
      } else if (bmivalue < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }

      setBmi({
        ...bmi,
        bmivalue: bmivalueAsNumber,
        category: category,
      });
    }
  };

  const onSubmitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateBMI();
    console.log('data submitted');
    if (bmi.category) {
      console.log('BMI Category:', bmi.category);
    }
    fetch('/api/post-bmi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        user_id: bmi.user_id,
        bmi_id: bmi.bmi_id,
        height: bmi.height,
        weight: bmi.weight,
        bmivalue: bmi.bmivalue,
      }),
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="relative w-full max-w-screen-xl">
    <form onSubmit={onSubmitData}>
      
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcq2DB1Z-i8FDbfEAoZ0gCyyOutajATkRJw&usqp=CAU"
            className="h-full w-full object-cover"
            alt="background"
          />
          <div className="absolute inset-0  flex items-center justify-center flex-col gap-4  mt-6  h-24">
            <div className="border-solid border-1 p-10  border-white rounded-lg flex items-center justify-center  flex-col mt-96 ">
              <div className="flex items-center justify-center flex-col mt-8">
              <p className=' text-white font-medium  font-serif text-lg tracking-tight mb-2'>Welcome {user?.name}</p> 
      <p>{token}</p>
      <button className='  text-white font-medium  font-serif text-lg tracking-tight'  onClick={async () => {
        const token = await getAccessTokenSilently()
        setToken(token)
      }}>Get Token</button>
                <p className=" text-3xl font-extrabold font-sans text-amber-800">
                  Calculate your BMI
                </p>
                <div className="flex flex-col items-center gap-6 mb-6 p-8">
                  <input
                    type="text"
                    className="px-8 py-2 w-80 bg-red-100 rounded-lg"
                    placeholder="What's your Height?"
                    value={bmi?.height || ''}
                    onChange={(data) => {
                      setBmi({
                        ...bmi,
                        height: parseInt(data.target.value),
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="px-8 py-2 w-80 bg-red-100 rounded-lg"
                    placeholder="What's your Weight?"
                    value={bmi?.weight || ''}
                    onChange={(data) => {
                      setBmi({
                        ...bmi,
                        weight: parseInt(data.target.value),
                      });
                    }}
                  />
             
                    <button className="bg-black text-white rounded-lg px-3 py-2 w-60 items-center tracking-tighter font-bold text-xl">
                      Calculate
                    </button>
                    {bmi?.bmivalue !== undefined && (
          <div className='flex items-center p-3 flex-col gap-3'>
            <input
              className='px-8 py-2 w-80 bg-red-100 rounded-lg'
              value={`BMI Value: ${bmi?.bmivalue}`}
            />
            <p className='px-8 py-2 w-80 bg-red-100 rounded-lg'>Category: {bmi?.category}</p>
          </div>
        )}
                
                 
                </div>
              </div>
            </div>
          
            </div>
    </form>

        </div>
    </div>
    
 
  );
}
