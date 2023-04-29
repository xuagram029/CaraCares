import React from "react";
import lostpet1 from "../assets/ui/CARA_PICTURES/lost1.png";
import FoundPets from "../pages/FoundPets";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import moment from 'moment';

function Lostpets() {

    const [data,setData] = useState([])

    const [date, setDate] = useState('') 
    const [finaldate, setFinalDate] = useState('')

    useEffect(() => {
        const getLostPet = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/admin-encode`);
            setDate(res.data[0].datefound);
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getLostPet();
      }, []);
      
      useEffect(() => {
        const formattedDate = moment(date).format('MM/DD/YYYY');
        setFinalDate(formattedDate)

      }, [date]);

  return (
    <div>
      <div>
        <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900 text-center mt-8 md:mt-12 ">
          Lost And Found
        </h1>
        <p className="text-sm md:text-l lg:text-xl font-bold xl:text-2xl  text-center">
          Reuniting Lost Pets with Their Families{" "}
        </p>
      </div>
      <div className="px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] xl:mt-[80px] mt-[40px]">
        <div className="flex justify-between">
          <div>
            <select className="text-sm p-[1px] text-neutral-700 md:text-lg border-2 border-solid shadow-xl">
              <option value="Category" hidden>
                Category
              </option>
            </select>
          </div>

          <div>
            <Link
              to="/lostpetsall"
              className="text-xl md:text-2xl lg:text-lg text-blue-900 font-bold"
            >
              See All
            </Link>
          </div>
        </div>
        <div class="relative flex py-2 items-center">
          <span class="text-lg md:text-2xl flex-shrink mx-4 text-gray-400">
            Lost Pets
          </span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="flex flex-row">
        {data.map((pet)=> (
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                className="w-full h-48 object-cover object-center rounded-t-lg"
                src={lostpet1}
                alt=""
              />

              
              <div className="p-4">
                <h1 className="text-gray-900 font-bold text-2xl mb-2">
                  {pet.name}
                </h1>
                <div className="flex flex-row">
                  <div className="w-1/2">
                    <p className="text-gray-700 font-bold mb-2">Breed:</p>
                    <p className="text-gray-700 font-bold mb-2">Sex:</p>
                    <p className="text-gray-700 font-bold mb-2">Colors:</p>
                    <p className="text-gray-700 font-bold mb-2">Date Found:</p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-700 mb-2">{pet.breed}</p>
                    <p className="text-gray-700 mb-2">{pet.gender}</p>
                    <p className="text-gray-700 mb-2">{pet.color}</p>
                    <p className="text-gray-700 mb-2">{finaldate}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to={`/lostpetsmore/${pet.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        
      </div>

      <FoundPets />
    </div>
  );
}
export default Lostpets;
