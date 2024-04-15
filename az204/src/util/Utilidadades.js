export const ObtenerTiempo = (segundosP) => {
  const valores = []

  const segundos = (Math.round(segundosP % 0x3C))
  const minutos = (Math.floor(segundosP / 0x3C) % 0x3C)
  const horas = (Math.floor(segundosP / 0xE10))

  if (horas) {
    valores.push(horas + ' horas')
  }

  if (minutos) {
    valores.push(minutos + ' minutos')
  }

  valores.push(segundos + ' segundos')

  const formatter = new Intl.ListFormat('es', {
    style: 'long',
    type: 'conjunction'
  })
  return formatter.format(valores)
}
