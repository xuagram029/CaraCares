import React, { useEffect, useState } from 'react';
import Max from '../assets/ui/CARA_PICTURES/dogs/MAX.jpg'
import Blackie from '../assets/ui/CARA_PICTURES/dogs/BLACKIE.png'
import axios from 'axios';
import { Link } from 'react-router-dom'

const PetsForAdoption = () => {
    
    const [availablePets, setAvailablePets] = useState([])
    useEffect(() => {
        const getAvailablePets = async() => {
            try {
                const res = await axios('http://localhost:8000/admin-encode/available')
                console.log(res.data);
                setAvailablePets(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAvailablePets()
    }, [])
//   const pets = [
//     {
//       id: 1,
//       name: 'Max',
//       species: 'Cat',
//       age: 2,
//       description: 'A playful and friendly cat looking for a loving home.',
//       image: Max,
//     },
//     {
//       id: 2,
//       name: 'Blackie',
//       species: 'Dog',
//       age: 3,
//       description: 'An energetic and loyal dog in need of an active family.',
//       image: Blackie,
//     },
//     {
//         id: 3,
//         name: 'Blackie',
//         species: 'Dog',
//         age: 3,
//         description: 'An energetic and loyal dog in need of an active family.',
//         image: Blackie,
//       },
//       {
//         id: 4,
//         name: 'Blackie',
//         species: 'Dog',
//         age: 3,
//         description: 'An energetic and loyal dog in need of an active family.',
//         image: Blackie,
//       },
//       {
//         id: 5,
//         name: 'Blackie',
//         species: 'Dog',
//         age: 3,
//         description: 'An energetic and loyal dog in need of an active family.',
//         image: Blackie,
//       },
//     // Add more pet objects as needed
//   ];

  return (
    <div className='m-6 bg-slate-300 p-12'>
        <h1 className='text-center text-4xl font-semibold m-12'>PETS FOR ADOPTION</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
      {availablePets.map((pet) => (
        <div
          key={pet.id}
          className="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between"
        >
          <img
            className="w-[300px] h-[300px] object-cover mb-4 rounded-lg"
            src={`http://localhost:8000/uploads/${pet.photo}`}
            alt={pet.name}
          />
          <div>
            <h2 className="text-lg font-bold mb-2 text-center p-2">{pet.name}</h2>
            <p className="text-gray-600 mb-2">
              {pet.type} - {pet.age} years old
            </p>
            <p className="text-gray-800">{pet.gender}</p>
          </div>
          <Link to="/adopt-a-pet">
          <button className="bg-rose-600 border-2 text-white hover:bg-white hover:text-rose-600 hover:border-rose-600 hover:border-2 py-2 px-4 rounded w-1/2 mx-auto m-4">
            Adopt Me
          </button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PetsForAdoption