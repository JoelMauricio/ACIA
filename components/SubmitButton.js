import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const SubmitButton = ({form}) => (
  <Popup trigger={<button className=" bg-purBlue text-white font-bold py-2 px-6 rounded" type="button" position="bottom center"> Guardar Cambios </button>}closeOnDocumentClick={false} modal>
    {close => (
      <div className="modal">
        <div className="header font-bold mb-2"> Confimar Cambios </div>
        <div className="content">{'¿Desea confirmar los cambios? '}</div>
        <div className="actions flex items-center mt-4 space-x-10">
        <button type="submit">Submit</button>
        <button className="bg-purBlue text-white font-bold py-2 px-6 mb-2 rounded" type="button" onClick={() => {document.forms["tForm2"].submit();}}> Sí</button>
        <button className="bg-red text-white font-bold py-2 px-6 rounded" type="button" onClick={() => {close();}}> No </button>
        </div>
      </div>
    )}
  </Popup>
  );

export default SubmitButton;
