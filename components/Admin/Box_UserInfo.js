import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

const Box_UserInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [roll, setRoll] = useState('');


  // style
  const input_format = 'appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500';
  const label_format = { label_format };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value)
  };

  const handleRoll = (event) => {
    setRoll(event.target.value);
  };


  return (
    <form className=" mt-3 -w-full max-w-lg">
      <div className="mx-3 mb-3 font-bold"><h1>Información del usuario</h1></div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className={label_format} for="grid-first-name">Nombre</label>
          <input onChange={(e) => handleName(e)} value={name} className={input_format} id="grid-name" type="text" placeholder="Jane" />
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className={label_format} for="grid-last-name">Correo electrónico</label>
          <input onChange={(e) => handleEmail(e)} value={email} className={input_format} id="grid-email" type="text" placeholder="Doe" />
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className={label_format} for="grid-city">Ciudad</label>
          <input onChange={(e) => handleCity(e)} value={city} className={input_format} id="grid-city" type="text" placeholder="Albuquerque" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className={label_format} for="grid-state">País</label>
          <div className="relative">
            <select onChange={handleCountry} value={country} className={input_format} id="grid-country">
              <option value="Cuba">Cuba</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Republica Dominicana">Republica Dominicana</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb- md:mb-0">
          <label className={label_format} for="grid-state">Rol</label>
          <div className="relative">
            <select onChange={(e) => handleRoll(e)} value={roll} className={input_format} id="grid-role">
              <option>Administrador</option>
              <option>Estudiante</option>
              <option>Profesor</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between mx-3 mt-8 space-x-10">
          <Popup trigger={<button classNameName="bg-purBlue text-white font-bold py-2 px-6 rounded">Guardar Cambios</button>} closeOnDocumentClick={false} nested>
            <p>¿Desea confirmar los cambios?</p>
            <button className="bg-purBlue text-white font-bold py-2 px-6 mb-2 rounded">Confirmar</button>
            <button className="bg-red text-white font-bold py-2 px-6 rounded" onClick={() => { close() }}>Cancelar</button>
          </Popup>
          <button className="bg-red text-white font-bold py-2 px-6 rounded" type="button" onClick={() => { close() }}>Cancelar</button>
        </div>
      </div>
    </form>
  )
}
export default Box_UserInfo;
