import React from "react";
import lostpet2 from '../assets/ui/CARA_PICTURES/lost2.png'
import ReportPets from '../pages/Reportpets';
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import moment from 'moment';

function Lostpetsmore(){

    const [data,setData] = useState([])

    const [date, setDate] = useState('') 
    const {id} = useParams()
    const [finaldate, setFinalDate] = useState('')

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
        const formattedDate = moment(date).format('MM/DD/YYYY');
        setFinalDate(formattedDate)

      }, [date]);

    // const date = format(data.datefound, 'mm/dd/yyyy')
    // console.log(date)

    return(
            <div>
                <div className="grid-rows-2 mt-[50px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
                    <div className="flex ">
                        <div className="w-1/2  h-[100%] my-auto ">
                            <div className='h-full'>
                                <img className="   h-[100%]" src={lostpet2} alt="" />
                            </div>
                        </div>
                       {data.map((pet)=> (
                         <div className="w-1/2 h-[100%] my-auto md:ml-4 ml-4 md:p-5">
                         <h1 className="font-bold text-sm lg:text-xl xl:text-2xl lg:mb-4">Animal ID {id}</h1>
                         <div className=" flex grid-cols-2 text-sm lg:text-md 2xl:mb-6 xl:mb-2 lg:mb-10 md:mb-10 mb-10">
                             <div className="w-1/2 leading-4 md:leading-[50px] text-sm xl:text-xl md:font-bold">
                                <p>Name: </p>
                                <p>Phone:</p>
                                <p>Email:</p>
                                <p>Breed: </p>
                                <p>Sex: </p>
                                <p>Colors: </p>
                                <p>Date Found: </p>
                                <p>Found By: </p>
                                <p>Type of Pet:</p>
                             </div>
     
                             <div className="w-1/2  leading-4 text-sm xl:text-xl  md:font-bold md:leading-[50px]">
                                 <p>{pet.name}</p>
                                 <p>{pet.phone}</p>
                                 <p>{pet.email}</p>
                                 <p>{pet.breed} </p>
                                <p>{pet.gender}</p>
                                <p>{pet.color}</p>
                                <p>{finaldate}</p>
                                <p>{pet.found}</p>
                                <p>{typeofpet}</p>
                             </div>
                        </div>
                        </div> 
                        ))} 
                    </div>
                    
                </div>

                <h1 className='sm:text-2xl md:text-4xl text-2xl font-bold xl:text-6xl text-blue-900  px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] mt-5'>Location Details</h1>
                <div className="grid-rows-2 mt-[10px] md:mt-[20px] px-16 md:px-[50px] lg:px-[150px] xl:px-[200px] ">
                {data.map((pet)=> (
                <div className="flex ">
                    <div className="w-1/2 text-sm leading-4">
                        <p className="font-bold">Shelter Name: <span className="font-normal">{pet.sheltername}</span></p>
                        <br />
                        <br />
                        <p className="font-bold">Shelter Email: <span className="font-normal">{pet.shelteremail}</span></p>
                    </div>
                    <div className="w-1/2 text-sm leading-4">
                        <p className="font-bold">Shelter Address: <span className="font-normal">{pet.shelteraddress}</span></p>
                        <br />
                        <p className="font-bold">Shelter Phone #: <span className="font-normal">{pet.shelternumber}</span></p>
                    </div>
                </div>
                ))} 
                </div>
                <ReportPets/>
                </div>  
    )

}
export default Lostpetsmore