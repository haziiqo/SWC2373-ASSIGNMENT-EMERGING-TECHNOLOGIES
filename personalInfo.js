document.getElementById('login').addEventListener('click',animate);

function animate(){
    document.getElementById('darkoverlay').classList.add('darkoverlay2');

    const webexlogo = hidediv('webexlogo');
    const accesstokenlabal = hidediv('access_token');
    const tokeninputfield = hidediv('tokeninputfield');
    const login = hidediv('login');
    const back = hidediv('back');
    const roomlist = hidediv('roomlist');
    const getListroom = hidediv('getListroom');
    const sendmessage = hidediv ('sendmessage');
    const create_room = hidediv ('create_room');
    const invite = hidediv('invite');

    const token = document.getElementById('tokeninputfield').value

    document.getElementById('exit').addEventListener('click',exit);
    document.getElementById('getPersonal_info').addEventListener('click',getinfo);

    function getinfo(){
        fetch('https://webexapis.com/v1/people/me', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
            let output ='';
                output = `
                        <b>User ID:</b><br> ${data.id}<br><br>
                        <b>Display Name:</b><br> ${data.displayName}<br><br>
                        <b>NickName:</b><br> ${data.nickName}<br><br>
                        <b>First Name:</b><br> ${data.firstName}<br><br>
                        <b>Last Name:</b><br> ${data.lastName}<br><br>
                        <b>Emails:</b><br> ${data.emails}<br><br>
                       `
                    
            document.getElementById('personal_info').innerHTML=output;
        })
        .catch(errs=>console.log(err));
    }
}
function exit() {
    window.location.href = "indexx.html";
}
function hidediv(id){
    return document.getElementById(id).style.display="none"
}