import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Rota() {
  const navigate = useNavigate();
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, 'ContactForm');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const formDataArray = [];
      snapshot.forEach((childSnapshot) => {
        const formData = childSnapshot.val();
        formDataArray.push(formData);
      });
      setFormDataList(formDataArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSiteButtonClick = (site) => {
    navigate(`/${site.toLowerCase()}`);
  };

  return (
    <>
      <Navbar />
      <div id='SiteButton'>
        <button onClick={() => handleSiteButtonClick('rota')}>Leyland</button>
        <button className='leyland' onClick={() => handleSiteButtonClick('Manchester')}>
          DXM2 - Manchester
        </button>
        <button onClick={() => handleSiteButtonClick('Rochdale')}>Rochdale</button>
        <button onClick={() => handleSiteButtonClick('Bolton')}>Bolton</button>
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
