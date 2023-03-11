
const firebaseConfig = {
    apiKey: "AIzaSyAW_vJQ1HAlg7FoQH6nzbji8AgHEFv_68U",
    authDomain: "guitarapi-b6d03.firebaseapp.com",
    databaseURL: "https://guitarapi-b6d03-default-rtdb.firebaseio.com",
    projectId: "guitarapi-b6d03",
    storageBucket: "guitarapi-b6d03.appspot.com",
    messagingSenderId: "470660630915",
    appId: "1:470660630915:web:0cb91d8d3083233d488eb6"
  };

 const app = initializeApp(firebaseConfig);
 const database = getDatabase();

const openModal = document.getElementById('openRegisterModal')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('cancelRegistreModal')
const registerForm = document.getElementById('registerForm')
//const guitarRef = app.database().ref('guitars')

const showRegisterModal = () => {
    modal.classList.toggle('is-active')
};
openModal.addEventListener('click', showRegisterModal)
closeModal.addEventListener('click', showRegisterModal)
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = registerForm['nombre'].value
    //Agregar los inputs restantes

    const registerGuitar = guitarRef.push()
    registerGuitar.set({
        Uid: registerGuitar.path.pieces_[1],
        Nombre: nombre 
    })
    showRegisterModal()
})