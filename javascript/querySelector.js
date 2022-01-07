document.querySelector("#some-id > tbody:nth-child(2) > tr > td:nth-child(1)") // 테이블의 특정 컬럼의 필드값 가져오기.
document.querySelectorAll("#some-id > tbody > tr > td:nth-child(1)") //테이블의 특정 컬럼의 전채 행리스트 가져오기

//get all inputs with the attribute "value" and has the attribute "value" that is not blank.
document.querySelectorAll('input[value][type="checkbox"]:not([value=""])');
