const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for(i = 0; i < filmes.length; i++){
  console.log(`Titulo: ${String(filmes[i].titulo)}, de ${String(filmes[i].ano)}, dirigido por ${String(filmes[i].diretor)}\n`)

    for(j = 0; j < filmes[i].elenco.length; j++){
      console.log(`Tem no elenco: ${filmes[i].elenco}\n`)
    }
};
console.log("-----------------------------------------")
for(let prop in filmes){
  console.log(`Titulo: ${String(filmes[prop].titulo)}, de ${String(filmes[prop].ano)}, dirigido por ${String(filmes[prop].diretor)}\n`)
  
  for(valor of filmes){
    console.log(`Tem no elenco: ${filmes[prop].elenco}\n`)
  }
};