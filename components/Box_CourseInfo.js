import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Box_CourseInfo = () => {
  const router = useRouter()

   return(
    <form class=" mt-3 -w-full max-w-lg">
      <div class = "mx-3 mb-3 font-bold"><h1>Información de la asignatura</h1></div>
  <div class="flex flex-wrap mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Nombre</label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Código</label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">Créditos</label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Area</label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-country">
          <option>Ingeniería</option>
          <option>Humanidades</option>
          <option>Salud</option>
          <option>Venezuela</option>
        </select>
      </div>
    </div>
    <div class="flex items-center justify-between mx-3 mt-8 space-x-10">
        <Popup trigger={<button className="bg-purBlue text-white font-bold py-2 px-6 rounded">Guardar Cambios</button>} closeOnDocumentClick={false} nested>
          <p>¿Desea confirmar los cambios?</p>
          <button class="bg-purBlue text-white font-bold py-2 px-6 mb-2 rounded">Confirmar</button>
          <button class="bg-red text-white font-bold py-2 px-6 rounded" onClick={() => {}}>Cancelar</button>
        </Popup>
        <button class="bg-red text-white font-bold py-2 px-6 rounded" type="button" onClick={() => {close();}}>Cancelar</button>
    </div>
  </div>
</form>
  )
 } 
  export default Box_CourseInfo;