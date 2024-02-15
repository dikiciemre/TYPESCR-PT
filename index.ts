/*
function CheckYourName(name:string,surname:string){
    console.log(name,surname);
}

CheckYourName("Emre","Dikici");
*/





//! TİP ÖRNEKLERİ
/*
type colors = "red" | "green" | "blue";
type CustomColors = "yellow"|"magenta"|"pink";
type AllColors = colors | CustomColors;

const MyColor:colors = "red";
const ColorArray: (colors|CustomColors)[] = ["blue","green","yellow"];
const CustomAllColors:AllColors[] = ["blue","pink","yellow"];
*/






//! object kullanarak tip oluşturma
/*
type MyExampleObject = {
    name: string;
    age: number;
};

const MyFavoriteObject: MyExampleObject = {
    name: "Emre",
    age: 20
};
*/






/*
//* Bir öğrenci nesnesini temsil eden interface
interface Ogrenci {
    ad: string;
    yas: number;
    okul: string;
    dersler: string[];
}

//* Öğrenci nesnesine uygun bir örnek
const birinciOgrenci: Ogrenci = {
    ad: "Ahmet",
    yas: 20,
    okul: "Lise",
    dersler: ["Matematik", "Fizik", "Kimya"]
};

//* Başka bir öğrenci nesnesine uygun bir örnek
const ikinciOgrenci: Ogrenci = {
    ad: "Ayşe",
    yas: 19,
    okul: "Üniversite",
    dersler: ["Bilgisayar Bilimleri", "İngilizce"]
};

//* Fonksiyon, Ogrenci tipinde bir nesneyi alır ve bilgilerini yazdırır
function ogrenciBilgileriniYazdir(ogrenci: Ogrenci): void {
    console.log(`Ad: ${ogrenci.ad}`);
    console.log(`Yaş: ${ogrenci.yas}`);
    console.log(`Okul: ${ogrenci.okul}`);
    console.log(`Dersler: ${ogrenci.dersler.join(", ")}`);
}

//* Yukarıda oluşturduğumuz öğrenci nesnelerini kullanarak fonksiyonu çağırabiliriz
ogrenciBilgileriniYazdir(birinciOgrenci);
ogrenciBilgileriniYazdir(ikinciOgrenci);

*/








//! iİSİM TİPLEME ÖRNEĞĞİ
/*
//* PERSON İSİMLİ BİR TİP OLUŞTURULDU
type Person = {
    name :string,
    surname:string,
    age:number,
};


//* ANİMAL İSİMLİ BİR TİP OLUŞTURULDU
type animal = {
    age:number,
    race:string,

};

//* PERSONANİMAL İSİMLİ BİR TİP PERSON VE ANİMALIN BİRLEŞTİRİLMESİ İLE OLUŞTURULDU.
type PersonAnimal = animal & Person;


//* HAYVANEMRE İSİMLİ BİR NESNE OLUŞTURULDU
//* PERSON VE ANİMAL TİPİ BİRLEŞMESİ İLE OLUŞTURULDUĞU İÇİN İKİ SINIFA AİT ÖZELLİKLERİ DE KULLANDIK
const HayvanEmre:PersonAnimal = {
    "age":20,
    "name":"Emre",
    "surname": "Dikici",
    "race" :"Etçil",
}
console.log(HayvanEmre);
*/





//! [key] kullanımı
/*
type MyExampleObject = {
    name: string;
    age: number;
    [key: string]: string | number;
};

const MyFavoriteObject: MyExampleObject = {
    name: "Emre",
    age: 20,
    city: "New York",

};
*/





//! INTERFACE
/*
//* Define an interface named 'Person'
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // Optional property
  }
  
  //* Create an object that adheres to the 'Person' interface
  const EmreDikici: Person = {
    firstName: "Emre",
    lastName: "Dikici",
    age: 21,
    
  };
  
  //* Accessing properties
  console.log(EmreDikici.firstName); // Output: John
  console.log(EmreDikici.age); // Output: 30
  */




//! INTERFACE DİZİ ÖRNEK
/*
interface StringArray {
    //* Dizi elemanları sadece string olabilir
    [index: number]: string;
  }
  
  //* StringArray tipinde bir dizi oluşturma
  const colors: StringArray = ["red", "green", "blue"];
  
  //*  Dizi elemanlarına erişim
  console.log(colors[0]); // Output: red
  console.log(colors[1]); // Output: green
  console.log(colors[2]); // Output: blue
  */







  //! FUNCTİON INTERFACE
/*
  interface ICalculate {
    (x: number, y: number): number;
  }
  
  const add: ICalculate = (a, b) => a + b;
  const multiply: ICalculate = (a, b) => a * b;
  */







  //! INTERFACE EXTENDS ETMEK
  /*
interface IShape {
    color: string;
  }
  
  //* Shape interface'ini genişleten başka bir interface
  interface ISquare extends IShape {
    sideLength: number;
  }
  
  //* Square interface'ini takip eden bir nesne
  const square: ISquare = {
    color: "red",
    sideLength: 10,
  };
  */






//! CLASS KULLANIMI
/*
class Animal {
    //* Sınıf özellikleri
    name: string;
    age: number;
  
    //* Kurucu (constructor) method
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    //* Sınıf methodu
    makeSound() {
      console.log("Generic animal sound");
    }
  }
  
  //* Sınıfın bir örneği (instance) oluşturma
  const cat = new Animal("Whiskers", 3);
  
  //* Özelliklere ve methodlara erişim
  console.log(cat.name); // Output: Whiskers
  console.log(cat.age);  // Output: 3
  cat.makeSound();       // Output: Generic animal sound
  */






  /*
  class Car {
    private speed: number;
  
    constructor(speed: number) {
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
    }
  
    getSpeed() {
      return this.speed;
    }
  }
  
  const myCar = new Car(50);
  myCar.accelerate();
  console.log(myCar.getSpeed()); // Output: 60
  //* console.log(myCar.speed);    // Hata! 'speed' private olarak tanımlı
  */





//? ABSTRACT CLASS KULLANIMI
/*
  abstract class Sekil {
    abstract alanHesapla(): number;
}

class Kare extends Sekil {
    kenarUzunlugu: number;

    constructor(kenarUzunlugu: number) {
        super();
        this.kenarUzunlugu = kenarUzunlugu;
    }

    alanHesapla(): number {
        return this.kenarUzunlugu * this.kenarUzunlugu;
    }
}

const kare = new Kare(5);
console.log(kare.alanHesapla()); // Çıktı: 25
*/




//? PROTECTED KULLANIMI
/*
class Hayvan {
  protected ses: string;

  constructor(ses: string) {
      this.ses = ses;
  }

  protected sesiSoyle(): void {
      console.log(this.ses);
  }
}

class Kedi extends Hayvan {
  constructor() {
      super("Miyav");
  }

  sesiSoyle(): void {
      //* Bu metodun içinde 'ses' alanına erişebiliriz.
      this.sesiSoyle();
  }
}

const kedi = new Kedi();
kedi.sesiSoyle(); // Hata: 'sesiSoyle' metodu protected olduğu için doğrudan erişilemez.
*/





//? OVERRIDE KULLANIMI
/*
class Personel {
    calis(): void {
        console.log("Personel çalışıyor");
    }
}

class Mudur extends Personel {
    override calis(): void {
        console.log("Müdür çalışıyor");
    }
}

const mudur = new Mudur();
mudur.calis(); // Çıktı: Müdür çalışıyor

*/


  //!ABSTRACT CLASS KULLLANIMI
  /*
  abstract class Shape {
    abstract getArea(): number;
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super();
    }
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.getArea()); // Output: 78.54
*/







//! YARDIMCI TİPLER

//? OMİT
/*
interface User {
    id: number;
    name: string;
    age: number;
  }
  
  type UserInfo = Omit<User, "id">;
  //* Burada 'id' özelliği hariç tutularak 'UserInfo' türü oluşturuldu.
  */





//? EXCLUDE
/*
  type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>;
//* Burada tek sayılar hariç tutularak 'EvenNumbers' türü oluşturuldu.
*/



//? EXTRACT
/*
type Colors = "red" | "green" | "blue";
type PrimaryColors = Extract<Colors, "red" | "blue">;
//* Burada sadece "red" ve "blue" renkleri içeren 'PrimaryColors' türü oluşturuldu.
*/



//? PİCK
/*
interface Person {
    name: string;
    age: number;
    address: string;
  }
  
  const personSubset: Pick<Person, "name" | "address"> = {
    name: "Alice",
    address: "123 Main St",
  };
  //* Burada sadece 'name' ve 'address' özelliklerine sahip bir nesne oluşturuldu.
  */






  //! ENUM KULLANIMI
/*
//* Temel bir enum tanımı
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }
  
  //* Enum değerini kullanma
  let playerDirection: Direction = Direction.Right;
  console.log(playerDirection); // Output: 3
*/ 



//? ENUMLARA DEĞER ATAMAK
/*
enum Day {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

//* Enum değerlerini kullanma
let today: Day = Day.Wednesday;
console.log(today); // Output: 3

*/





/*
enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

const currentMonth: Month = Month.February;
console.log(currentMonth); // Output: February
*/






/*
 enum ProductCategory {
  Electronics,
  Clothing,
  Books,
  Furniture,
}

function getProductCategoryLabel(category: ProductCategory): string {
  switch (category) {
    case ProductCategory.Electronics:
      return "Electronics";
    case ProductCategory.Clothing:
      return "Clothing";
    case ProductCategory.Books:
      return "Books";
    case ProductCategory.Furniture:
      return "Furniture";
    default:
      return "Unknown";
  }
}

const productCategoryLabel = getProductCategoryLabel(ProductCategory.Books);
console.log(productCategoryLabel); // Output: Books
*/





//! CONDITIONAL TYPES
/*
type Check<T> = T extends string ? "string type" : "non-string type";

let result1: Check<string>; // "string type"
let result2: Check<number>; // "non-string type"
*/



//? GENERICS İLE KULLANIMI
//* Bu örnekte, ArrayOrObject adlı bir conditional type, bir türün dizi (Array<any>) olup olmadığını kontrol eder ve buna göre "array" veya "object" döner.
/*
type ArrayOrObject<T> = T extends Array<any> ? "array" : "object";

let type1: ArrayOrObject<number[]>; // "array"
let type2: ArrayOrObject<{ key: string }>; // "object"
let type3: ArrayOrObject<string>; // "object"
*/







//! INFER KULLANIMI
//* Bu örnekte, ExtractType adlı generic bir tür tanımlanmıştır. infer U ifadesi, T tipinin bir dizi (Array) olduğu durumda, dizinin eleman türünü temsil eden U'yu çıkarmak için kullanılır.
/*
type ExtractType<T> = T extends Array<infer U> ? U : never;

let element: ExtractType<number[]>; // number
*/





//* Bu örnekte, ElementType adlı bir conditional type tanımlanmıştır. Fonksiyon içinde, T tipinin bir dizi olduğunu kontrol eder ve infer U kullanarak dizinin eleman türünü çıkarır.
//* infer, tip parametrelerini kullanırken belirsizliği gidermeye yardımcı olur ve kodunuzu daha genel ve esnek hale getirir.
/*
type ElementType<T> = T extends Array<infer U> ? U : never;

function logFirstElement<T>(arr: T) {
  if (Array.isArray(arr)) {
    const firstElement: ElementType<T> = arr[0];
    console.log(firstElement);
  }
}

logFirstElement([1, 2, 3]); // 1
*/



//! TYPE PREDICATE 
/*
class Hayvan {
  ad: string;

  constructor(ad: string) {
      this.ad = ad;
  }
}

class Kopek extends Hayvan {
  cins: string;

  constructor(ad: string, cins: string) {
      super(ad);
      this.cins = cins;
  }
}

function kopekMi(hayvan: Hayvan): hayvan is Kopek {
  return (hayvan as Kopek).cins !== undefined;
}

const benimEvcil: Hayvan = new Kopek("Buddy", "Golden Retriever");

if (kopekMi(benimEvcil)) {
  //* Bu blok içinde TypeScript, 'benimEvcil'in bir Kopek olduğunu bilir
  console.log(benimEvcil.cins);
} else {
  console.log("Köpek değil");
}
*/





//! TEMPLATE LİTERAL TYPES
/*
type AdSoyad = "John" | "Jane";
type Mesaj = `Merhaba, ${AdSoyad}!`;

const mesaj1: Mesaj = "Merhaba, John!"; // Geçerli
const mesaj2: Mesaj = "Merhaba, Jane!"; // Geçerli
const mesaj3: Mesaj = "Merhaba, Alex!"; // Hata: 'Alex' tipi 'AdSoyad' tipine uymuyor.
*/





/*
type Renkler = "Kırmızı" | "Mavi" | "Yeşil";
type RenkliDizgi<T extends Renkler> = `${T} Renkli`;

const kirmiziDizgi: RenkliDizgi<"Kırmızı"> = "Kırmızı Renkli"; // Geçerli
const maviDizgi: RenkliDizgi<"Mavi"> = "Mavi Renkli"; // Geçerli
const yesilDizgi: RenkliDizgi<"Yeşil"> = "Yeşil Renkli"; // Geçerli
const sarıDizgi: RenkliDizgi<"Sarı"> = "Sarı Renkli"; // Hata: 'Sarı' tipi 'Renkler' tipine uymuyor.

console.log(kirmiziDizgi);
console.log(maviDizgi);
console.log(yesilDizgi);
console.log(sarıDizgi);
*/





//! FUNCİTON OVERLOADING

//? Parametre Tipine Göre Overloading
/*
//* Fonksiyon overloading
function topla(x: number, y: number): number;
function topla(x: string, y: string): string;
function topla(x: any, y: any): any {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    } else {
        throw new Error('Parametre tipleri uyumsuz!');
    }
}

//* Kullanım
console.log(topla(5, 3));       // Çıktı: 8
console.log(topla("Mer", "haba")); // Çıktı: Merhaba
//* Hatalı kullanım:
//* console.log(topla(5, "Merhaba")); // Hata: Parametre tipleri uyumsuz!
*/



//? Parametre Sayısına Göre Overloading

/*
//* Parametre sayısına göre overloading
function yazdir(text: string): void;
function yazdir(text: string, repeatCount: number): void;
function yazdir(text: string, repeatCount?: number): void {
    if (repeatCount === undefined) {
        console.log(text);
    } else {
        for (let i = 0; i < repeatCount; i++) {
            console.log(text);
        }
    }
}

//* Kullanım
yazdir("Merhaba");           //* Çıktı: Merhaba
yazdir("Selam", 3);          //* Çıktı: Selam Selam Selam
//* Hatalı kullanım:
//* yazdir(5); // Hata: Parametre tipleri uyumsuz!
*/


