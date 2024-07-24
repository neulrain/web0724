//객체를 생성합니다.
const object = {
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어",
};

const { name, price } = object;
console.log("#속성 이름 그대로 꺼내서 출력하기");
console.log(name, price); //name 속성과 price속성을 그대로 꺼냄
console.log(""); //한줄 떨어져서 나옴

const { a = name, b = price } = object; //name속성을 a, price속성을 b라는 이름으로 꺼냄
console.log("#다른 이름으로 속성꺼내서 출력하기");
console.log(a, b);
