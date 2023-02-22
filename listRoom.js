document.getElementById('getRoom_section').addEventListener('click',animate2);

function animate2(){
    document.getElementById('darkoverlay').classList.add('darkoverlay3');

    const webexlogo = hidediv('webexlogo');
    const accesstokenlabal = hidediv('access_token');
    const tokeninputfield = hidediv('tokeninputfield');
    const login = hidediv('login');
    const personal_info = hidediv('personal_info');
    const getpersonabutton = hidediv('getPersonal_info');
    const getRoom_section = hidediv('getRoom_section');
    const back = appeardiv('back');
    const roomlist = appeardiv('roomlist');
    const getListroom = appeardiv('getListroom');
    const sendmessage = appeardiv ('sendmessage');
    const create_room = appeardiv ('create_room');
    const invite = appeardiv('invite');

    const token = document.getElementById('tokeninputfield').value

    document.getElementById('exit').addEventListener('click',exit);
    document.getElementById('getListroom').addEventListener('click',getrooms);

    function getrooms(){
        fetch('https://webexapis.com/v1/rooms?max=5', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
            let output ='';
            for(i=0; i<data.items.length; i++){
                output += `
                        <b>Room ID:</b><br> ${data.items[i].id}<br>
                        <b>Room Name:</b><br> ${data.items[1].title}<br>
                        <b>Created:</b><br> ${data.items[i].created}<br>
                        <b>Last Activity:</b><br> ${data.items[i].lastActivity}<br><br>
                       
                       `
            }        
            document.getElementById('roomlist').innerHTML=output;
        })
        .catch(errs=>console.log(errs));
    }
}
document.getElementById('formid').addEventListener('submit',sendText);

function sendText(e) {
    e.preventDefault();

    const token = document.getElementById('tokeninputfield').value
    let message = document.getElementById('message').value;
    let room_id2  = document.getElementById('room_id2').value;

    fetch('https://webexapis.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
            'room_id2':room_id2,
            'text'  :message
        })
    })
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
    })
}
document.getElementById('create_id').addEventListener('submit',create_room);

function create_room(e){
    e.preventDefault();

    const token = document.getElementById('tokeninputfield').value
    let roomname= document.getElementById('titleid').value;

    fetch('https://webexapis.com/v1/rooms',{
        method: 'POST',
        headers: {
            'Content-type'  : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body:JSON.stringify({
            'title': roomname
        })
    })
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
    })
}
document.getElementById('inv_id').addEventListener('submit',invitePeople);

function invitePeople(e){
    e.preventDefault();

    const token = document.getElementById('tokeninputfield').value
    let email   = document.getElementById('emailid').value;
    let room_id1 = document.getElementById('room_id1').value;

    fetch('https://webexapis.com/v1/memberships',{
        method: 'POST',
        headers: {
            'Content-type'  : 'application/json',
            'Authorization' : `Bearer ${token}`
        
        },
        body:JSON.stringify({
            'room_id2'    :room_id1,
            'personEmail'   :email
        })
    })
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
    })
}
function exit() {
    window.location.href = "AM2111010423.html";
}
function appeardiv(id){
    return document.getElementById(id).style.display = "unset"
}
function hidediv(id){
    return document.getElementById(id).style.display="none"
}