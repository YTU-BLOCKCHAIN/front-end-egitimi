/**
 * Javascript eğitimi Hafta 1
 */
/* ----------------------------------------------------------------- */
//DEĞİŞKENLER:
let name = "ytü"; //string
let age = 2; //Number
let a = 2.54; //Number
let isHere = true; //boolean

//ARRAY:

// Javascript'te Arrayler, birden fazla değeri sıralı bir şekilde tutan veri yapılarıdır
let inClass = ["Ahmet", "Mehmet", "Can"];
console.log(inClass[0]); // "Ahmet"
console.log(inClass[2]); // "Can"
console.log(inClass[6]); //Undefined

//let : Değişkenin değeri sonradan değiştirilebilir.
//const : değişkenin değeri başlangıçta atanır ve sonradan değiştirilemez
let num1 = 10;
console.log("num1", num1); // 10
num1 = 12;
num1 = num1 + 1;
num1++;
console.log("num1", num1); // 14

const num2 = 20;
console.log(num2);
// num2 = 25; // Program hata verir
// console.log(num2);

/* ----------------------------------------------------------------- */

//OBJECT:
//JavaScript'te objeler, anahtar-değer çiftlerinden oluşan yapılar olarak tanımlanabilir ve
//bu yapılar sayesinde verileri ve işlevselliği bir arada tutabilirsiniz.
//JavaScript objeleri, kullanımı kolay ve esnek olan güçlü yapılar sunar.
//Objeler, veri saklamak, yapılandırma ayarlarını tutmak, kodu modüler hale getirmek ve daha birçok amaç için kullanılabilir.
//İşte JavaScript objeleri hakkında bazı temel bilgiler ve örnekler:

const araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020,
  renk: "Mavi",
};

//Özelliklere Erişim
console.log(araba.marka); // "Toyota"
console.log(araba["model"]); // "Corolla"

//Özelliklerin Değiştirilmesi
araba.yil = 2021;
araba["renk"] = "Kırmızı";

//Yeni Özellik Eklemek
araba.vites = "Otomatik";
console.log(araba.vites); // "Otomatik"

//Özellik Silmek
delete araba.renk;
console.log(araba.renk); // undefined

//Metodlar
const kisi = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  tamAdi: function () {
    return this.ad + " " + this.soyad;
  },
};

//Objeler içinde tanımlanan metodlar, objenin diğer özelliklerine this anahtar kelimesi aracılığıyla erişebilir.
// this, metodun ait olduğu objeyi referans

console.log(kisi.tamAdi()); // "Ahmet Yılmaz"

/* ----------------------------------------------------------------- */

// FONKSİYONLAR:
// Fonksiyonlar, ileride çağırıldığında içinde tanımlanan kod parçasını çalıştıran yapılardır.
// Bir işlemi birden fazla yerde yapacaksak onu hazır bir fonksiyon haline getiririz

function greet() {
  console.log("Welcome");
}

greet();

//Parantez içine çağrılırken bazı değerler verilip fonksiyonda kullanılabilir
function PrintAdd(num1, num2) {
  console.log(num1 + num2);
}

PrintAdd(3, 3);

//return, fonksiyon içindeki bir değişkenin değerini,fonksiyon çağrıldığı yerde dışarı verir,
//örneğin fonksiyon çalıştıktan sonra hesaplanan bir değeri bir değişkene eşitleyip sonra kullanmak isteyebiliriz

function add(num1, num2) {
  return num1 + num2;
}

const sonuc = add(3, 4);
console.log(sonuc); //7

/* ----------------------------------------------------------------- */

// OPERATÖRLER

// Ternary (? :) Operatörü
//Ternary operatörü, üç operand alır ve if-else yapısına benzer şekilde çalışır.

// const sayi = 10;
const sonuc1 = sayi > 5 ? "Sayı 5'ten büyük." : "Sayı 5'ten küçük veya eşit.";
console.log(sonuc1);

// ! ve !! Operatörleri
//!var: var değişkeni "truthy" (doğru kabul edilen değer) ise false döner, "falsy" (yanlış kabul edilen değer) ise true döner.

const var1 = null;
console.log(!var1); // true

//Karşılaştırma Operatörleri
//>: Büyüktür.
//<: Küçüktür.
//>=: Büyük eşittir.
//<=: Küçük eşittir.
//===: Hem değer hem de tür açısından eşitlik kontrolü yapar.
//!==: Hem değer hem de tür açısından eşitsizlik kontrolü yapar.
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 === "5"); // false, çünkü türler farklı
console.log(5 !== "5"); // true, çünkü biri sayı diğeri string

/* ----------------------------------------------------------------- */

//KOŞULLAR
//Sadece belli koşullar sağlandığında çalışmasını istediğimiz kodları bu şekillerde kullanabiliriz:
//1. Basit if Kullanımı

const sayi = 10;
if (sayi > 5) {
  console.log("Sayı 5'ten büyüktür.");
}

//2. if-else Kullanımı

// const sayi = 4;
if (sayi > 5) {
  console.log("Sayı 5'ten büyüktür.");
} else {
  console.log("Sayı 5'ten küçük veya eşittir.");
}

//3. if-else if-else Kullanımı
// const sayi = 15;
if (sayi > 15) {
  console.log("Sayı 15'ten büyüktür.");
} else if (sayi < 15) {
  console.log("Sayı 15'ten küçüktür.");
} else {
  console.log("Sayı 15'e eşittir.");
}

//4. İç İçe if Kullanımı

// const sayi = 10;
if (sayi > 0) {
  if (sayi % 2 === 0) {
    console.log("Sayı pozitif ve çifttir.");
  } else {
    console.log("Sayı pozitif ve tektir.");
  }
} else {
  console.log("Sayı negatiftir veya 0'dır.");
}

/* ----------------------------------------------------------------- */

// DÖNGÜLER:
//1. while Döngüsü
//while döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu yürütür.
//Koşul her kontrol edildiğinde doğruysa, döngü devam eder; yanlışsa, döngü sona erer.
//Çalışma sayısı önceden belli değildir, Koşul bozulana kadar çalışır

let i = 0;
const numbers = [1, 2, 3, 4, 5];
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

//2. for Döngüsü
//for döngüsü, başlangıç, bitiş koşulu ve artış/değişim ifadesi olmak üzere üç bileşene sahiptir ve
//bu bileşenler döngünün nasıl çalıştırılacağını belirler.

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//Bu döngüde numbers dizisi içinde dolaşır ve her çalışmasında sırayla elemanları number olarak verir, üstteki kodla aynı işi yapar
for (let number of numbers) {
  console.log(number);
}

/* ----------------------------------------------------------------- */

// NULL ve UNDEFINED

//1. null
//null, bir değişkenin değerinin bilinmediğini veya tanımlanmadığını belirtir.
let x = null;
console.log(x); // null

//2. undefined
//undefined, bir değişkenin tanımlı olmasına rağmen değer atanmamış olduğunu belirtir.

let degisken;
console.log(degisken); // undefined

function testFunc() {}
console.log(testFunc()); // undefined

const obj = { ad: "Ahmet" };
console.log(obj.soyad); // undefined

//Köken: undefined, JavaScript motoru tarafından değişkenlere veya bilinmeyen özelliklere otomatik olarak atanır.
//null, ise bir değerin bilinçli olarak "boş" veya "yok" olarak ayarlandığını göstermek için programcı tarafından atanır.

/* ----------------------------------------------------------------- */

//HAZIR METODLAR:
//Javascriptin bizler için önceden hazırladığı bazı fonksiyonlar var.Array için hazırlanmış methodlar:

//Array.filter() Metodu
//filter() metodu, bir dizi üzerinde belirli bir koşula uyan elemanları filtrelemek için kullanılır.
const sayilar = [1, 2, 3, 4, 5, 6];
const ciftSayilar = sayilar.filter(function (sayi) {
  return sayi % 2 === 0;
});
console.log(ciftSayilar); // [2, 4, 6]

//Array.map() Metodu
//map() metodu, bir dizi üzerinde belirli bir işlemi uygulayarak yeni bir dizi oluşturmak için kullanılır.
const kareler = sayilar.map(function (sayi) {
  return sayi * sayi;
});
console.log(kareler); // [1, 4, 9, 16, 25, 36]

//Array.slice() Metodu
//slice() metodu, bir dizinin belirli bir kısmını almak için kullanılır.
const dilim = sayilar.slice(2, 5);
console.log(dilim); // [3, 4, 5]

//Array.reduce() Metodu
//reduce() metodu, bir dizi üzerinde belirli bir işlemi uygulayarak tek bir sonuç elde etmek için kullanılır.
const toplam = sayilar.reduce(function (oncekiDeger, suankiDeger) {
  return oncekiDeger + suankiDeger;
}, 0);

console.log(toplam); // 21

//Array.find() Metodu
//find() metodu, bir dizi üzerinde belirli bir koşula uyan ilk elemanı bulmak için kullanılır.
const buyukOlan = sayilar.find(function (sayi) {
  return sayi > 4;
});
console.log(buyukOlan); // 5

//Array.every() ve Array.some() Metodları
//every() metodu, bir dizi üzerinde belirli bir koşula uyan tüm elemanları kontrol etmek için kullanılır.
//some() metodu, bir dizi üzerinde belirli bir koşula uyan en az bir elemanın olup olmadığını kontrol etmek için kullanılır.
const hepsiCift = sayilar.every(function (sayi) {
  return sayi % 2 === 0;
});
console.log(hepsiCift); // false
const enAzBirCift = sayilar.some(function (sayi) {
  return sayi % 2 === 0;
});
console.log(enAzBirCift); // true
