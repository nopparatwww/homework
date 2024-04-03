class Sort {
    bubbleSort(arr){
        let temp
        let size = arr.length
        for(let i =0;i<size-1;i++){
            for(let j=0;j<(size-i)-1;j++){
                if(arr[j]>arr[j+1]){
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }

    insertionSort(arr){
        let key,j
        for(let i = 1;i<arr.length;i++){
            key = arr[i]
            j=i-1
            while(j>=0 && key < arr[j]){
                arr[j+1] = arr[j]
                j = j-1
                
            }
            arr[j+1] = key
        }
    }

    shellSort(arr){
        let gap = Math.floor(arr.length / 2);
        let temp, j;
    
        while (gap > 0) {
            for (let i = gap; i < arr.length; i++) {
                temp = arr[i];
                j = i - gap;
    
                while (j >= 0 && arr[j] > temp) {
                    arr[j + gap] = arr[j];
                    j -= gap;
                }
                arr[j + gap] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    }
    

    display(arr){
        let str = ""
        for(let i=0;i<arr.length;i++){
            str = str+arr[i]+" "
        }
        return str
    }
}


//----main----
let r = document.getElementById("res")
let a = document.getElementById("ans")
let n = document.getElementById("nRandom")
let t = document.getElementById("tim")
let sr = document.getElementById("sres")
let br = document.getElementById("bres")
let ir = document.getElementById("ires")


let selectedSort = '';

// สร้างตัวแปร data เพื่อเก็บข้อมูลที่สุ่มไว้ โดยกำหนดให้เป็นตัวแปร global
let data = [];

// อัพเดทฟังก์ชัน calculateSort() เพื่อสร้างข้อมูลสุ่มเมื่อ data ว่างเท่านั้น
function calculateSort() {
    if (data.length === 0) {
        let numP = parseInt(n.value);
        let mysort = new Sort();
        let startTime = performance.now();
        for(let i = 0; i < numP; i++){
            data.push(Math.floor(Math.random()*100));
        }
        
        // เตรียมข้อมูลสำหรับแสดงผล
        let results = {};
        
        // แสดงผลข้อมูลก่อนการเรียงลำดับ
        let endTime = performance.now();
        let executionTime = endTime - startTime;
        results.before = "Before : " + mysort.display(data) + "<br>"+"Execution Time: " + executionTime + " milliseconds<br>"
        r.innerHTML = results.before;
        
    }
}

function bubbleSortss(){
    let startTime = performance.now();
    calculateSort(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    let mysort = new Sort();
    
    let results = {};

    // เรียกใช้เมธอด bubbleSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    mysort.bubbleSort(tempData);
    let endTime = performance.now();
    let executionTime = endTime - startTime;
    results.bubble = "After Bubble Sort: " + mysort.display(tempData) + "<br>"+"Execution Time: " + executionTime + " milliseconds<br>"

    // แสดงผลลัพธ์ของการเรียงลำดับ
    bres.innerHTML = results.bubble
    
}

function insertionSortss(){
    let startTime = performance.now();
    calculateSort(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    let mysort = new Sort();
    
    let results = {};

    // เรียกใช้เมธอด insertionSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    mysort.insertionSort(tempData);
    let endTime = performance.now();
    let executionTime = endTime - startTime;
    results.insertion = "After Insertion Sort: " + mysort.display(tempData) + "<br>"+"Execution Time: " + executionTime + " milliseconds<br>"  

    // แสดงผลลัพธ์ของการเรียงลำดับ
    ires.innerHTML = results.insertion;
}

function shellSortss(){
    let startTime = performance.now();
    calculateSort(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    let mysort = new Sort();
    
    let results = {};

    // เรียกใช้เมธอด shellSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    mysort.shellSort(tempData);
    let endTime = performance.now();
    let executionTime = endTime - startTime;
    results.shell = "After Shell Sort: " + mysort.display(tempData) + "<br>"+"Execution Time: " + executionTime + " milliseconds<br>"  

    // แสดงผลลัพธ์ของการเรียงลำดับ
    sres.innerHTML = results.shell;
}
