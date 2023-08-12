/*----------------------------------project plan-------------------------- */
/*
## Description:
To do list app to allow the user to add items with date and time. Button to inform 
the user if the item was done or not. the itemes should be ordered. button to remove
the item form the item. reminder . handle repeats

## work flow 
1. use HTML and CSS to design UI of the app ----------
2. collect user input
3. add item number
4. add date 
5. add time
6. item ok
7. item remove
8. generate UI
*/

const userInput=document.getElementById('user__input');
const submit=document.getElementById("butt");

let msgList=[];
let msgObjList=[];

/*---------------------create a function------------- */
let submitData= (e)=>{
    e.preventDefault();
    let msg=userInput.value;
    if((msg !== "") && (!msgList.includes(msg))){
        pushToArr(msg, msgList);
        // use massege constructor
        let msgg= new MassegeGenerator((msgList.indexOf(msg) + 1), `${date()}`, `${time()}`, msg )
        pushToArr(msgg, msgObjList);
        let msgCont=document.getElementById("msg__cont");
        let item=document.createElement('li');
        let list=document.createElement('ul');
        item.innerHTML=msgg.generateElement();
        addClasss(item,'item__ok');
        addClasss(list, "list")
        list.appendChild(item)
        msgCont.appendChild(list); 
    }else if(msg === ""){
        var error=document.createElement('div');
        error.textContent= "Please Add To Somthing";
        error.classList.add("item__err");
        var errorCont=document.getElementById('err__cont');
        errorCont.appendChild(error);
    }    
}
/*---------------------create element----------------- */
let createElement= (tagName, attr, value)=>{
    let newElement=document.createElement(tagName);
    newElement.setAttribute(attr, value);
}
let pushToArr=(pushedItem, arr)=>{
    arr.push(pushedItem); 
    console.log(arr);
}
let addClasss=(elem, clas)=>{
    elem.classList.add(clas);
}
/*----------------------generate date----------------------- */
let date=()=>{
    var today= new Date();
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}
/*----------------------generate time----------------------- */
let time=()=>{
    let today= new Date();
    let hours=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let currentTime=`${hours}:${min}:${sec}`;
    return currentTime;
}
/*---------------------generate massege constructor----------- */
function MassegeGenerator (msgId, msgDate, msgTime, msgContent){
    this.id=msgId
    this.content=msgContent
    this.date=msgDate
    this.time=msgTime
    this.generate= ()=>{
        console.log(`${this.id}- ${this.date}>> ${this.content} ${this.time}`);
    }
    this.generateElement= ()=>{
        return `<span class="num">${this.id}</span><span>${this.date} ${this.time}</span>
        <h4 class="txt">${this.content}</h4><span class="close">x</span><span class="ok">ok</span>`;
    }
}
let x=()=>{
    for (msg of msgObjList){
       if(msg.date === userDate){
           
       }
    }
}
/*------------------------create main function-------------------- */
let init=()=>{
    submit.addEventListener('click', submitData);

}
init();












