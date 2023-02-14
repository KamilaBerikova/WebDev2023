let items = [];

let addBtn = document.querySelector("button"),
    itemNameInput = document.querySelector("#task__name"),
    marksDone = document.querySelectorAll("input[type=checkbox]"),
    toDoItems = document.querySelector("#to__do__items"),
    cntInd = 1;

function isValidItemName() {
    return itemNameInput.value? true: false;
};

function findIndexObj(obj) {
    for(let k=0; k<items.length; k++){
        if (items[k].id === obj.id) return k;
    }
    return -1;
};

function deleteObjByInd(ind) {
    items.splice(ind, 1);
    return true;
};

function getHTMLItemWithEvents(obj){
    let toDoItemDiv = document.createElement("div");
    toDoItemDiv.classList.add("to__do__item");

    let isMarkedDiv = document.createElement("div");
    isMarkedDiv.className = "is__marked";
    let isMarkedInput = document.createElement("input");
    isMarkedInput.setAttribute("type", "checkbox");

    isMarkedDiv.append(isMarkedInput);

    let itemContentDiv = document.createElement("div");
    itemContentDiv.className = "item__content";
    itemContentDiv.textContent = obj.content;

    let deleteCont = document.createElement("div");
    deleteCont.className = "delete__container";
    let imgBasket = document.createElement("img");
    imgBasket.src = "./media/icons/trash.png";
    imgBasket.height = "20";

    isMarkedInput.onchange = function(){
        if (this.checked) itemContentDiv.style.textDecoration = "line-through";
        else itemContentDiv.style.textDecoration = "none";
    };

    deleteCont.onclick = function() {
        let foundInd = findIndexObj(obj);
        if (foundInd != -1) {
            deleteObjByInd(foundInd);
            toDoItemDiv.remove();
        }
    };

    deleteCont.append(imgBasket);

    toDoItemDiv.append(isMarkedDiv, itemContentDiv, deleteCont);
    return toDoItemDiv;
};


addBtn.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        if (isValidItemName()){
            let newItem = {
                id: cntInd,
                content: itemNameInput.value,
                isMarked: false,
            };
            items.push(newItem);
            cntInd++;
            let newItemHTML = getHTMLItemWithEvents(newItem);
            toDoItems.append(newItemHTML);
        };
    }
);