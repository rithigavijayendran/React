import React from 'react'

export default function Choose() {
  return (
<div className="flex items-center justify-center h-screen">
    <div className="relative w-full max-w-screen-xl mt-2">
        <img className="rounded-xl" src="https://img.freepik.com/premium-photo/sneakers-dumbbells-mobile-phone-with-headphones-background-orange-fitness-mat-flat-lay-composition-concept-sport-fitness-healthy-lifestyle-top-view-copy-space_155275-412.jpg?w=1380" alt="Example" width="900px" height="400px" />

        <div className="absolute inset-0  flex items-center justify-center flex-col gap-4">
          <img src="https://media.istockphoto.com/id/1135440686/vector/wellness-people-health-logo-symbol-icon-vector-design.jpg?s=612x612&w=0&k=20&c=sBtKVsSYhHl3xUjQt2MAmXKK80hbUMdO3BdAGpMm8Q4=" alt=" ws" className="w-20 mb-20"/>
            <p className="font-serif text-3xl text-black text-center mb-4">"Life has its ups and downs, we call them squats"</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-3">
                <button className="bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white px-6 py-3 rounded-md mt-2 shadow-2xl mb-4">Know Your BMI</button>
                <button className="bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white px-6 py-3 rounded-md mt-2 shadow-2xl mb-4">Ask Your Health Queries</button>
               
            </div>
        </div>
    </div>
</div>

  )
}
