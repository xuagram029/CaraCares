import React from "react";
import lostpet2 from "../assets/ui/CARA_PICTURES/lost2.png";
import ReportPets from "../pages/Reportpets";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

function Foundpetsall() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [finaldate, setFinalDate] = useState("");

  useEffect(() => {
    const getLostPet = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/foundpet`);
        setDate(res.data[0].datefound);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLostPet();
  }, []);

  useEffect(() => {
    const formattedDate = moment(date).format("YYYY/MM/DD");
    setFinalDate(formattedDate);
  }, [date]);

  return (
    <div className="mb-[30px]">
      <div className="px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] xl:mt-[80px] mt-[40px]">
        <select className="text-sm p-[1px] text-neutral-700 md:text-lg border-2 border-solid shadow-xl">
          <option value="Category" hidden>
            Category
          </option>
        </select>

        <div class="relative flex py-2 items-center">
          <span class="text-lg md:text-2xl flex-shrink mx-4 text-gray-400">
            Found Pets
          </span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="flex flex-row flex-wrap  p-12">
          {data.map((pet) => (
            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
              <div className="bg-white rounded-lg shadow-lg">
                <img
                  className="w-full h-48 object-cover object-center rounded-t-lg"
                  src={lostpet2}
                  alt=""
                />

                <div className="p-4">
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <p className="text-gray-700 font-bold mb-2">
                        Pet Gender:
                      </p>
                      <p className="text-gray-700 font-bold mb-2">Colors:</p>
                      <p className="text-gray-700 font-bold mb-2">
                        Date Found:
                      </p>
                      <p className="text-gray-700 font-bold mb-2">Founder:</p>
                    </div>
                    <div className="w-1/2">
                      <p className="text-gray-700 mb-2">{pet.gender}</p>
                      <p className="text-gray-700 mb-2">{pet.color}</p>
                      <p className="text-gray-700 mb-2">
                        {moment(pet.found).format("YYYY/MM/DD")}
                      </p>
                      <p>{pet.foundername}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to={`/foundpetsmore/${pet.id}`}>
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
      <ReportPets />
    </div>
  );
}
export default Foundpetsall;
