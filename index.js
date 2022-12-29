import therapistData from './data.js'
import Therapist from './Therapist.js'
import User from './Profile.js'

let therapistArray = ["therapist01", "therapist02", "therapist03", "therapist04", "therapist05"]
let matches = therapistData[therapistArray[2]]
let likedArray = []
let dislikedArray = []

let newNew = 0
let therapist = thePer(0)
let user = getUserProfileData()

function thePer() {
    let therapyPerson = therapistData[therapistArray[newNew]]
    return therapyPerson ? new Therapist(therapyPerson) : {}
}

function getUserProfileData() {
    return new User(therapistData.userProfile)
}

function like() {
    likedArray.push(therapist)

    if (JSON.stringify(therapist) === JSON.stringify(matches)) {
        console.log("You have a match")
    }

    console.log(therapist)
    console.log(matches)

    if (therapistArray.length > 0) {
        newNew++
        therapist = thePer()
        render()
    }
}



function dislike() {
    dislikedArray.push(therapist)
    console.log(likedArray)
    console.log(dislikedArray)
    if (therapistArray.length > 0) {
        newNew++
        therapist = thePer()
        render()
    }
}

function goBack() {
    if (therapistArray.length > 0) {
        newNew--
        therapist = thePer()
        render()
    }
}

function profile() {
    document.getElementById('therapist').style.display = 'none'
    document.getElementById('thinder-profile').style.display = 'initial'
    renderUser()
}

function therapists() {
    document.getElementById('thinder-profile').style.display = 'none'
    document.getElementById('therapist').style.display = 'initial'
    render()
}

function messages() {
    document.getElementById('therapist').style.display = 'none'
    document.getElementById('thinder-profile').style.display = 'none'
    document.getElementById('thinder-messages').style.display = 'initial'
    renderMessages()
}


function render() {
    document.getElementById('therapist').innerHTML = therapist.getTherapistHtml()
}
function renderUser() {
    document.getElementById('thinder-profile').innerHTML = user.getUserProfileHtml()
}
function renderMessages() {
    document.getElementById('thinder-messages').innerHTML = messages.getMessagesHtml()
}

render()

document.getElementById('like').addEventListener('click', like)
document.getElementById('user-profile').addEventListener("click", profile)
document.getElementById('return-to-main').addEventListener('click', therapists)
document.getElementById('message-icon').addEventListener('click', messages)
document.getElementById('dislike').addEventListener('click', dislike)
document.getElementById('go-back-once').addEventListener('click', goBack)
