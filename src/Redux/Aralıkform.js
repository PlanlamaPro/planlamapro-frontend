import React from 'react';
import Popup from 'reactjs-popup';

export default function Popupform() {
	return (
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
                            <label className='block text-sm pb-2' htmlFor='time bg-[#54c776]'>Saati giriniz:</label>
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
	)
};
