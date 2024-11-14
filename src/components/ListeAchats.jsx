import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supprimerAchat } from '../redux/actions/achatActions';

const ListeAchats = () => {
  const achats = useSelector(state => state.achats);
  const produits = useSelector(state => state.produits);
  const dispatch = useDispatch();

  const handleSupprimer = (numero) => {
    dispatch(supprimerAchat(numero));
  };

  const getProduitDetails = (codeProduit) => {
    return produits.find(produit => produit.codeProduit === codeProduit) || {};
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Liste des achats</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code Produit</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {achats.map(achat => {
              const produit = getProduitDetails(achat.codeProduit);
              const total = produit.prix * achat.qte;
              return (
                <tr key={achat.numero}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achat.codeProduit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.intitule}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achat.qte}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produit.prix}dh</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{total}dh</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => handleSupprimer(achat.numero)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeAchats;