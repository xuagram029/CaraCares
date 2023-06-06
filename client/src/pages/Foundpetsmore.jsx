import React from "react";
import lostpet2 from "../assets/ui/CARA_PICTURES/lost2.png";
import ReportPets from "../pages/Reportpets";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";

function Lostpetsmore() {
  const [modal, setModal] = useState(false);

  const [data, setData] = useState([]);

  const [date, setDate] = useState("");
  const { id } = useParams();
  const [finaldate, setFinalDate] = useState("");

  const [foundername, setFounderName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [found, setFound] = useState("");
  const [description, setDescription] = useState("");
  const [typeofpet, setTypeOfPet] = useState("");

  useEffect(() => {
    const getFoundPet = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/foundpet/${id}`);
        setDate(res.data[0].datefound);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFoundPet();
  }, [id]);

  useEffect(() => {
    const formattedDate = moment(date).format("YYYY/MM/DD");
    setFinalDate(formattedDate);
  }, [date]);

  // const date = format(data.datefound, 'mm/dd/yyyy')
  // console.log(date)

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8000/foundpet/${id}`);

      const foundpet = res.data[0];
      setFounderName(foundpet.foundername);
      setPhone(foundpet.phone);
      setEmail(foundpet.email);
      setTypeOfPet(foundpet.typeofpet);
      setGender(foundpet.gender);
      setColor(foundpet.color);
      // const formattedDate = moment(shelterencode.found).format("MM/DD/YYYY");
      setFound(foundpet.found);
      // setFoundBy(shelterencode.foundby);
      // setDateFound(shelterencode.datefound)
      setDescription(foundpet.description);
      // setDateFound(formattedDate);

      console.log(res.data);
      // console.log(description)
      // console.log(data[0].name)
    };
    getData();
  }, [id]);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleSubmit = (e) => {
    console.log({
      foundername,
      phone,
      email,
      gender,
      color,
      found,
      description,
      typeofpet,
    });
    axios.put(`http://localhost:8000/foundpet/${id}`, {
      foundername,
      phone,
      email,
      gender,
      color,
      found,
      description,
      typeofpet,
      
    });
    window.location.reload();
    setModal(!modal);
  };

  console.log(id)
  return (
    <div>
      <div className="px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">

          {data.map((pet) => (
            <div key={pet.id} className="flex flex-row justify-center items-center h-1/2 space-x-20">
              <div className="">
              <h1 className="font-bold text-sm text-blue-900 lg:text-xl xl:text-3xl lg:mb-4 text-center pb-4">
                Animal ID {id}
              </h1>
                <img className="h-[400px] pb-4" 
                src={`http://localhost:8000/uploads/${pet.photo}`} 
                alt="" />
              </div>


              <div>
              <button onClick={toggleModal} 
                className="btn-modal mt-0 mb-6 bg-slate-500 hover:bg-neutral-900 hover: text-white font-bold py-1 px-4 rounded-lg shadow-gray-400 shadow-lg tracking-[3px]">
                  Edit
                </button>
              <div className="flex text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10 space-x-6">
                <div className="w-1/2 leading-4 md:leading-[50px] text-sm xl:text-xl md:font-bold">
                  <p>Type of Pet:</p>
                  <p>Gender: </p>
                  <p>Colors: </p>
                  <p>Date Found: </p>
                  <p>Found By: </p>
                  <p>Description: </p>
                </div>

                <div className="w-1/2 leading-4 text-sm xl:text-xl md:font-bold md:leading-[50px]">
                  <p>{pet.typeofpet}</p>
                  <p>{pet.gender}</p>
                  <p>{pet.color}</p>
                  <p>{finaldate}</p>
                  <p className="w-[300px]">{pet.foundername}</p>
                  <p>{pet.description}</p>
                </div>
              </div>
              </div>
            </div>
          ))}

      </div>

      <h1 className="sm:text-2xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900  px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] mt-5">
        Location Details
      </h1>
      <div className="grid-rows-2 mt-[10px] md:mt-[20px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
        {data.map((pet) => (
          <div className="flex ">
            <div className="w-1/2 text-sm leading-4">
              <p className="font-bold">
                Founder Name:{" "}
                <span className="font-normal">{pet.foundername}</span>
              </p>
              <br />
              <br />
              <p className="font-bold">
                Founder Email: <span className="font-normal">{pet.email}</span>
              </p>
            </div>
            <div className="w-1/2 text-sm leading-4">
              <p className="font-bold">
                Founder Phone #:{" "}
                <span className="font-normal">{pet.phone}</span>
              </p>
            </div>
          </div>
        ))}

        {modal && (
          <div className="modal fixed inset-0 z-10 flex items-center justify-centers">
            <div
              onClick={toggleModal}
              className="overlay fixed inset-0 bg-black opacity-50"
            ></div>
            <div className="modal-content bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Update Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="gender">
                    Animal Gender:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    id="gender"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="color">
                    Color:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                    id="color"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="type">
                    Type:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={typeofpet}
                    onChange={(e) => {
                      setTypeOfPet(e.target.value);
                    }}
                    id="type"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="found">
                    Date Found: {moment(data[0].found).format("YYYY/MM/DD")}
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="date"
                    value={found}
                    onChange={(e) => {
                      setFound(e.target.value);
                    }}
                    placeholder="YYYY/MM/DD"
                    id="found"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="found">
                    Description:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    id="description"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="name">
                    Founder Name:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={foundername}
                    onChange={(e) => {
                      setFounderName(e.target.value);
                    }}
                    id="name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="gender">
                    Founder Contact No.:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="gender">
                    Founder Email:
                  </label>
                  <input
                    className="w-full border border-gray-400 p-2 rounded"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                  />
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <ReportPets />
    </div>
  );
}
export default Lostpetsmore;