/*
export default 키워드는 한 모듈이 내보내는 기능 중 오직 한개에만 붙일 수 있습니다.
export default가 붙은 기능은 import문으로 불러올 때 중괄호 없이 사용이 가능합니다.



*/

export default interface IPerson {
    name: string
    age: number
}