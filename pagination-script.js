const main=document.createElement('div');
main.setAttribute('class','users');
document.body.appendChild(main);

var no_of_rows = 15;
 
var total_number_of_users = 100;
var number_of_pages = Math.ceil(total_number_of_users / no_of_rows);

async function getuserdata() {
  const response = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
  const data = await response.json();
  console.log(data);
  displayuserdata(data, page_number, no_of_rows);
}

function displayuserdata(data,page_number,no_of_rows){
  let current_users = data.slice((page_number - 1) * no_of_rows, page_number * no_of_rows);
  const user_data = document.querySelector(".users");
   current_users.forEach((user)=>{
   const table = document.createElement('table');
   table.setAttribute('id','table');
   const row=document.createElement('tr');
   const col1=document.createElement('td');
   col1.setAttribute('id','col1');
   const col2=document.createElement('td');
   col2.setAttribute('id','col2');
   const col3=document.createElement('td');
   col3.setAttribute('id','col3');
   row.append(col1,col2,col3);
   table.appendChild(row);
   col1.innerHTML=(user.id);
   col2.innerHTML=(user.name);
   col3.innerHTML=(user.email);
   user_data.append(table);
 });
};
 
const footer= document.createElement("div");
footer.setAttribute('class','pagination_buttons');
document.body.append(footer);
footer.innerHTML=`
 <a id="page1" class="pagination_buttons_color" onclick="current_page(1)">1</a>
 <a id="page2" class="pagination_buttons_color" onclick="current_page(2)">2</a>
 <a id="page3" class="pagination_buttons_color" onclick="current_page(3)">3</a>
 <a id="page4" class="pagination_buttons_color" onclick="current_page(4)">4</a>
 <a id="page5" class="pagination_buttons_color" onclick="current_page(5)">5</a>
 <a id="page6" class="pagination_buttons_color" onclick="current_page(6)">6</a>
 <a id="page7" class="pagination_buttons_color" onclick="current_page(7)">7</a>
 `;

function current_page(p){
    main.innerHTML="";
    page_number = p;
    getuserdata();
    buttonstyling(p);
}
function buttonstyling(p){
  document.querySelector("#page1").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page2").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page3").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page4").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page5").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page6").style="background-color:rgb(255, 221, 221)";
  document.querySelector("#page7").style="background-color:rgb(255, 221, 221)";
  document.querySelector(`#page${p}`).style="background-color:rgb(255, 170, 95)";
      
}
window.onload = function() {
    page_number=1;
    getuserdata();
  document.querySelector("#page1").style="background-color:rgb(255, 170, 95)";
};



