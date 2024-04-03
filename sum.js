let n = document.getElementById("number");
let r = document.getElementById("result");

function displayData(){
    let ns = parseInt(n.value);
    let total = 0;
    let stack = ""
    for (let i = 0;i <= ns;i++) {
        total += i;
        stack += i
        if(i<ns){
            stack += " + "
        }
    }
    r.innerHTML = "ถ้า n ="+ns+"<br>"+" ค่าsumที่คำนวณได้ "+stack+" = "+total+"<br>"
}