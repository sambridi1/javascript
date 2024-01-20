// var message ={
//     showMessage:function (val){
//         alert(val);
        
//     }
// };
// document.write(message.showMessage("hello"))
// document.write("<br>")

// var person={
//     firstName:"Sambridi",
//     lastName:"Shrestha",
//     age:15,
//     getFullName:function(){
//         return this.firstName +''+this.lastName
//     }
// };
// document.write(person.getFullName())
// document.write("<br>")

// person.firstName="Sambridhi";
// person["lastName"]="Shrestha";
// person.age=20;
// person.getFullName=function(){
//     return this.firstName+''+this.lastName;
// };
// document.write(person.getFullName())
// document.write("<br>")

// //using object constructor
// function emp(id,name,salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
// }
// e=new emp(103,"Vimal Jaiswal",30000);
// document.write(e.id+" "+e.name+""+e.salary);
// document.write("<br>")

// var person={
//     firstname:"Sambridhi",
//     lastName:"Shrestha",
//     age:25,
//     getFullName:function(){
//         return this.firstname+' '+this.lastName
//     },
//     //this is object
//      secondPerson:
//     { address:"ktm",
//     temp_add:"Bkt"}

// };
// document.write(person.getFullName());
// document.write(peron.secondPerson.address)
// document.write("<br>")

// var person={firstName:"John"};
// var anotherPerson=person;
// anotherPerson.firstName="Bill";
// person.firstName;//returns Bill
// document.write(anotherPerson.firstName)
// document.write("<br>")

// var myDate = new Date();
// document.write (myDate.toDateString());//toDatestring method converts date to  string 
// var myDate = new Date ();
// document.write(myDate.toTimeString());//toTimestring method converts the time from the date object to a string 

// document.write("<br>")

// function Person(first,last,age){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
// }
// Person.prototype.address="ktm";
// var man=new Person("sambridhi","uney",22)
// document.write(man.address+""+man.firstname);
// document.write("<br>")

// Date.prototype.myMet=function(){
//     if(this.getMonth()==0){this.myProp="January"};
//     if(this.getMonth()==1){this.myProp="February"};
//     if(this.getMonth()==2){this.myProp="March"};
//     if(this.getMonth()==3){this.myProp="April"};
//     if(this.getMonth()==4){this.myProp="May"};
//     if(this.getMonth()==5){this.myProp="June"};
//     if(this.getMonth()==6){this.myProp="July"};
//     if(this.getMonth()==7){this.myProp="August"};
//     if(this.getMonth()==8){this.myProp="September"};
//     if(this.getMonth()==9){this.myProp="October"};
//     if(this.getMonth()==10){this.myProp="November"};
//     if(this.getMonth()==11){this.myProp="December"};
// };
// var d=new Date();
// d.myMet();
// var monthname =d.myProp;
// document.write(monthname);
// document.write("<br>")
function Student(id,name,address,phone){
   
    this.id=id;
    this.name=name;
    this.address=address;
    this.phone=phone;
  

};
s=new Student (102,"Sambridhi","Thankot",9810172164);
var z=delete(s.address)
document.write(s.address)
// document.write(s.id,""+s.name+""+s.address,s.phone);
console.log(s.address)
    


