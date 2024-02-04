/*
 * Tapez votre code sous chacun des commentaires.
 * Vous devez faire les exercices dans l'ordre !
 *
 * Si vous rencontrez un bogue, contactez-moi par email à l'adresse
 * jeremy@javascriptdezero.com.
 *
 * Merci et bon courage ! 🤘
 */

// Exercice 0
// Affichez le résultat de l'opération 28 + 6.
console.log(28 + 6);

// Exercice 1
// Affichez le résultat de l'opération 6 * 4 + 2, le tout divisé par 2.
console.log(((6*4)+2)/2);

// Exercice 2
/*
Hugo, le patron de Tom, a besoin de lui pour estimer le coût de sa campagne marketing.

La société MagiciensDuCode a collecté 1337 adresses postales de clients. Hugo a également listé quelques 256 adresses supplémentaires à la main.

Il souhaite faire appel à la société LapinLettre pour envoyer à tous ses clients une lettre promotionnelle. Le coût d'envoi d'une lettre est de 2 € par adresse postale.

Aidez Tom à faire le calcul du prix final que devra payer Hugo pour faire sa campagne marketing.
*/
console.log((1337+256)*2);
// Exercice 3
/*
 Hugo s'était fixé un budget de 3000 €, il cherche donc une autre société pour l'envoi des lettres. Il trouve la société TortueLettre qui facture 1,50 € la lettre.

Vu la grande quantité de lettres à envoyer, la société TortueLettre va facturer en supplément 500 € pour l'approvisionnement en laitue. Hugo n'est plus très sûr de rentrer dans son budget ! Il demande à Tom de faire le calcul...

Aidez Tom à faire le calcul du prix final que devra payer Hugo s'il choisit TortueLettre.
*/
console.log(((1337+256)*1.5)+500);

// Exercice 4
/*
Hugo décide de faire appel au service d'envoi postal chez TortueLettre.

Freddy, le patron de TortueLettre lui indique que c'est bientôt l'été... Pour le bien de ses salariés, les livraisons sont suspendues dès qu'il fait 35°C ou plus.

Hugo demande à Tom de regarder les prévisions météo et de lui dire combien de temps il lui reste pour préparer sa campagne marketing. Tom regarde et la température augmente de 2°C tous les 3 jours.

Aujourd'hui, il fait 23°C.

Aidez Tom à calculer dans combien de jours maximum Hugo devra envoyer ses lettres ?
Cela revient à calculer dans combien de jours on va atteindre ou dépasser les 35°C.
*/
console.log(((35 - 23) / 2) * 3);

// Chassez le bogue 0
// Retirez les commentaires devant le code de Tom pour commencer
// console.log(2350 - (1000 + 2350) * 12 / 100);

// Chassez le bogue 1
// Retirez les commentaires devant le code de Tom pour commencer
// console.log('Montant récolté auprès des 5 investisseurs : 5 x 470 = ' + 15 * 470 + ' €\nMontant récolté auprès de 10 amis : 10 x 100 = ' + 10 * -100 + ' €\nMontant total récolté : 2350 + 1000 = ' + 2350 + ' 1000 €\nBénéfice net (après le prélèvement des taxes) : 2350 - 2350 * 0.12 + 1000 = ' + (2350 - 2350) * 0.12 + 1000 + ' €');
