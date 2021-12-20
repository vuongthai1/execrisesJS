// Có mảng bên dưới, các bạn làm theo từng task.
const arrays = [
  {
    id: 1,
    name: "user 1",
    age: 22,
  },
  {
    id: 2,
    name: "user 2",
    age: 21,
  },
  {
    id: 3,
    name: "user 3",
    age: 23,
  },
  {
    id: 4,
    name: "user 4",
    age: 24,
  },
];

// task 1: Add mới 1 user vào đầu mảng
arrays.unshift({
  id: 0,
  name: "user 0",
  age: 20,
});
console.log(arrays); 
// task 2: Add mới 1 user vào cuối mảng
arrays.push({
  id: 0,
  name: "user 0",
  age: 20,
});
console.log(arrays); 
// task 3: add nhiều user vào mảng
arrays.push({
  id: 0,
  name: "user 0",
  age: 20,
},
{
  id: 0,
  name: "user 0",
  age: 20,
}
);
// task 4: xoá 1 user ra khỏi mảng
  var deleteArray = arrays.shift();
  console.log(deleteArray);
// task 5: lọc ra các user có age >= 22;
var filterArr = arrays.filter(function(arrays){
  return arrays.age > 22;
})
console.log(filterArr);
// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
arrays.map(function(element){
  return element.class='pnv22b';
});
console.log(arrays)

// task 7: Tìm ra 1 user có age = 23
var filterArr = arrays.filter(function(arrays){
  return arrays.age == 23;
})

// task 8: Sử dụng vòng lặp for để lấy ra các user có age >= 23
var Arr=[];
for(let i = 0; i< arrays.length; i++){
  if(arrays[i].age>=23){
  Arr.push(arrays[i]);
  } 
}
console.log(Arr);

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
var Arr=[];
for(let i = 0; i< arrays.length; i++){
 for(let j=0; j<arrayIds.length; j++){
	 if(arrays[i].id==arrayIds[j]){
		 Arr.push(arrays[i]);
	 }
 }
}
console.log(Arr);

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
var filterArr = arrays.filter(function(arrays){
  return arrays.age;
})

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)

// task 12: lấy ra phần tử cuối cùng của mảng trên
let arr=arrays[arrays.length-1]

// task 13: lấy ra phần tử đầu tiên của mảng trên
let arr=arrays[0]

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};
  
  // task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
  const keys=Object.keys(person)
  // task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
  const values= Object.values(person)
  // task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
  const objects= Object.assign({},person)
  // task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
  const arrString = ["a", "b", "c"];
  objects.age=100
// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
  const arrBoolean = [true, true, false];
// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
var users  = {
  age: 23,
  get getter() {
    return this.age;
  },
  set setter(age) {
    this.age = age;
  }
}


// setter 
users.age = 34;
// task 22:
const newFunction = (user) => {
  // xử lý function này khi truyền params user vào là thông tin của user
  // kết quả return mong đợi là một string => "Hello User - age: 21"
};

// task 23:
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
let numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";

// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
