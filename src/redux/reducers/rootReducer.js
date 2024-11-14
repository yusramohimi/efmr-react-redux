const initialState = {
    clients: [{ numero: '1' , nom: 'N1' , prenom: 'P1'}],
    produits: [
        {codeProduit: '1' , intitule: 'Produit1' , prix: 10},
        {codeProduit: '2' , intitule: 'Produit2' , prix: 20},
        {codeProduit: '3' , intitule: 'Produit3' , prix: 30},
    ],
    achats: [{numero: '1' , codeProduit: '1' , qte: 5}],
    achatsFilters: []
};
function rootReducer(state = initialState , action){
    switch (action.type){
        case 'AJOUTER_ACHAT':
            return{...state ,achats: [...state.achats , {...action.payload , numero: (state.achats.length + 1).toString()}]}

        case 'SUPPRIMER_ACHAT':
            return{...state , achats: state.achats.filter(achat=> achat.numero !== action.payload)}

        case 'FILTRER_ACHAT':
            return{...state , achatsFilters: state.achats.filter(achat=>achat.numero === action.payload)}

        default:
            return state
    }
}
export default rootReducer;