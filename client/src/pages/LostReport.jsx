import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LostReport() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [date, setDate] = useState("");
  const [finaldate, setFinalDate] = useState("");

  const [petname, setPetName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typeofpet, setTypeOfPet] = useState("");
  const [gender, setGender] = useState("Male");
  const [color, setColor] = useState("");
  const [breed, setBreed] = useState("");
  const [lost, setLost] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [ photo, setPhoto ] = useState('')

  const handleFile = (e) => {
    setPhoto(e.target.files[0])
  }
  // http://localhost:8000/lostpet
  const handleSubmit = async (e) => {
    
    const formData = new FormData()
    formData.append('petname', petname)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('typeofpet', typeofpet)
    formData.append('gender', gender)
    formData.append('color', color)
    formData.append('breed', breed)
    formData.append('lost', lost)
    formData.append('description', description)
    formData.append('address', address)
    formData.append('age', age)
    formData.append('ownername', ownername)
    formData.append('image', photo)

    await axios.post("http://localhost:8000/lostpet", formData);
    navigate("/lostpetsall");
  };

  return (
    <div>
      <div className="px-2 md:px-12 lg:px-20 xl:px-32 2xl:px-[500px] ">
        <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900 mt-8 md:mt-12 ">
          Report Lost Pets
        </h1>
        <p className="text-sm md:text-l lg:text-xl xl:text-2xl mt-3 ">
          If you locate a missing pet, kindly fill out the form below and we'll
          do our best to return it to its owner
        </p>

        <div className="border-2 border-solid p-4 md:p-6 lg:p-18 ">
          <h1 className="text-lg md:text-4xl font-bold xl:text-6xl md:mt-10 ">
            Owner Contact Information
          </h1>
          <div className="flex-grow border-t border-gray-400 mb-3"></div>

          <div className="gap-2">
            <div className="">
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                OWNER FULL NAME
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                placeholder="LAST NAME, FIRST NAME, MIDDLE INITIAL"
                value={ownername}
                onChange={(e) => {
                  setOwnerName(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                PHONE NUMBER
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                EMAIL
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="gap-2 mt-4">
          <div className="">
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                OWNER ADDRESS
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                placeholder=""  
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <h1 className="text-lg md:text-4xl font-bold xl:text-6xl mt-6 md:mt-10 ">
            Lost Pet Details
          </h1>
          <div className="flex-grow border-t border-gray-400 mb-3"></div>

          <div className="grid grid-cols-3 gap-2">
          <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                PET NAME
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={petname}
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                TYPE OF PET
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={typeofpet}
                onChange={(e) => {
                  setTypeOfPet(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                PET GENDER
              </label>
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="w-full text-sm shadow-l p-4"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 mb-6">
            <div className="">
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                COLOR/S
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                BREED
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={breed}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                DATE OF LOST
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={lost}
                onChange={(e) => {
                  setLost(e.target.value);
                }}
                placeholder="YYYY/MM/DD"
                id="lost"
              ></input>
            </div>
            <div className="">
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                AGE
              </label>
              <input
                type="text"
                className="w-full text-sm shadow-l p-4"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              ></input>
            </div>

            <div className="">
              <label htmlFor="" className="text-sm text-neutral-500  mt-6">
                Photo of pet
              </label>
              <input
                type="file"
                className="w-full text-sm shadow-l p-4"
                onChange={handleFile}
              ></input>
            </div>
          </div>

          {/* <label htmlFor="" className="text-sm text-neutral-500">PHOTO OF PET</label>   
                    <div className="border-2 border-solid w-full  p-1">
                    <input type="file" />
                    </div> */}

          <div>
            <label htmlFor="" className="text-sm text-neutral-500 block">
              Additional Description/Message
            </label>
            <textarea
              className="border-2 border-solid w-full p-4"
              cols="30"
              rows="5"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
            <div className="text-center">
              <button
                className="bg-blue-900 text-white p-2 w-1/2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LostReport;