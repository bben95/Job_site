fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCrad(data);
    console.log(data);
    dataOut = data;
    dataOut1 = data;
  });

let dataOut;
let dataOut1;

arr = [];

let ib = document.getElementsByClassName("item_body")[0];
var executed = false;
function sbar(a) {
  if (!executed) {
    executed = true;
    filterCard = document.createElement("div");
    filterCard.setAttribute("id", "filter");
    filterCard.style.minHeight = "50px";
    filterCard.style.width = "800px";
    // filterCard.style.border="1px solid black";
    filterCard.style.backgroundColor = " hsl(180, 31%, 95%)";
    filterCard.style.marginTop = "28px";
    filterCard.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
    ib.insertBefore(filterCard, ib.children[0]);
    var filterItemdiv=document.createElement("div");
    filterItemdiv.setAttribute("id","filterItemdiv");
    // filterItemdiv.style.border="1px solid black";
    filterItemdiv.style.width="80%";
    filterCard.appendChild(filterItemdiv);
    var clearItem=document.createElement("div");
    clearItem.setAttribute("id","clearItem");
    // clearItem.style.border="1px solid black";
    clearItem.style.width="20%";
    filterCard.appendChild(clearItem);
    var clear=document.createElement("h4");
    clear.innerText="Clear";
    clear.style.margin="0";
    clear.style.color = " hsl(180, 29%, 50%)";
    clear.style.fontWeight = "750";
    clear.style.cursor="pointer";
    clearItem.style.textDecoration="underline";
    clearItem.style.textDecorationColor=" hsl(180, 29%, 50%)";
    clearItem.addEventListener("click",()=>{let elements = document.getElementsByClassName("button2");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    };
    document.getElementById("filter").remove();

    createCrad(dataOut);
     executed=false;
    arr=[];})
    clearItem.appendChild(clear);

  }
   if (!arr.includes(a)) {
    let y = document.getElementById("filterItemdiv");
    var button2 = document.createElement("button");
    button2.setAttribute("class","button2")
    button2.style.height = "25px";
    button2.style.marginLeft = "3px";
    button2.style.marginRight = "3px";
    button2.style.width = "fit-content";
    button2.style.marginRight = "5px";
    button2.style.marginLeft = "5px";
    button2.style.color = " hsl(180, 52%, 96%)";
    button2.style.backgroundColor = "hsl(180, 29%, 50%)";
    button2.style.fontWeight = "750";
    button2.style.border = "none";
    button2.style.borderRadius = "2px";
    button2.style.padding = "5px";
    button2.innerHTML = a;
    var butx = document.createElement("img");
    butx.src = "./images/icon-remove.svg";
    butx.style.height = "10px";
    butx.style.width = "10px";
    butx.style.marginLeft = "3px";
    button2.appendChild(butx);
    button2.addEventListener("click", () => {
      let i = arr.indexOf(a);
      arr.splice(i, 1);
      filter(arr);
      button2.remove();
      if (arr.length == 0) {
        let elements = document.getElementsByClassName("item");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
        createCrad(dataOut);
      }
    });
    y.appendChild(button2);
  }
}

function filter(a) {
  for (let i = 0; i < a.length; i++) {
    var c = dataOut.filter((x) => {
      if (x.role == a[i] || x.level == a[i] || x.languages.includes(a[i])) {
        return x;
      }
    });
    let elements = document.getElementsByClassName("item");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    createCrad(c);
  }
}

function button(input) {
  let button = document.createElement("button");
  button.setAttribute("class", "button");
  button.style.marginRight = "5px";
  button.style.marginLeft = "5px";
  button.style.color = " hsl(180, 52%, 96%)";
  button.style.backgroundColor = "hsl(180, 29%, 50%)";
  button.style.fontWeight = "750";
  button.onmouseover=function(){
    button.style.color="hsl(180, 29%, 50%)";
    button.style.backgroundColor=" hsl(180, 52%, 96%)";
  }
  button.onmouseleave=function(){
    button.style.color=" hsl(180, 52%, 96%)";
    button.style.backgroundColor="hsl(180, 29%, 50%)";
  }

  button.style.border = "none";
  button.style.borderRadius = "2px";
  button.style.padding = "5px";
  button.innerText = input;
  button.addEventListener("click", () => {
    sbar(input);
  });
  button.addEventListener("click", () => {
    if (!arr.includes(input)) {
      arr.push(input);
    }
    filter(arr);
    console.log(arr);
  });
  return button;
}

function createCrad(data) {
  for (let i = 0; i < data.length; i++) {
    var itemCard = document.createElement("div");

    itemCard.setAttribute("class", "item");
    itemCard.style.minHeight = "100px";
    itemCard.style.width = "800px";
    // itemCard.style.border="1px solid black";
    itemCard.style.backgroundColor = "white";
    itemCard.style.marginTop = "28px";
    itemCard.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
    ib.appendChild(itemCard);

    var comDetail = document.createElement("div");
    comDetail.setAttribute("class", "comDetail");
    comDetail.style.width = "400px";
    comDetail.style.height = "100px";
    // comDetail.style.border="1px solid black";
    itemCard.appendChild(comDetail);

    var filterItem = document.createElement("div");
    filterItem.setAttribute("class", "filterItem");
    filterItem.style.height = "100px";
    filterItem.style.width = "400px";
    // filterItem.style.border="1px solid black";
    itemCard.appendChild(filterItem);

    var proImage = document.createElement("div");
    proImage.style.height = "90px";
    proImage.style.width = "90px";

    // proImage.style.border="1px solid black";
    comDetail.appendChild(proImage);

    var image = document.createElement("img");
    image.setAttribute = ("class", "proImage");
    image.src = data[i].logo;
    image.style.height = "100px";
    image.style.width = "100px";
    proImage.appendChild(image);

    var proDetail = document.createElement("div");
    proDetail.setAttribute("class", "proDetail");
    proDetail.style.height = "100px";
    proDetail.style.width = "300px";
    // proDetail.style.border="1px solid black";
    comDetail.appendChild(proDetail);

    filterItem.appendChild(button(data[i].role));
    filterItem.appendChild(button(data[i].level));

    let l = data[i].languages.length;
    for (let j = 0; j < l; j++) {
      filterItem.appendChild(button(data[i].languages[j]));
    }

    var comName = document.createElement("p");
    // comName.style.border="1px solid black";
    comName.style.margin = "0";
    comName.innerText = data[i].company;
    comName.style.color="hsl(180, 29%, 50%)";
    comName.style.paddingLeft = "35px";
    comName.onmouseover=function(){
      this.style.color="black";
      
    }
    comName.onmouseleave=function(){
      this.style.color="hsl(180, 29%, 50%)";
    }
    
    proDetail.appendChild(comName);

    var jobName = document.createElement("h3");
    jobName.style.margin = "0";
    jobName.innerText = data[i].position;
    jobName.style.paddingLeft = "35px";
    jobName.style.color="hsl(180, 29%, 50%)";
    jobName.onmouseover=function(){
      this.style.color="black";
      
    }
    jobName.onmouseleave=function(){
      this.style.color="hsl(180, 29%, 50%)";
    }
    // jobName.style.border="1px solid black";
    proDetail.appendChild(jobName);

    var jobDetail = document.createElement("div");
    jobDetail.setAttribute("class", "jobDetail");
    // jobDetail.style.border="1px solid black";
    proDetail.appendChild(jobDetail);

    var time = document.createElement("span");
    time.innerHTML = data[i].postedAt;
    jobDetail.appendChild(time);

    var type = document.createElement("span");
    type.innerHTML = data[i].contract;
    jobDetail.appendChild(type);

    var place = document.createElement("span");
    place.innerHTML = data[i].location;
    jobDetail.appendChild(place);
  }
}
