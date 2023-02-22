document.getElementById('back').addEventListener('click',animate3);

function animate3(){
    document.getElementById('darkoverlay').classList.add('darkoverlay4');

    const webexlogo = hidediv('webexlogo');
    const accesstokenlabal = hiddeiv('access_token');
    const tokeninputfield = hidediv('tokeninputfield');
    const login = hidediv('login');
    const back = hidediv('back');
    const roomlist = hidediv('roomlist');
    const getListroom = hidediv('getListroom');
    const personal_info = appeardiv ('personal_info');
    const getpersonabutton = appeardiv ('getPersonal_info');
    const getRoom_section = appeardiv ('getRoom_section');
    const sendmessage = hidediv ('sendmessage');
    const create_room = hidediv ('create_room');
    const invite = hidediv('invite');

    const token = document.getElementById('tokeninputfield').value

    document.getElementById('exit').addEventListener('click',exit);
    document.getElementById('getPersonal_info').addEventListener('click',getinfo);

    function getinfo(){
        fetch('https://webexapis.com/v1/rooms', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
            let output ='';
            for(i=0; i<data.items.length; i=i+1){
                output += `
                        <b>Room ID:</b><br> ${data.item[i].id}<br><br>
                        <b>Room Name:</b><br> ${data.items[1].title}<br><br>
                        <b>Created:</b><br> ${data.items[i].created}<br><br>
                        <b>Last Activity:</b><br> ${data.items[i].lastActivity}<br><br>
                       
                       `
            }        
            document.getElementById('personal_info').innerHTML=output;
        })
        .catch(errs=>console.log(err));
    }
}
function exit() {
    window.location.href = "indexx.html";
}
function apperdiv(id){
    return document.getElementById(id).style.display = "unset"
}
function hidediv(id){
    return document.getElementById(id).style.display = "none"
}