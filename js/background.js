const images =[
  "1.jpg", "2.jpg", "3.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img");
const ClassImagem = document.createElement("div")
ClassImagem.className += "inner"
ClassImagem.appendChild(bgImage)
bgImage.src = `img/${chosenImage}`


document.body.appendChild(ClassImagem)