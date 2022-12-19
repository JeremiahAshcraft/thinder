class Therapist {


    constructor(data) {
        Object.assign(this, data)
    }

    getTherapistHtml() {

        const { name, picture, yearsExperience, specialties, acceptingNewPatients } = this
        return `
            
            <div class="therapist-card" style="background-image: url('${picture}');>
                
                    <h3 class="name">${name}</h3>
                    <p class="years-experience">Practicing ${yearsExperience} years</p>
                    <p class="specialties">${specialties.join(", ")}</p>
                
            </div>
           
        `
    }
}

export default Therapist