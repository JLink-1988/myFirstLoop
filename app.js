let pronoun = ['the','our','your','we','thery'];
let adj = ['ugly','big','small','beautifull','narrow'];
let noun = ['pup','tree','floor','wall','keyboard'];

for (let pindex=0; pindex<pronoun.length; pindex++){
    for (let aindex=0; aindex<adj.length; aindex++){
        for (let nindex=0; nindex<noun.length; nindex++){
            console.log(pronoun[pindex] + adj[aindex] + noun[nindex]+'.com')
        }
    }

}