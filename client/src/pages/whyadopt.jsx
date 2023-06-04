import React from "react";
import adop1 from "../assets/images/step1.png";
import adop2 from "../assets/images/step2.png";
import adop3 from "../assets/images/step3.png";
import adop4 from "../assets/images/step4.png";
function whyadopt(){
    return(
        <div>
<div className=" h-full flex items-center justify-center"> 
<p className="text-gray-500 dark:text-gray-400"></p>
<hr className="w-48 h-1  my-4 bg-rose-100 border-0 rounded md:my-10 dark:bg-rose-400"/>
<p class="text-gray-500 dark:text-gray-400"></p>
<span className="font-bold text-xl mx-5 text-center">Why should you adopt?</span>
<p className="text-gray-500 dark:text-gray-400"></p>
<hr className="w-48 h-1  my-4 bg-rose-100 border-0 rounded md:my-10 dark:bg-rose-400"/>
<p class="text-gray-500 dark:text-gray-400"></p>
</div>

<p className="m-auto text-center xl:w-[1000px] text-rose-500 text-lg font-bold mb-16">Adopting pets is beneficial because it saves lives, offers companionship and emotional support, provides health benefits, teaches responsibility and empathy, builds a stronger community, imparts valuable life lessons to children, and helps alleviate pet overpopulation. It is a fulfilling and rewarding experience that brings joy, love, and a sense of purpose to both the adopter and the adopted animal.</p>

<div className=" h-full flex items-center justify-center"> 
<p className="text-gray-500 dark:text-gray-400"></p>
<hr className="w-48 h-1  my-4 bg-rose-100 border-0 rounded md:my-10 dark:bg-rose-400"/>
<p class="text-gray-500 dark:text-gray-400"></p>
<span className="font-bold text-xl mx-5 text-center">How Adoption Works</span>
<p className="text-gray-500 dark:text-gray-400"></p>
<hr className="w-48 h-1  my-4 bg-rose-100 border-0 rounded md:my-10 dark:bg-rose-400"/>
<p class="text-gray-500 dark:text-gray-400"></p>
</div>
<div className="h-full md:flex items-center grid grid-cols-2 justify-center 2xl:mx-64 md:text-xl text-xs">
        <div className="w-1/2 md:1/4 h-full items-center justify-center font-bold m-auto text-center  ">
            <img className="m-auto " src={adop1} alt="" />
            <p className="md:px-3 m-auto">Find a furry buddy you wish to take home from our listings</p>
        </div>
        <div className="w-1/2 md:1/4 h-full items-center justify-center font-bold m-auto text-center  ">
            <img className="m-auto " src={adop2} alt="" />
            <p className="md:px-3 m-auto">Go through our shelter adoption process and requirements</p>
        </div>
        <div className="w-1/2  md:1/4 h-full items-center justify-center font-bold m-auto text-center  ">
            <img className="m-auto " src={adop3} alt="" />
            <p className="md:px-3 mx-auto">Schedule an appointment with the shelter in your convenient time</p>
        </div>
        <div className="w-1/2 md:1/4 h-full items-center justify-center font-bold m-auto text-center  ">
            <img className="m-auto " src={adop4} alt="" />
            <p className="md:px-3 mx-auto">Visit shelter to meet the selected pet and complete verification procedures</p>
        </div>
        
</div>
</div>
)
}
export default whyadopt