function lerSensor(nome) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), 1000)
  })
}

async function lerTodos() {
  const sensores = ['acelerômetro', 'giroscópio', 'proximidade']
  for (const nome of sensores) {
    const valor = await lerSensor(nome)
    console.log(`${nome}: ${valor}`)
  }
  console.log('Leitura concluída.')
}

lerTodos()