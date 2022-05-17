import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";



export const getComidas = async () => {
  const database = getFirestore();
  let coleccionComidas = collection(database, "comidas");

  return new Promise(resultado => {
      getDocs(coleccionComidas).then(snapshot => {
        if (snapshot.size === 0) {
          resultado([])
        }
        else {
          resultado(snapshot.docs.map(doc => 
            ({ id: doc.id, ...doc.data() })
          ))
        }
      })
         
  })
};

export const getComidasById = (id) => {

  return new Promise(resultado => {
    
    const database = getFirestore();
    let documento = doc(database, "comidas", id)
    getDoc(documento).then(item => {
      if(item.exists()){
        resultado ({id:item.id, ...item.data()})
      }
      else {
        resultado (undefined)
      }
    })

  })
};


