const form = document.querySelector("form")
, fileInput = form.querySelector(".file-input")
, progressArea = document.querySelector(".progress-area")
, uploadArea = document.querySelector(".uploaded-area");

form.addEventListener("click",()=>{

    fileInput.click();

});

fileInput.onchange = ({target}) =>{

  let file = target.files[0];
  if(file){
    let fileName = file.name;
    console.log(fileName);
  }
}