const cardContainer = document.querySelector(".cardContainer")
// Fetch people function
const getPeople = async () => {
    if (cardContainer.length!=0){
        cardContainer.innerHTML= ""
    }
    const peopleData = await fetch ("https://randomuser.me/api/?results=30&nat=us&")
    const formattedPeople = await peopleData.json()
    console.log(formattedPeople)
    for (let people of formattedPeople.results){
        const personCard = document.createElement("div");
        personCard.className = "people"
        const personName = document.createElement("h3")
        const personFullName = `${people.name.first} ${people.name.last}`
        personName.innerHTML = personFullName
        const personInfo = document.createElement("ul")
        const birthday = document.createElement("li")
        birthday.innerHTML = `Age: ${people.dob.age}`
        const phoneNumber = document.createElement("li")
        phoneNumber.innerHTML = `Phone: ${people.phone}`
        const image = document.createElement("img")
        image.src = people.picture.large
        image.height = "225"
        image.width = "225"
        const email = document.createElement("i")
        email.innerHTML = `: ${people.email}`
        email.className = "far fa-envelope"
        personInfo.append(birthday,phoneNumber,email)
        personCard.append(image,personName,personInfo)
        cardContainer.append(personCard)
    }
}
// Button click to search people
const peopleButton = document.querySelector("#button1")
peopleButton.addEventListener('click', function(){
    getPeople();
})
// Fetch users function
const getUsers = async () => {
    if (cardContainer!=""){
        cardContainer.innerHTML= ""
    }
    const users = await fetch ("https://fakerapi.it/api/v1/users?_quantity=30")
    const usersJson = await users.json()
    for (let user of usersJson.data){
        const userCard = document.createElement("div")
        userCard.className = "users"
        const name = document.createElement("h3")
        name.innerHTML = `Username: ${user.username}`
        const list = document.createElement("ul")
        const ip = document.createElement("li")
        ip.innerHTML = `IP: ${user.ip}`
        const address = document.createElement("li")
        address.innerHTML = `MacAddress: ${user.macAddress}`
        const password = document.createElement("li")
        password.innerHTML=`Password: ${user.password}`
        list.append(ip,address,password)
        userCard.append(name,list)
        cardContainer.append(userCard)
    }

}
// Button click to search users
const userButton = document.querySelector("#button2")
userButton.addEventListener('click', function(){
    getUsers();
})

