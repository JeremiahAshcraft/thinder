class User {


    constructor(data) {
        Object.assign(this, data)
    }

    getUserProfileHtml() {

        const { name, picture, about } = this
        return `
            
            <div class="user-profile-card">
                    <img src="">
                    <h3 class="user-profile-name">${name}</h3>
                    <p class="years-experience">${about}</p>
                
            </div>
           
        `
    }
}

export default User