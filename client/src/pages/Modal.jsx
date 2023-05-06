import { useState, useEffect } from "react";
import axios from "../api/axios";
import "../modal.css";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";

const Modal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [found, setFound] = useState("");
  const [description, setDescription] = useState("");
  const [typeofpet, setTypeOfPet] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8000/foundpet/${id}`);

      const foundPet = res.data[0];
      setName(foundPet.name);
      setPhone(foundPet.phone);
      setEmail(foundPet.email);
      setBreed(foundPet.breed);
      setGender(foundPet.gender);
      setColor(foundPet.color);
      const formattedDate = moment(foundPet.found).format("YYYY/MM/DD");
      setFound(formattedDate);
      setDescription(foundPet.description);
      setTypeOfPet(foundPet.typeofpet);
      // console.log(description)
      // console.log(data[0].name)
    };
    getData();
  }, [id]);

  // console.log(phone)
  // useEffect(() => {
  //     const getCreds = async() =>{
  //       if(data){
  //         setName(data[0].name)
  //         setPhone(data[0].phone)
  //         setEmail(data[0].email)
  //         setBreed(data[0].breed)
  //         setGender(data[0].gender)
  //         setColor(data[0].color)
  //         setFound(data[0].found)
  //         setDescription(data[0].description)
  //       }
  //         // console.log(description)
  //         // console.log(data[0].name)
  //       }
  //       getCreds()
  //     }, [data]);

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
      name,
      phone,
      email,
      breed,
      gender,
      color,
      found,
      description,
      typeofpet,
    });
    axios.put(`http://localhost:8000/foundpet/${id}`, {
      name,
      phone,
      email,
      breed,
      gender,
      color,
      found,
      description,
      typeofpet,
    });
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

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
                <label className="block font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="phone">
                  Phone:
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
                <label className="block font-bold mb-2" htmlFor="email">
                  Email:
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
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="breed">
                  Breed:
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded"
                  type="text"
                  value={breed}
                  onChange={(e) => {
                    setBreed(e.target.value);
                  }}
                  id="breed"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="gender">
                  Gender:
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
                <label className="block font-bold mb-2" htmlFor="found">
                  Found:
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded"
                  type="text"
                  value={found}
                  onChange={(e) => {
                    setFound(e.target.value);
                  }}
                  placeholder="YYYY/MM/DD"
                  id="found"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="description">
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
                <label className="block font-bold mb-2" htmlFor="typeofpet">
                  Type of Pet:
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded"
                  type="text"
                  value={typeofpet}
                  onChange={(e) => {
                    setTypeOfPet(e.target.value);
                  }}
                  id="typeofpet"
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
    </>
  );
};

export default Modal;
