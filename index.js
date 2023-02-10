const name = 'kanin'; //const คือเปลี่ยนค่าไม่ได้
let height = '171'; //let เปลี่ยนค่าได้
let isme = 'false';
let city = null; //null คือไม่มีค่าแต่ก็ไม่ควรปล่อยว่าง
console.log(name,height,isme,city); //console.log คือแสดงค่า

///การสร้างobjectโดย{}
const person = {
    name: 'kanin',
    height: 171,
    city: 'chaingmai',
};

console.log(person.name);
//การเปลี่ยนค่า
person.height = 180;
console.log(person);

//addค่าใหม่ๆ
person.weight = 65;
console.log(person);

///การเลือกค่าindexที่จะแสดง
const number = [5,10,15,20];
console.log(number[2]);

//การเพิ่มค่าด้านหลังในarray
number.push(25);
console.log(number);

//การเพิ่มค่าด้านหน้าarray
number.unshift(1); 
console.log(number);

//การลบค่าในarrayหลังสุดออก
number.pop();
console.log(number);

//การลบค่าในarrayหน้าสุดออก
number.shift();
console.log(number);

//การใช้เครื่องหมายทางคณิต
let result = 10+5*2/2;
console.log(result);

//การสร้างเงื่อนไข
let password = '1234567';

if(password == ''){
    console.log('required');
}else if(password.length>=8 && password.length <=12){
    console.log('pass is valid');
}else{
    console.log('pass is invalid');
}

//การสร้างฟังชั่น
function calculatevat(money,vat){
    return (money*vat)/100;
}

const totalvat = calculatevat(100,7);
console.log(totalvat)

const totalvat10 = calculatevat(100,10);
console.log(totalvat10)

//การสร้างloop
for(let counter =0;counter<10;counter++) {
    if(counter ==5){
        break;
    }
console.log(counter); //*break; คือเมื่อเจอคำสั่งตามค่าตัวแปลที่ตั้งไว้จะหยุดทำ เช่น if(counter ==5)
//*continue; คือเมื่อเป็นเลขขี่เลื่อนไปทำด้านบนต่อเลย
}
