"use client";

import React, { useState, useEffect } from 'react';
import Newsletter from '../newsletter/newsletter';
import Test from '../test/test';

const initialData =[
  {
      "id":1,
      "image":"https://media-hosting.imagekit.io//6ab9e7d90b9143a0/w-ps.jpeg?Expires=1830959294&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iZqaecUrmopiCR3WH5M-qgiwQJ1zoqYYclmZlAAoq7NdN9X4MPPZ8QvAqtmZLH5ZkPZ9TXa67p4IX6Bd2~qGSQROOoLjV~OkTNhhwqMygt6HfNXlsa6U7R0aV9zpkPqHcOo1bzGYiX9llKa6BhtyP6-qX8Y8ud4-whLlS1CD1wHWKPpXZgG2L1tKa~NszRYRD3rIti4ALQA87vi8VxyhVuW71GwFSiy92BwKGiZrqF2n66GIY2W-3560~I1dlZHL0AItuvG4petf3hABl4Rndv6rAE6YkQ-vttJ2bJZyDvOC6ff7H0256PAQsyyXJLjNFPPm1Kn1psWyLPlHDXZZqQ__",
      "heading":"Presidential Summary.",
      "description":"Heads of nations read a summary of the most important news every morning. Now, so will you.",
      "website":"https://www.presidentialsummary.com/",
      "selected":false
  },
  {
      "id":2,
      "image":"https://media-hosting.imagekit.io//6a9e2118139444f5/w-gs.jpeg?Expires=1830959342&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aGWn~NriQ0SE0FlnpyF9CUiA21j5mfpuXtAJXZeip9DM9qOF1Rpt~FU6V1~405hJ1KJG7gbFvS314Y8N74vnLZguI~jKjBlnHAOjDZEMPiAmL-3eQd39sV4E-qxIUWZFB6qzPNDCv~yUkbfQFA~~WVlV41uA9d8Hj8I7CMKa59mpKkaQYu9Ru2Wik-35-3gRUR4I8cgfvkrAHn3axog7B7du-6md8Nnrn-nUHH642PHhnGFFyvgOh6HnmX7t7avno84~zaxv0cVP5tu4KG-2yEzhF4~LYElxAlMnJRMznXqUYWYIniC2rp5u6a96pLYOLP1hwYTYcEFQPyNnLL-0LA__",
      "heading":"Geopolitical Summary.",
      "description":"Fact-checked geopolitics news for diplomats. Read the most impactful geopolitical and international relations stories and visuals are delivered to your inbox six days a week.",
      "website":"https://www.geopoliticalsummary.com/",
      "selected":false
  },
  {
      "id":3,
      "image":"https://media-hosting.imagekit.io//bcf576321c59449d/w-ls.jpeg?Expires=1830959247&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nJXczO304nC~wHg3XN3i9KEzDu2DsZ0GJAnhEXxqlhHGrLfIC4VVxLRKnsxFVHxdtrBavQuXXboQ5AJUp0iqN0J353QBY7MSWPhpV431-qKb6FGUYOWsiXGku2s2x8R4uolpsaV28HF2-DGAC0x5P4Z9YttRSwa1ojMlcuy6gRYgzARGBrL6F84iRJnAJqzrEPZ76NXYcNBeocFBCtNck1yMuAAiJVLoPUHlBBQqIUY9G8D~yaBcHomk2IfK5SCk1w5taoHGBWLm0jZlV0yEeLiEVpqCv6-sjLGnMB9x6QXj27Kx9lUqS-z-rlpVQPeeE~QO7MenPhtWnN2Fb8Aryg__",
      "heading":"Long and Short.",
      "description":"Insider news for the world of finance. Markets in minutes. Unbiased, fact-checked finance news, 5-minute read.",
      "website":"https://www.longandshort.com/",
      "selected":false
  },
  {
      "id":4,
      "image":"https://media-hosting.imagekit.io//3d46c5f2b78c45d3/w-bh.jpeg?Expires=1830959144&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W-AlcMM8FNBE7q~r898pMlIeQgdEmQzkklYkVF4ho5h2k8fVU9OCPDs5lg1chsg1X7a3Zmif6Zy-022jU1oEXEld0RI0rpNVnPooXhcGR7cY7VOflrgzzVeooX6TkDHnv6CAuEUB4ilKR4RsmPtX4wPz~KsBGHcjgV4xAHb-LTSuxX8bJPZSDPsuyGDwjb8NOahqCneWw3tT-9-6dB1zRu-CgbUnIYMNadDPOFNRquGSgu02pjSaLsj~SD8BechxiSQlcH44vXETEYkxFb72zeDI5P2FzAThboSQnwawivxPPUemrG0G2TTh9Mgrq~PG1YYyk6ohiIWbP3FnZcs1uA__",
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
      <section className="bg-white px-4 pt-10 pb-28">
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
