//import React from 'react';
//import Popup from 'reactjs-popup';
import React, { useState } from "react";

function Form({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, description, time });
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                  Etkinlik Başlığı:
                </label>
                <input
                  id="title"
                  type="text"
                  className="border-gray-400 p-2 w-full"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Etkinlik Açıklaması:
                </label>
                <textarea
                  id="description"
                  className="border-gray-400 p-2 w-full"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                  Etkinlik Saati:
                </label>
                <input
                  id="time"
                  type="time"
                  className="border-gray-400 p-2 w-full"
                  value={time}
                  onChange={handleTimeChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-md text-lg py-2 px-4 mr-2"
                  type="submit"
                >
                  Kaydet
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-md text-lg py-2 px-4"
                  type="button"
                  onClick={onClose}
                >
                  Kapat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopupForm() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <button
          className="bg-[#54c776] pt-2 pb-2 pr-10 pl-10 mb-2 sm:mb-0 rounded-md text-white font-bold text-lg ml-1 mr-1 hover:bg-[#41a65f] transition ease-in-out padding "
          onClick={handleButtonClick} style={{ width: "97%" }}
        >
          Aralık Ekle
        </button>
        {showForm && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div
              className="flex items-center justify-center min-h-screen"
              style={{ backdropFilter: "blur(3px)" }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
                <div className="p-4">
                  <Form onClose={handleClose} onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default PopupForm;

	/*return (
		<div>
            <Popup trigger={<button className="bg-[#54c776] pt-2 pb-2 pr-20 pl-20 mb-2 sm:mb-0 rounded-md text-white font-bold text-lg ml-1 mr-1 hover:bg-[#41a65f] transition ease-in-out ">Aralık Ekle</button>}
            modal nested>
            <main className='h-screen flex items-center justify-center'>
                <form className='bg-white flex rounded-lg w-1-2'>
                    <div className='mt6'>
                    <div className='pb-4'>
                            <label className='block text-sm pb-2 ' htmlFor='name'>Etkinlik başlığı giriniz:</label>
                            <input className='border-2 border-gray-500 p-2 rounded-md w-1-3 bg-white' type="text" name="name"></input>
                        </div>
                        <div className='pb-4'>
                            <label className='block text-sm pb-2 ' htmlFor='name'>Açıklamanızı(varsa) giriniz:</label>
                            <input className='border-2 border-gray-500 p-2 rounded-md w-1-3 bg-white' type="text" name="name"></input>
                        </div>
                        <div className='pb-4'>
                            <label className='block text-sm pb-2' htmlFor='time bg-[#54c776]'> Başlangıç Saatini giriniz:</label>
                            <input className='border-2 border-gray-500 p-2 rounded-md w-1-2' type="time" name="name"></input>
                        </div>
                        <div className='pb-4'>
                            <label className='block text-sm pb-2' htmlFor='time bg-[#54c776]'>Bitiş saatini giriniz:</label>
                            <input className='border-2 border-gray-500 p-2 rounded-md w-1-2' type="time" name="name"></input>
                        </div>
                        <button type='submit' className='bg-[#54c776] text-sm text-white py-3 mt-6 rounded-lg w-full'>Aralık Ekle</button>
                        <div>
                        <button type='submit' className='bg-[#54c776] text-sm text-white py-3 mt-1 rounded-lg w-full'>Kapat</button>
                        </div>
                    </div>
                </form>
            </main>
            
            </Popup>
		</div>
	)*/
//};
