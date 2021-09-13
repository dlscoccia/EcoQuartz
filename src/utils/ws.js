const whatsAppMessage = (cart) => {
  let items = []
  for (const item of cart) {
      const info = [item.name, item.qty]
      items.push(info)
  }        
  let text = 'Gracias por tu pedido de: ' + items.join('; ')
  const regex = /,/ig;
  const newText = text.replaceAll(regex, 'x');
  const finalRegex = / /ig;
  const parsedText = newText.replaceAll(finalRegex, '%20');
  return parsedText
}

export default whatsAppMessage