let form = document.getElementById('addForm');
let list = document.getElementsByTagName('ul');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    console.log(1);

    // Add item
    let newItem = document.getElementById('item').value;
    console.log(newItem);
    
    // Create list item
    let li = document.createElement('li');
   console.log(li.appendChild(document.createTextNode(newItem))) ;
   console.log(li);
   let ul = document.getElementsByTagName('ul');
   let newLi = li.appendChild(document.createTextNode(newItem));

//    Appending li to ul


for(var i = 0; i < 1; i++){
    ul[i].newLi;
}

console.log(ul);
document.appendChild(ul);

};