import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajouterAchat } from '../redux/actions/achatActions';

function AchatForm () {
  const [codeProduit, setCodeProduit] = useState('');
  const [numero,setnumero] = useState('')
  const [qte, setQte] = useState('');
  const dispatch = useDispatch();
  const produits = useSelector(state => state.produits);
  const clients = useSelector(state => state.clients);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ajouterAchat({numero, codeProduit, qte: parseInt(qte) }));
    setnumero('')
    setCodeProduit('');
    setQte('');
  };

  return (
    <form onSubmit={handleSubmit}   className="space-y-4 p-4 bg-white shadow rounded-lg max-w-md mx-auto">
        <div>
        <label htmlFor="client" className="block text-sm font-medium text-gray-700">client</label>
        <select 
          id="client"
          value={numero} 
          onChange={(e) => setnumero(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Sélectionnez un client</option>
          {clients.map(client => (
            <option key={client.codeclient} value={client.numero}>
              {client.nom} {client.prenom}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="produit" className="block text-sm font-medium text-gray-700">Produit</label>
        <select 
          id="produit"
          value={codeProduit} 
          onChange={(e) => setCodeProduit(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Sélectionnez un produit</option>
          {produits.map(produit => (
            <option key={produit.codeProduit} value={produit.codeProduit}>
              {produit.intitule}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantite" className="block text-sm font-medium text-gray-700">Quantité</label>
        <input 
          type="number" 
          id="quantite"
          value={qte} 
          onChange={(e) => setQte(e.target.value)} 
          placeholder="Quantité" 
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button 
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Ajouter l'achat
      </button>
    </form>
  );
};

export default AchatForm;