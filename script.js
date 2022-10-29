
let store = [[],[],[],[],[],[],[]]

let selectedRoom = document.getElementById('selectedroom').value
let selectedRole = document.getElementById('selectedrole').value
let selectedStack = document.getElementById('selectedstack').value

const handleSubmit = () => {
    let individualRoom = store[selectedRoom-1]
    if(selectedRole == 'facilitator' && !individualRoom.includes('facilitator') ){
        individualRoom.push('facilitator')
    }
    if(individualRoom.includes(selectedRole) || individualRoom.includes(selectedStack)){
        alert('please select another room')
    } else{
        if(selectedRole == 'facilitator'){
            individualRoom.push('facilitator')
        } else {
            individualRoom.push(selectedStack)
        }
    }

    console.log('cat', store)
    console.log('dog', selectedRoom)
    console.log('kitten', selectedRole)
    console.log('puppy', selectedStack)

console.log('Rachael', store)
}

let submit = document.getElementById('submitForm')

submit.addEventListener('click', handleSubmit)