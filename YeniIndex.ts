//! TİP ÖRNEKLERİ
/*
type Peoples = "Mustafa"|"Emre"|"Dikici";
type OtherPeoples = "Faruk"|"Güllüoğlu";

type AllOfPeoples = Peoples | OtherPeoples;

const People1: Peoples = "Mustafa";
const People2: OtherPeoples = "Faruk";
const People3:AllOfPeoples = "Emre"
const People4: (Peoples|AllOfPeoples)[] = ["Emre","Faruk","Mustafa"];

console.log(People1 + "\n" + People2 + "\n" + People3 + "\n" + People4);
*/
/*
"Mustafa
Faruk
Emre
Emre,Faruk,Mustafa" 
*/

import { type } from "os";
import { Interface } from "readline";


//? ******************************************************************************** */



//! object kullanarak tip oluşturma
/*
type MyObject =  {
    name : string
    surname : string
    age? : number | string 
};

const MyObjectExample : MyObject = {
    name : "Emre",
    surname : "Dikici",
    age :23
};

var MyValue = MyObjectExample.name + MyObjectExample.surname;
console.log(MyValue);
*/
/* "EmreDikici"  */




//? ******************************************************************************** */



/*
type WaterAnimal = {
    name : string
    age : number
};

type IslandAnimal = {
    TailLength? : number
    ToothCount : number
};

type ZOO = WaterAnimal & IslandAnimal;

const Dolphin : ZOO ={
    name : "Yunus",
    age : 35,
    ToothCount: 13,
};

var DolphinInfoVariable = Dolphin.name + "\n" + Dolphin.age + "\n" + Dolphin.ToothCount;
console.log(DolphinInfoVariable);
*/
/*
"Yunus
35
13" 
*/




//? ******************************************************************************** */



//! INTERFACE 
/*
interface IBirds  {
    name : string,
    TailColor : string,
    BeakColorLevel : number,
};

const PaşaBird : IBirds = {
    name: "Paşa",
    TailColor: "Yellow",
    BeakColorLevel: 4,
};

var Variable_For_PaşaBirds = PaşaBird.name + "\n" + PaşaBird.BeakColorLevel + "\n" + PaşaBird.TailColor;
console.log(Variable_For_PaşaBirds);
*/
/*
"Paşa
4
Yellow" 
*/



//? ******************************************************************************** */



//! INTERFACE EXTENDS 
/*
interface IGeometric_Shapes {
    Edge : number;
};

interface ISquare extends IGeometric_Shapes {
    Point : number;
};

interface ITriangle extends IGeometric_Shapes {}

let Square :ISquare = {
    Edge : 4,
    Point : 4,
};

let Triangle : ITriangle = {
    Edge: 3,
};

console.log("For Triangle: " + Triangle.Edge + "\n" + "\n" + "For Square: " + Square.Edge + "\t" + Triangle.Edge );
*/
/*
"For Triangle: 3

For Square: 4 3"
*/



//? ******************************************************************************** */


//! CLASS EXTENDS 
/*
class People {
    Name: string;
    Surname :string;

    constructor (Name:string, Surname:string){
        this.Name=Name;
        this.Surname = Surname;
    }

    People_Make_Sound(Name:string){
        console.log(this.Name + "\t" + "Said Something !");
    }
}


class Animal extends People{
    Age: number;

    constructor(Age: number, Name: string, Surname: string){
        super(Name,Surname);
        this.Age = Age;
    }
}

const MyPet = new Animal(13,"Paşa","Dikici");
var Variable_Of_Paşa = ( MyPet.Name + "\n" + MyPet.Surname +"\n" + MyPet.Age );

console.log(Variable_Of_Paşa+"\n");
MyPet.People_Make_Sound(MyPet.Name);
*/

/*
"Paşa
Dikici
13
" 

"Paşa	Said Something !" 
 */



//? ******************************************************************************** */




//! OMİT 
/*
interface People{
    Name : string,
    Age : number,
};

type PeopleInfo = Omit<People , "Age">

const PeopleExample : PeopleInfo = { 
    Name: "Emre"
 };

console.log(PeopleExample.Name);
*/
/*
"Emre" 
*/




//? ******************************************************************************** */




//! EXCLUDE ()
/*
type People =  "Mustafa" | "Emre"| "23" | "Example" ; 

type PeopleInfo = Exclude<People, "Mustafa" |"23">;

const MyPeople:PeopleInfo = "Emre" ;

console.log(MyPeople);
*/




//? ******************************************************************************** */




//! EXTRACT
/*
type People =  "Mustafa" | "Emre"| "23" | "Example" ; 

type PeopleInfo = Extract<People, "Mustafa" |"23">;

const MyPeople:PeopleInfo = "Mustafa" ;

console.log(MyPeople);
*/




//? ******************************************************************************** */



//! PİCK
/*
interface People {
    Name: string,
    Surname : string,
    Age : Number,
    Siblings : number,
    Marriage : String,
};


type PeopleInfo = Pick<People,"Siblings" | "Marriage">;

const People_Johnny:PeopleInfo = {
    Siblings: 3,
    Marriage: "true",
};


if(People_Johnny.Marriage === "true"){
    People_Johnny.Marriage = " Unfortunately, YES";
}else if(People_Johnny.Marriage === "false"){
    People_Johnny.Marriage = "NO";
}else{
    console.log("hasn't decided yet");
}


console.log("How Many Siblings Do You Have ? ---> " + People_Johnny.Siblings + "\n"+ "Are You Married ? ---> " + People_Johnny.Marriage);
*/




//! CONDITIONAL TYPES
/*
type IsString<T> = T extends string ? "This is string" : "This isn't string";

var Variable_One: IsString<23> = "This isn't string" ;

console.log(Variable_One);
*/



