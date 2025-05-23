"use client";

import React, { useState, useEffect } from 'react';
import Newsletter from '../newsletter/newsletter';
import Test from '../test/test';

const initialData =[
  {
      "id":1,
      "image":"/home-ps.jpeg",
      "heading":"Presidential Summary.",
      "description":"Heads of nations read a summary of the most important news every morning. Now, so will you.",
      "website":"https://www.presidentialsummary.com/",
      "selected":false
  },
  {
      "id":2,
      "image":"/home-gs.jpeg",
      "heading":"Geopolitical Summary.",
      "description":"Fact-checked geopolitics news for diplomats. Read the most impactful geopolitical and international relations stories and visuals are delivered to your inbox six days a week.",
      "website":"https://www.geopoliticalsummary.com/",
      "selected":false
  },
  {
      "id":3,
      "image":"/home-ls.jpeg",
      "heading":"Long and Short.",
      "description":"Insider news for the world of finance. Markets in minutes. Unbiased, fact-checked finance news, 5-minute read.",
      "website":"https://www.longandshort.com/",
      "selected":false
  },
  {
      "id":4,
      "image":"/home-bh.jpeg",
      "heading":"Business History.",
      "description":"Intriguing stories that built (or broke) the greatest businesses.",
      "website":"https://www.businesshistory.co/",
      "selected":false
  }
]

const Newsletters = () => {
  const [inform, setInform] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState({
    ids: [],
    email: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  // // Fetch data on component mount
  // useEffect(() => {
  //   const fetchCards = async () => {
  //     const apiUrl = 'http://localhost:5002/newsletters';
  //     try {
  //       const res = await fetch(apiUrl);
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       console.log("Fetched Data:", data);
  //       setInform(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCards();
  // }, []);

  // Handle adding/removing selected cards
  const handleAdd = (id) => {
    const newArr = inform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el
    );
    setInform(newArr);

    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prevDetails) => ({
      ...prevDetails,
      ids: selectedIds,
    }));
  };

  // Update email and details state
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prevDetails) => ({
      ...prevDetails,
      email: newEmail,
    }));
  };

  // Submit selected data
  const handleSubmit = async () => {
    const dataToSend = { email: details.email, ids: details.ids };
    console.log("Submitting Data:", dataToSend);

    try {
      const apiUrl = '/api/sagravia';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log('Data submitted successfully');
      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  // Close popup and reset state
  const closePopup = () => {
    setShowPopup(false);
    setDetails({ ids: [], email: "" });
    setInform((prevInform) =>
      prevInform.map((el) => ({ ...el, selected: false }))
    );
    setEmail('');
  };

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(inform);
  return (
    <>
      <section className="bg-white lg:px-4 px:0 pt-10 pb-28">
        <div className="container-lg lg:container m-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 ">
            {inform.length > 0 ? (
              inform.map((info) => (
                <div className="transform scale-90 " key={info.id}>
                  <Newsletter  inform={info} handleAdd={handleAdd} />
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </section>
     

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="mt-2">Your response has been sent successfully. We will contact you soon.</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-[#A2845E] text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Test
        count={inform.filter((el) => el.selected).length}
        email={email}
        setEmail={handleEmailChange}
        mHandleSubmit={handleSubmit}
      />
   
    </>
  );
};

export default Newsletters;
