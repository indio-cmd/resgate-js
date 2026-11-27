const aparelhos = [
  { modelo: 'Galaxy A55', so: 'Android', preco: 2299, sensores: ['acelerômetro', 'giroscópio', 'NFC', 'impressão digital'] },
  { modelo: 'iPhone 15', so: 'iOS', preco: 5999, sensores: ['acelerômetro', 'LiDAR', 'barômetro', 'Face ID'] },
  { modelo: 'Moto G85', so: 'Android', preco: 1499, sensores: ['acelerômetro', 'proximidade', 'luz ambiente'] },
  { modelo: 'Redmi Note 13', so: 'Android', preco: 1399, sensores: ['infravermelho', 'acelerômetro', 'giroscópio'] },
];

const modelosAndroid = aparelhos.filter(aparelho => aparelho.so === 'Android');
console.log('Modelos Android:', modelosAndroid);



const modelosIOS = aparelhos.filter(aparelho => aparelho.so === 'iOS');
console.log('Modelos iOS:', modelosIOS);

const comLidar = aparelhos.find((item) => item.sensores.includes('LiDAR'))
console.log(comLidar)

const precofiltrar = aparelhos.filter(aparelho => aparelho.preco < 2000);
console.log("Menos de $2000", precofiltrar)



