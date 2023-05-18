import { useState, useEffect } from "react";
import axios from "../api/axios";
import "../modal.css";
import { useParams } from "react-router-dom"
import moment from 'moment';

const Modal = () =>{
    const {id} = useParams()
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail ] = useState('')
    const [breed, setBreed ] = useState('')
    const [gender, setGender ] = useState('')
    const [color, setColor ] = useState('')
    const [found, setFound ] = useState('')
    const [description, setDescription ] = useState('')

    useEffect(() => {
        const getData = async() =>{
            const res = await axios.get(`http://localhost:8000/foundpet/${id}`)
            const foundPet = res.data[0]
            setName(foundPet.name)
            setPhone(foundPet.phone)
            setEmail(foundPet.email)
            setBreed(foundPet.breed)
            setGender(foundPet.gender)
            setColor(foundPet.color)
            const formattedDate = moment(foundPet.found).format('YYYY/MM/DD')
            setFound(formattedDate)
            setDescription(foundPet.description)
            // console.log(description)
            // console.log(data[0].name)
          }
          getData()
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

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const handleSubmit = (e) =>{
    console.log({name, phone, email, breed, gender, color, found, description})
    axios.put(`http://localhost:8000/foundpet/${id}`,{
        name, phone, email, breed, gender, color, found, description
        // name: data[0].name,
        // phone: data[0].phone,
        // email:data[0].email,
        // breed: data[0].breed,
        // gender: data[0].gender,
        // color: data[0].color,
        // found: data[0].found,
        // description: data[0].description,
    })
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>{name}</p>
            {/* {data.map((d)=>( */}
                <div key={id}>
                  <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                  <input type="text" value={phone}  onChange={(e) => {setPhone(e.target.value)}} />
                  <input type="text" value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
                  <input type="text" value={breed}  onChange={(e) => {setBreed(e.target.value)}}/>
                  <input type="text" value={gender}  onChange={(e) => {setGender(e.target.value)}}/>
                  <input type="text" value={color}  onChange={(e) => {setColor(e.target.value)}}/>
                  <input type="text" value={found}  onChange={(e) => {setFound(e.target.value)}} placeholder="YYYY/MM/DD"/>
                  <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>

                  <button onClick={handleSubmit}>SUBMIT</button>
                </div>
            {/* ))} */}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal