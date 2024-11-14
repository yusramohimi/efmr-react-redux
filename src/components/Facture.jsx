import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Facture = () => {
  const [numeroClient, setNumeroClient] = useState('');
  const [error, setError] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const clients = useSelector(state => state.clients);
  const achats = useSelector(state => state.achats);
  const produits = useSelector(state => state.produits);

  const getProduitByCode = (code) => {
    return produits.find(produit => produit.codeProduit === code) || {};
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = clients.find(client => client.numero === numeroClient);
    if (!client) {
      setError('Client non trouvé');
      setShowDetails(false);
    } else {
      setError('');
      setShowDetails(true);
    }
  };

  const achatsClient = achats.filter(achat => achat.numero === numeroClient);

  const total = achatsClient.reduce((acc, achat) => {
    const produit = getProduitByCode(achat.codeProduit);
    return acc + (produit.prix * achat.qte);
  }, 0);

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Facture</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={numeroClient}
          onChange={(e) => setNumeroClient(e.target.value)}
          placeholder="Numéro du client"
          className="mr-2 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Afficher la facture
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {showDetails && !error && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Détails du client</h3>
          <p>Nom: {clients.find(client => client.numero === numeroClient)?.nom}</p>
          <p>Prénom: {clients.find(client => client.numero === numeroClient)?.prenom}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Achats</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code Produit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {achatsClient.map(achat => {
                const produit = getProduitByCode(achat.codeProduit);
                const total = produit.prix * achat.qte;
                return (
                  <tr key={achat.codeProduit}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achat.codeProduit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{produit.intitule}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achat.qte}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{produit.prix}dh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{total}dh</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-4 text-xl font-bold">Total: {total}dh</p>
        </div>
      )}
    </div>
  );
};

export default Facture;