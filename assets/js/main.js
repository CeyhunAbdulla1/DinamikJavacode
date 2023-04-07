let button=document.querySelector("#button");
button.addEventListener("click",()=>{
    let image=document.querySelector("#sekil").value;
    let marka=document.querySelector("#marka").value;
    let model=document.querySelector("#model").value;
    let price=document.querySelector("#price").value;
    document.querySelector("#sekil").value="";
    document.querySelector("#marka").value="";
    document.querySelector("#model").value="";
    document.querySelector("#price").value="";
    if(image.trim()=="" || marka.trim()=="" || model.trim()=="" || price.trim()==""){
        alert("Xanalari doldurun")
    }
    else{
        document.querySelector(".content").innerHTML+=`

        <div class="java">
            <img src="${image}">
            <span>${marka}</span>
            <span>${model}</span>
            <span>${price} $</span>
            <span><i class="fa-solid fa-heart"></i></span>
        </div>`
    }
   
  
})