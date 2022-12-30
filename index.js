import therapistData from './data.js'
import Therapist from './Therapist.js'
import User from './Profile.js'

let therapistArray = ["therapist01", "therapist02", "therapist03", "therapist04", "therapist05"]
let matchesArray = [therapistData.therapist03]
let likedArray = []
let dislikedArray = []

let newNew = 0
let matches = 0
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

    matchesArray.forEach(match => {

        if (matches === 0 && JSON.stringify(therapist) === JSON.stringify(match)) {
            matches++
            console.log("You have a match")
            setTimeout(function () {

                document.getElementById('therapist-card').innerHTML = `
                    <img src="images/match.png">
                `
            }, 100)
        } else if (matches > 0) {
            newNew++
            therapist = thePer()
            render()
            matches = 0
        } else if (therapistArray.length > 0) {
            setTimeout(function () {

                document.getElementById('therapist-card').innerHTML = `
                    <img src="images/like.png">
                `
            }, 100)
            setTimeout(function () {
                newNew++
                therapist = thePer()
                render()
            }, 1000)

        }
    })
}



function dislike() {

    if (therapistArray.length > 0) {
        setTimeout(function () {

            document.getElementById('therapist-card').innerHTML = `
                <img src="images/nope.png">
            `
        }, 100)
        setTimeout(function () {
            newNew++
            therapist = thePer()
            render()
        }, 1000)

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
