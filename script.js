
console.log('hello')

let store = [[],[],[],[],[],[],[]]
//console.log(store.length)
console.table(store)


let submit = document.getElementById('submitForm')

submit.addEventListener('click', handleSubmit)

 function  handleSubmit() {
    let devname = document.getElementById('dev-name')
    let selectedRoom = document.getElementById('selectedroom').value
    let selectedRole = document.getElementById('selectedrole').value
    let selectedStack = document.getElementById('selectedstack').value
    
    let individualRoom = store[selectedRoom - 1]
 
    if (selectedRole == 'facilitator' && individualRoom.includes('facilitator')){ 
         alert ("This room has a facilitator, kindly select another room!")
         return false;
        }


    if( individualRoom.includes(selectedStack)){
        alert('This room is already occupied by a developer of the same skillset, kindly select another room')
        return false;
        } else {
            individualRoom.push(selectedStack)
            alert('Registration Successful!')
            table.innerHTML =`
            <table>
                <tr>
                    <th>NAME</th>
                    <th>ROLE</th>
                    <th>STACK</th>
                    <th>ROOM</th>
                </tr>
    
                <tr>
                    <td>${devname.value}</td>
                    <td>${selectedRole}</td>
                    <td>${selectedStack} </td>
                    <td>${selectedRoom}</td>
                </tr>
            </table>
            `
        }


         console.log('developer', devname.value)
        // console.log('Cat', selectedRole)
        // console.log('Rachael', selectedStack)
        // console.log('Dog', selectedRoom)
        // console.log('test', store)
    }
