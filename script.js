let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrInput = document.querySelector("#qrInput");
let btn = document.querySelector("#Generator")

function generateQr(){
    if(qrInput.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
        console.log(qrImage.src);
        imgBox.classList.add("show-img");
    }else{
        qrInput.classList.add("error");
        setTimeout(()=>{
            qrInput.classList.remove("error");
        },1000);
    }
}

btn.addEventListener("click", generateQr);