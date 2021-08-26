// async await 


// getFoxPic()


// async function getFoxPic() {
//   fetch("https://randomfox.ca/floof/")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }


// function getFoxPic() {
//   fetch("https://randomfox.ca/floof/")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// function renderFoxPic(data) {
//   console.log(data)
// }

const getFoxPic = async () => {
  const response = await fetch("https://randomfox.ca/floof/")
  const data = await response.json()
  return data
}

// console.log(getFoxPic())

getFoxPic().then(data => console.log(data))

// const response = await fetch("https://randomfox.ca/floof/") // WILL NOT WORK
