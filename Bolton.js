import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Navbar';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTx_3eqVT0URoasobI1DDcsezpu5AYkiI",
  authDomain: "crm-backend-cabb3.firebaseapp.com",
  databaseURL: "https://crm-backend-cabb3-default-rtdb.firebaseio.com",
  projectId: "crm-backend-cabb3",
  storageBucket: "crm-backend-cabb3.appspot.com",
  messagingSenderId: "797388480962",
  appId: "1:797388480962:web:2dfce140d39330eb6bf65b",
  measurementId: "G-RY90BSPDV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Move the database reference here

export default function Rota() {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleSiteButtonClick = (site) => {
    // Use navigate to navigate to the desired route
    navigate(`/${site.toLowerCase()}`);
  };
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Set up a listener to fetch the data from the "ContactForm" reference
    const dataRef = ref(database, 'ContactForm');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const formDataArray = [];
      snapshot.forEach((childSnapshot) => {
        // Convert the childSnapshot to an object
        const formData = childSnapshot.val();
        formDataArray.push(formData);
      });
      setFormDataList(formDataArray);
    });

    // Clean up the listener when the component unmounts
    return () => {
      // Detach the listener
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id='SiteButton'>
        <button  onClick={() => handleSiteButtonClick('rota')}>
          Leyland
        </button>
        <button onClick={() => handleSiteButtonClick('Manchester')}>Manchester</button>
        <button onClick={() => handleSiteButtonClick('Rochdale')}>Rochdale</button>
        <button className='leyland' onClick={() => handleSiteButtonClick('Bolton')}>Bolton</button>
      </div>
      <div>
        <h1 className='profileData'></h1>
        {formDataList.length === 0 ? (
          <p>No Profile Data Available</p>
        ) : (
          <table>
            <thead>
              <tr>
             
              <th>Profile Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Transport id</th>
                <th>Site</th>
            
              </tr>
            </thead>
            <tbody>
              {formDataList.map((formData, index) => {
                // Calculate the number of days from the joining date till today
                const joiningDate = new Date(formData.dataofjoining);
                const today = new Date();
                const timeDifference = today.getTime() - joiningDate.getTime();
                const daysSinceJoining = Math.ceil(timeDifference / (1000 * 3600 * 24));

                return (
                  <tr key={index}>
                      <td>
                      {formData.image && (
                        <img
                          src={formData.image}
                          alt="Profile"
                          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                        />
                      )}
                    </td>
                     <td>{formData.transportId}</td>
                       <td>{formData.firstName}</td>
                    <td>{formData.lastName}</td>
                    <td>{formData.site}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
