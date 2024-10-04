// 1.Answer

var arr=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
console.log(arr.reverse())

// 2.Answer

var name= "ashokgoud";
var reversed="";
for(var i = name.length - 1;i>=0;i--){
    reversed+=name[i];
}
console.log(reversed);

// alternate methods

var name="ashokgoud";
console.log(name.split("").reverse().join(""));

// 3.Answer

var a= [1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(b=0;b<a.length;b++){
    var c=a[a.length-2];
    console.log(c.age)
    break;
}

