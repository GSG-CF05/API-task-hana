let root = document.querySelector('.content')

fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9')
  .then((response) => {
    return response.json()
  })
  .then((data) => {

   console.log("Data",data);
   data.forEach((element) => {
    
    let card =document.createElement('div')
    card.setAttribute('class' , 'elementDiv')
    root.appendChild(card)

    let h1 = document.createElement('h1')
    h1.textContent = element.name
    h1.setAttribute('class','h1')
    card.appendChild(h1)
    
    // let h2 = document.createElement('h2')
    // h2.textContent = element.animal_type
    // card.appendChild(h2)

    let pic = document.createElement('img')
    pic.src = element.image_link
    pic.setAttribute('class','pic')
    card.appendChild(pic)

   
   })
  }) 
   .catch((error)=> {
      console.log('something error' , error)
   })


    
