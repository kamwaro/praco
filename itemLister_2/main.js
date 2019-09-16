var form = document.getElementById('addForm')
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// remove item event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // add item
    var itemValue = document.getElementById('item').value;
    var li = document.createElement('li');
    console.log(li);
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(itemValue));
    itemList.appendChild(li);

    console.log(itemList); 


// add delete button
    var delButton = document.createElement('button');
    delButton.className = 'btn btn-danger float-sm-right delete';
    var buttonText = document.createTextNode('x');
    delButton.appendChild(buttonText);
    li.appendChild(delButton);
   
}
// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){
         var li  = e.target.parentElement;
         itemList.removeChild(li);
      }
    }
}

// filter items
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    console.log(text);
    // get li's
    var items = itemList.getElementsByTagName('li');

    // convert  items to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.indexOf(text) !== -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })


}