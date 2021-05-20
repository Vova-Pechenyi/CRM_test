let parentClients = document.getElementById('client_section');

let childClients = parentClients.querySelector('.client_section_content');

let sectionClients = document.querySelector('.section_content');

let clientData = new Array();
clientData = [
    {
        dateCreate: '12.05.21',
        last_name: 'Фамилия Имя',
        id: '000000',
        country: 'Украина',
        phone: '+380502761212',
        email: 'groupfield@mail.ru',
        manager: 'Иванов Владимир',
        date_comment: '20.04.2021',
        last_comment: 'Lorem ipsum dolora',
        category: 'Лид 2'
    }
];
for(let i=1;i<25;i++){ 
    
    childClients.children[0].querySelector('div').innerHTML = clientData[0].dateCreate;
    childClients.children[1].querySelector('div').innerHTML = clientData[0].last_name;
    childClients.children[2].querySelector('div').innerHTML = clientData[0].id;
    childClients.children[3].querySelector('div').innerHTML = clientData[0].country;
    childClients.children[4].querySelector('div').innerHTML = clientData[0].phone;
    childClients.children[5].querySelector('div').innerHTML = clientData[0].email;
    childClients.children[6].querySelector('div').innerHTML = clientData[0].manager;
    childClients.children[7].querySelector('div').innerHTML = clientData[0].date_comment;
    childClients.children[8].querySelector('div').innerHTML = clientData[0].last_comment;
    childClients.children[9].querySelector('div').innerHTML = clientData[0].category;
   
    clone = childClients.cloneNode(true);
    parentClients.appendChild(clone);
};



let btn = document.querySelector('.btn_client');
let clientsSearch = document.querySelector('.clients_search');
let addSearch = document.getElementById('btn_search_filter');
let btn_show = document.getElementById('client_show'); 
let btn_hide = document.getElementById('client_hide');

btn.addEventListener('click', ()=>{
    clientsSearch.style.display = 'block';
    addSearch.style.display = 'inline';
    btn_show.style.display = 'none';
});
btn_hide.addEventListener('click', ()=>{
    clientsSearch.style.display = 'none';
    addSearch.style.display = 'none';
    btn_show.style.display = 'inline';
});