function createPetList() {

    let petList = [];
  
    function addPet(pet) {
      if (pet)
      {
        petList.push(pet)
      }
      else
      {
        return petList;
      }
      
    }

    return addPet;
    
  }
  


const newPetList = createPetList();
newPetList('Perry');
newPetList('Leia Patricia')
newPetList(['Perrita Imperialista', 'Patico'])
newPetList({petName: 'Princesa Leia'})
console.log(newPetList());