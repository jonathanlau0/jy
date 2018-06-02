const images = [
  "images/front2.jpg",
  "images/front3.jpg",
  "images/front4.jpg",
  "images/front5.jpg",
  "images/front1.jpg"
]

const node = document.getElementById("image-head");

const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
    setTimeout(() => {
        container.style.backgroundImage = `linear-gradient(-225deg, rgba(161, 161, 161, 0.7) 0%, rgba(64, 88, 104, 0.2) 50%), url(${image})`
    }, step * (index + 1))
  ))
  setTimeout(() => cycleImages(images, container, step), step * images.length)
}

cycleImages(images, node, 5000)