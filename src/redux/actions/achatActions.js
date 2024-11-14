export function ajouterAchat (achat){
    return (
        {
            type : 'AJOUTER_ACHAT',
            payload: achat
        }
    )
}

export function supprimerAchat(numero){
    return (
        {
            type: 'SUPPRIMER_ACHAT',
            payload: numero
        }
    )
}

export function filtrerAchats(numeroClient){
    return(
        {
            type: 'FILTRER_ACHAT',
            payload: numeroClient
        }
    )
}