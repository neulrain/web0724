//자료를 생성합니다.
const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
},{
    name: 'HTML5 웹프로그램이 입문',
    price: 26000,
    publisher: '한빛아카데미'
}]

//자료를 JSON으로 변환
const json = JSON.stringify(data)
console.log(json)

//JSON 분자열을 다시 자바스크립트 객체로 변환
console.log(JSON.parse(json))