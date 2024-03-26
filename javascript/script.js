//1.İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn 
// istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

/*let number =prompt("Bir reqem daxil edin");   

if (number%2==0) {
    console.log("Bu eded cut ededdir");
}else{
    console.log("Bu eded tek ededdir");
}
*/



//2.Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.

/*
let a =prompt("Birinci reqem daxil edin"); 
let b =prompt("Ikinci reqem daxil edin"); 
let c =prompt("Ucuncu reqem daxil edin"); 

if (a>b && a>c) {
    console.log("a en boyuk reqemdir")
}else if(b>a && b>c){
    console.log("b en boyuk reqemdir")
}else if(c>a && c>b){
    console.log("c en boyuk reqemdir")
}else{
    console.log("Butun reqemler beraberdir")
}
*/



//3.  1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.

/*
let sum=0;
let product=1;
for (let index = 1; index <=10; index++) {
    sum=sum+index;
    product=product*index; 
}

console.log("Toplam="+sum);
console.log("Hasil="+product);
*/






//4.1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.
/*
let sum=0;
let product=1;

for (let index = 1; index <=100; index++) {
    if (index%2==0) {
        sum=sum+index;
        product=product*index;
    }
    
}
console.log("Toplam: "+sum);
console.log("Hasil: "+product);
*/


//5.         3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.
/*for (let index = 100; index < 1000; index++) {
   if (index%7==0 && index%8==0) {
    console.log(index+" ");
   }
}
*/

//6.         3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.
/*
let sum=0;
for (let index = 100; index < 1000; index++) {
   if (index%7==0 && index%8==0) {
    sum=sum+index;
   }
}
console.log("3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin toplami = "+sum);
*/



//7.      3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.
/*
for (let index = 100; index < 1000; index++) {
    if (index%7==0 && index%8==0) {
     console.log("3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədəd="+index);
     break;
    }
 }
*/


 //8       3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

 /*
 let last_number;
 for (let index = 100; index < 1000; index++) {
    if (index%7==0 && index%8==0) {
    last_number=index;
    }
 }

 console.log("3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədəd="+last_number);

 */

// 9.  3 rəqəmli ədədlərin ədədi ortasını tapın.
/*
 let count=0;
 let sum=0;

 for (let index = 100; index < 1000; index++) {
       sum=sum+index;
       count++;
 }
console.log("Toplam="+sum)
console.log("Eded sayi="+count)
console.log("ortaq eded: "+sum/count);
*/

//10.tifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər
// üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın
/*
let birinci =parseInt(prompt("birinci reqemi daxil edin"));
let ikinci =parseInt(prompt("ikinci reqemi daxil edin"));
let riyazi_emel =prompt("riyazi emel  daxil edin");
let result;

switch(riyazi_emel){
        case "+":
        result=birinci+ikinci;
        break;

        case "-":
        result=birinci-ikinci;
        break;

        case "*":
        result=birinci*ikinci;
        break;

        case "/":
        result=birinci/ikinci;
        break;
    
}


console.log(result)
*/


//11.  Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.


/*
let number=prompt("Eded daxil edin");
for (let index = 100; index < 1000; index++) {
        if (index%number==0) {
            console.log(index);
        }
}
*/

//12.Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
/*
let number=prompt("Eded daxil edin");

for (let index = 1; index <=number; index++) {
    if (number%index==0) {
       console.log(index); 
    }
    
}
*/

//13.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.

/*
for (let index = 2; index <=100; index++) {
   for (let j = 2; j < index; j++) {
     if (index%j==0) {
        console.log(index+"murekkeb ededdir");
     }
     }
   }

   for (let index = 2; index <=100; index++) {
    for (let j = 2; j < index; j++) {
      if (index%j!==0) {
         console.log(index+"sade ededdir");
      }
      }
    }
 */

//14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
/*
for (let index = 0; index <12; index++) {
    
    if (index>12/2) {
        break;
    }
    console.log(index+"+"+(12-index));
}
*/
//15.   İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)
/*
let x=5;
let y=6;

let temp=x;
x=y;
y=temp;

console.log("x-in yeni deyeri: "+x)
console.log("y-in yeni deyeri: "+y)
*/


//---------------------------------------------------------------------------------------------------



//1 Array elementlərinin cəmini / hasilini tapın
/*
let numbers=[1,2,3,4,5];
let sum=0;
let product=1;

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    sum=sum+numbers[index];
    product=product*numbers[index];
}

console.log("Toplam: "+sum);
console.log("Hasil: "+product);
*/



//2 Array elementlərinin içində təkrarlanan elementləri silin
/*
let meyveler = ['alma', 'armud', 'banan','alma', 'gavali', 'gilas', 'armud', 'gavali'];

for (let index = 0; index < meyveler.length; index++) {
    console.log(meyveler[index]);
    
}

for (let i = 0; i < meyveler.length; i++) {
    for (let j = i + 1; j < meyveler.length; j++) {
        if (meyveler[i] === meyveler[j]) {
            meyveler.splice(j, 1);
        }
    }
    
}

// temizlenmis massivi ekrana yazdiririq
for (let index = 0; index < meyveler.length; index++) {
    console.log(meyveler[index]);
    
}
*/

// 3 Array elementlərində ədəd olmayan elementləri silin.
/*
let array=["alma",10,20,"armud",30,"banan"];
 for (let i = 0; i < array.length; i++) {
    if (typeof(array[i])=="string") {
        console.log(array[i])
    }
    
 }
*/

//4 Sözü tərsinə çevirən funksiya yaradın.
/*
let word="tural";
let reversed="";
for (let i = word.length-1; i>=0 ;i--) {
     reversed=reversed+word[i];
    
}
console.log(reversed)
*/


//5 Cümləni tərsinə çevirən funksiya.
/*
let cumle ="javascript is the most difficult programming language";
let array=cumle.split(" ");
let ters_cumle="";
for (let i = array.length-1; i>=0; i--) {
    ters_cumle+=array[i]+" ";
    
}

console.log(ters_cumle)
*/


//6 Daxil edilmiş ədədi sözlə yazan funskiya (Məs→ input :1, output : Bir )





//-------------------------------------------------------------------------------------------------------
//1 Array daxilində tək yerdə duran elementləri ekrana verin
/*
let numbers=[5,10,17,20,22,25,28,30,32,34,36,40];

for (let i = 0; i < numbers.length; i=i+2) {
    console.log(numbers[i])
    
}
*/



//2 Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin
/*
let numbers=[5,10,17,20,22,25,28,30,32,34,36,40];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%5==0) {
        console.log(numbers[i])
    }
    
}
*/

//3.Daxil olunan ədədin sadə və ya mürəkkəb olduğunu tapan proqram tərtib edin.

/*
let number=parseInt(prompt("Eded daxil edin"));
let sadedirse=true;
for (let index = 2; index < number; index++) {
    if (number%index==0) {
        sadedirse=false;
        break;
    }
}

if (sadedirse) {
    console.log("Sadedir");
}else{
    console.log("Murekkebdir");
}
*/


//4  Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

/*
let numbers = [8, 14, 35, 28, 7, 42, 56, 49, 77, 63];
let bolunen;
let count=0;
let en_boyuk_bolunen;
let en_kicik_bolunen;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]%7==0) {
        bolunen=numbers[index];
        count++;
        if (bolunen>en_boyuk_bolunen || en_boyuk_bolunen==undefined) {
            en_boyuk_bolunen=bolunen;
        }
        if (bolunen<en_kicik_bolunen || en_kicik_bolunen==undefined) {
            en_kicik_bolunen=bolunen;
        }
    } 
    
 


}

if(count==0){
   console.log("Bu massivde 7 reqemine tam bolunen eded yoxdur")
}else{
    console.log("Bu massivde "+count+" defe 7 reqemine bolunen eded var ve sonuncusu"+bolunen+" dir.");
}


console.log("en boyuk bolunen: "+en_boyuk_bolunen);
console.log("en kicik bolunen: "+en_kicik_bolunen);
*/

//5 Array elementləri daxilində ən böyük və ən kiçik elementləri ekrana çıxaran proqram tamin edin
/*
let numbers = [-3, 5, 9, -2, 17, 8, 6, -7, 4,0];

let max=numbers[0];
let min=numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>max) {
        max=numbers[i];
    }else if(numbers[i]<min){
        min=numbers[i];
    }
    
}

console.log("max reqem"+max);
console.log("min reqem"+min);
*/

//6  Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin
/*
let numbers = [-3, 5, 9, -2, 17, 8, 6, -7, 4,0];

let max=numbers[0];
let min=numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]>max) {
        max=numbers[i];
    }else if(numbers[i]<min){
        min=numbers[i];
    }
    
}
let index_of_max=numbers.indexOf(max);
let index_of_min=numbers.indexOf(min);

console.log(index_of_max);
console.log(index_of_min);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]==min){
        numbers[index_of_min]=max;
    }else if(numbers[i]==max){
        numbers[index_of_max]=min;
    }
    
}

console.log(numbers);
*/



//7  Daxil edilən ədədin bütün mümkün bölənlərini ekrana çıxaran proqram tərtib edin
/*
let number=parseInt(prompt("Eded daxil edin:"));

for (let i = 2; i < number; i++) {
    let bolendirse=false;
       if (number%i==0) {
        bolendirse=true;
       }

       if (bolendirse) {
        console.log(i);
       }
}
*/



//8 Verilmiş array daxilində ixtiyari ədədi ekrana çıxaran proqram tərtib edin
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let random = Math.floor(Math.random() * numbers.length);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[random]);
    
}
*/



//9   1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin.

/*
for (let i = 1; i <= 100; i++) {
    let ikinci_reqem = Math.floor(sayi % 10);
    if (ikinci_reqem === 1) {
        console.log(i);
    }
}

*/



//10 Daxil olunmuş ifadənin polindrom olduğunu yoxlayın. 
//  (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)
/*
let number = parseInt(prompt("eded daxil edin"));
let temp=number;
let reversed=0;
while (number>0) {
    reversed=reversed*10+number%10;
    number=Math.floor(number/10);
}

console.log("cevrilmis eded"+reversed);

if (temp==reversed) {
    console.log("Bu eded palindromdur");
}else{
    console.log("Bu eded palindrom deyil");
}
*/

//11 Daxil olunmuş iki sözün anaqram olduğunu yoxlayın
// ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)
/*
w1="oslo";
w2="solo";
let anagram=true;

for (let i = 0; i <w1.length; i++) {
let char =w1[i];

if (!w2.includes(char)) {
    anagram=false;
}
}

if (anagram) {
    console.log("Bu soz anagramdir");
}else{
    console.log("Bu soz anagram deyil");
}
*/

//12 Daxil olunmuş iki eyni uzunluqlu arrayin eyni yerdə duran elementlərinin
// hasilindən ibarət yeni array yaradın. Məsələn [2,5] [3,6] yeni array [6,30]
/*
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

let array3=[];
let product=1;

for (let i = 0; i < array1.length; i++) {
    product=array1[i]*array2[i];
    array3.push(product);
    
}

console.log(array3);
*/

//13 Daxil olunmuş mətndə saitləri silən proqram yaradın
/*
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let text="Daxil olunmuş mətndə saitləri silən proqram yaradın";

for (let i = 0; i < vowels.length; i++) {
   let char=vowels[i];
   if (text.includes(char)) {
    text=text.split(char).join("");
   }
}

console.log(text)

*/


//14	İstifadəçi daxil edən ədəd sayda ixtiyarı simvoldan ibarət string ifadə yaradın
// (məsələn input:5   output: qeg8d)
/*
const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const number=parseInt(prompt("Eded daxil edin"));

let word='';

for (let i = 0; i <number; i++) {
    let random=Math.floor(Math.random()*symbols.length);
    let symbol=symbols[random];
    word+=symbol;
    
}

console.log(word);
*/

//15 Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın
/*
let numbers = [1, 2, 3, 4, 5];
let sum=0;
let length=numbers.length;
let ortaq_mexrec;

for (let i = 0; i < numbers.length; i++) {
    sum=sum+numbers[i];
}

ortaq_mexrec=sum/length;

console.log(ortaq_mexrec);
*/

//16 Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
/*
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const consonants = ['b', 'c', 'ç', 'd', 'f', 'g', 'ğ', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 'ş', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'Ç', 'D', 'F', 'G', 'Ğ', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'V', 'W', 'X', 'Y', 'Z'];
let count_of_vowels=0;
let count_of_consonants=0;
let word=prompt("Bir soz daxil edin");

for (let i = 0; i < word.length; i++) {
    let char=word[i];
    if (vowels.includes(char)) {
        count_of_vowels++;
    }else if(consonants.includes(char)){
        count_of_consonants++;
    }
}

console.log("saitlerin sayi: "+count_of_vowels);
console.log("samitlerin sayi: "+count_of_consonants);
*/

//17 Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın
/*
let number=parseInt(prompt("bir eded daxil edin"));
let sum=0;
for (let i = 1; i<number; i++) {
   if (number%i==0) {
       sum=sum+i;
   }
}

console.log("number: "+number)
console.log("sum: "+sum)

if (sum==number) {
    console.log("Bu murekkeb ededdir");
}else{
    console.log("Bu murekkeb eded deyil");
}
*/


//18 Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
/*
let number=parseInt(prompt("Bir eded daxil edin"));
let sum=0;
 while (number>0) {
    let last_digit=number%10;
    sum=sum+last_digit;
    number=Math.floor(number/10);
 }

 console.log(sum)

 */

 //19 Substring metodunun işini yerinə yetirən funksiya yaradın
/*
 let text = "JavaScript dersleri";
 let result = text.substring(0,10);
 console.log(result)
 */

 //20. indexOf metodunun işini yerinə yetirən funksiya yaradın
/*
 let word="Ensiklopediyalar";
 let index=word.indexOf("l");
 console.log(index)

 */