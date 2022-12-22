import therapistData from './data.js'
import Therapist from './Therapist.js'
import User from './Profile.js'


let therapistArray = ["therapist01", "therapist02", "therapist03", "therapist04", "therapist05"]


let newNew = 0

function thePer() {

    let therapyPerson = therapistData[therapistArray[newNew]]


    return therapyPerson ? new Therapist(therapyPerson) : {}

}

function like() {
    if (therapistArray.length > 0) {
        newNew++
        therapist = thePer()
        render()
    }
}

function render() {
    document.getElementById('therapist').innerHTML = therapist.getTherapistHtml()
}

let therapist = thePer(0)
render()

document.getElementById('like').addEventListener('click', like)

function goBack() {
    if (therapistArray.length > 0) {
        newNew--
        therapist = thePer()
        render()
    }
}

document.getElementById('go-back-once').addEventListener('click', goBack)

// document.getElementById('therapy').innerHTML = .getTherapistHtml()

// // function getUserProfileData() {

// //     const userProfileData = therapistData[0]
// //     return new UserProfile(userProfileData)

// // }

// // function profile() {
// //     user = getUserProfileData()
// //     renderUserProfile()
// // }

// // function renderUserProfile() {
// //     document.getElementById('thinder-profile').innerHTML = user.getUserProfileHtml()
// // }

// // document.getElementById('user-profile').addEventListener('click', profile)

// // let user = getUserProfileData()
// // renderUserProfile()

// function getUserProfileData() {
//     return new User(therapistData.userProfile)
// }

// function renderUser() {

//     document.getElementById('thinder-profile').innerHTML = user.getUserProfileHtml()
// }

// let user = getUserProfileData()
// renderUser()

// function profile() {
//     document.getElementById('therapist').style.display = 'none'

//     document.getElementById('thinder-profile').style.display = 'initial'

//     renderUser()
// }




// // let nextTherapistData
// // function getNextTherapist() {
// //     for (let i = 0; therapistArray.length > 0; i++) {
// //         nextTherapistData = therapistData[therapistArray[i]]
// //     }
// //     return nextTherapistData ? new Therapist(nextTherapistData) : {}
// // }


// // function nextTherapist() {

// // }

// // function like() {
// //     if (therapistArray.length > 0) {
// //         therapist = nextTherapist()
// //         render()
// //     }
// // }



// // // function render() {

// // //     document.getElementById('therapist').innerHTML = therapist.getTherapistHtml()
// // // }

// // function therapists() {
// //     document.getElementById('thinder-profile').style.display = 'none'

// //     document.getElementById('therapist').style.display = 'initial'

// //     render()
// // }



// // let therapist = nextTherapist()
// // render()


// function messages() {
//     document.getElementById('therapist').style.display = 'none'

//     document.getElementById('thinder-profile').style.display = 'none'

//     document.getElementById('thinder-messages').style.display = 'initial'

// }

// function renderMessages() {
//     document.getElementById('thinder-messages').innerHTML = messages.getMessagesHtml()
// }

// document.getElementById('user-profile').addEventListener("click", profile)
// document.getElementById('return-to-main').addEventListener('click', therapists)
// document.getElementById('like').addEventListener('click', like)
// document.getElementById('message-icon').addEventListener('click', messages)
// document.getElementById('dislike').addEventListener('click', dislike)
// document.getElementById('go-back-once').addEventListener('click', goBack)
