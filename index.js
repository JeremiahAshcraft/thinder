import therapistData from './data.js'
import Therapist from './Therapist.js'
import User from './Profile.js'


let therapistArray = ["therapist01", "therapist02", "therapist03", "therapist04", "therapist05"]
let therapistArray2 = ["therapist01", "therapist02", "therapist03", "therapist04", "therapist05"]

let isDecided = false


// function getUserProfileData() {

//     const userProfileData = therapistData[0]
//     return new UserProfile(userProfileData)

// }

// function profile() {
//     user = getUserProfileData()
//     renderUserProfile()
// }

// function renderUserProfile() {
//     document.getElementById('thinder-profile').innerHTML = user.getUserProfileHtml()
// }

// document.getElementById('user-profile').addEventListener('click', profile)

// let user = getUserProfileData()
// renderUserProfile()

function getUserProfileData() {
    return new User(therapistData.userProfile)
}

function renderUser() {

    document.getElementById('thinder-profile').innerHTML = user.getUserProfileHtml()
}

let user = getUserProfileData()
renderUser()

function profile() {
    document.getElementById('therapist').style.display = 'none'

    document.getElementById('thinder-profile').style.display = 'initial'

    renderUser()
}

document.getElementById('user-profile').addEventListener("click", profile)

let nextTherapistData

function getNextTherapist() {
    nextTherapistData = therapistData[therapistArray.shift()]
    return nextTherapistData ? new Therapist(nextTherapistData) : {}
}

function like() {
    if (therapistArray.length > 0) {
        therapist = getNextTherapist()
        render()
    }
}

function render() {
    document.getElementById('therapist').innerHTML = therapist.getTherapistHtml()
}

function therapists() {
    document.getElementById('thinder-profile').style.display = 'none'

    document.getElementById('therapist').style.display = 'initial'

    render()
}

document.getElementById('return-to-main').addEventListener('click', therapists)

document.getElementById('like').addEventListener('click', like)

let therapist = getNextTherapist()
render()


function messages() {
    document.getElementById('therapist').style.display = 'none'

    document.getElementById('thinder-profile').style.display = 'none'

    document.getElementById('thinder-messages').style.display = 'initial'

}




console.log(therapistArray2)

function getLastTherapist() {
    for (let indiTherapist of therapistArray2) {
        console.log(therapistData[indiTherapist])
        return therapistData[indiTherapist]


    }
}

function goBack() {

    if (therapistArray2.length > 0) {
        therapistLast = getLastTherapist()
        renderLast()
    }

}

function renderLast() {
    document.getElementById('therapist').innerHTML =
        therapist.getTherapistHtml()
}

let therapistLast = getLastTherapist()
renderLast()

function renderMessages() {
    document.getElementById('thinder-messages').innerHTML = messages.getMessagesHtml()
}


document.getElementById('message-icon').addEventListener('click', messages)

document.getElementById('dislike').addEventListener('click', dislike)

document.getElementById('go-back-once').addEventListener('click', goBack)
