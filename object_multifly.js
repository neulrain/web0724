const 두리 = {
    이름: '두리',
    나이: 3,
    종족: '고양이'
}

const 석삼 = 두리

석삼.이름='보쌈'
석삼.나이 = 1 // 새로운 값으로 재정의

console.log(JSON.stringify(두리))
console.log(JSON.stringify(석삼)) //주소를 복사해서 추가했기때문에 동일한 값을 가짐