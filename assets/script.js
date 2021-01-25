const name = document.getElementById('name');
const lastName=document.getElementById('last.name');
const genderM= document.getElementById('male');
const genderF= document.getElementById('female');
const textMsg =document.getElementById('text.mesg');
const form =document.getElementById('form');
const thnxMsg= document.getElementById('thnx-msg')
form.addEventListener("submit" , (e) => {
    e.preventDefault()
if( name.value===''|| name.value.length < 2 ){
    name.style.borderColor="red"
    
}
if ( name.value.length >= 2 ){
    console.log(`Name: ${name.value}`)
    name.style.borderColor="black"

}
if( lastName.value===''|| name.value.lenght < 2 ){
    lastName.style.borderColor="red";

}
if ( lastName.value.length >= 2 ){
    console.log(`Last name: ${lastName.value}`)
    lastName.style.borderColor="black"

}
 console.log("Submited")

 if (lastName.value.length >=2 && name.value.length >= 2)
{ thnxMsg.innerHTML = "Thank you for contacting us, " + name.value }

}) 
