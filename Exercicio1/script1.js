let inputCPF = document.getElementById("CPF")


inputCPF.addEventListener('keyup',(e)=>{
if(isNaN(inputCPF.value)) {  
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1))
         console.log(inputCPF.value)
 }
 if(isNaN(inputCPF.value.length>11)) {  
     inputCPF.value = inputCPF.value.substring(0,11)
      console.log(inputCPF.value)
 }
 })