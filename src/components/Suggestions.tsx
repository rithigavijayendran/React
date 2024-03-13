import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type suggestions = {
    sug_id: number;
    suggestions:string;
    category_id: number;
    FitnessActivities: string;
    NutritionDiet: string;
    Duration: string;
    Remedies: string;
    Donts: string;
    image: string;
};

export default function Suggestions() {
    const AUTH_TOKEN = "1234567"
    const {id} = useParams();
    const [suggestions, setsuggestions] = useState<suggestions[]>([]);

    useEffect(() => {
        fetch(`/api/suggestion/get/${id}` , {
            method:'GET',
      headers :{
        'content-type':'application/json',
        'Authorization':`Bearer ${AUTH_TOKEN}`,
      }
        })
        .then((response) => response.json())
        .then((data) => setsuggestions(data.results))
        .finally(() => console.log("done"));
  }, [id]);


  return (
    <div className="bg-white h-full  flex items-center justify-center flex-col gap-3 " style={{ backgroundImage:   `url('')` }}>
        <h1 className='text-blue font-bold tracking-tight p-4 px-8 '> </h1>
        {
        suggestions.map((suggestion) => (
           
            <Link to ={`/category/post  ${suggestion.FitnessActivities}`}>
           <div  className='flex items-center flex-col gap-6 justify-center'>
                <img src={suggestion.image} alt="" width={500} height={700} className='mt-4'/>
                <p className=' px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl'>Fitness Activities</p>
                {
                
                suggestion.FitnessActivities
                }
                

                </p>
               <p className='font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Nutrition Diet</p>{suggestion.NutritionDiet}</p>
            <h3 className='px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Remedies</p>{suggestion.Remedies}</h3>
            <p className='px-24 font-serif text-pretty text-lg'><p className=' text-black font-bold text-3xl font-serif'>Dont's</p>{suggestion.Donts}</p>
          </div>
            </Link>
        )
        )}
        
      


      
    </div>
  )
}