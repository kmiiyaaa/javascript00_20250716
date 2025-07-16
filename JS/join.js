//회원 가입 양식 유효성 체크

function checkJoin() {
  //checkjoin대신 내가 하고싶은거 입력해도 가능
  if (document.joinForm.memberid.value == "") {
    alert("아이디는 필수 입력사항입니다. 확인 후 다시 입력하세요.");
    document.joinForm.memberid.focus(); // 해당 input폼으로 커서 이동
    return false;
  }

  if (document.joinForm.memberid.value.length < 4) {
    alert("아이디는 4글자 이상 입력세요");
    document.joinForm.memberid.focus();
  }

  var idcheck = /^[ㄱ-ㅎ|가-힣]+$/;

  if (idcheck.test(document.joinForm.memberid.value)) {
    alert("아이디는 한글입력 불가입니다");
  }
  if (document.joinForm.memberid.value.length > 16) {
    alert("아이디는 16글자 미만 입력세요");
    document.joinForm.memberid.focus();
  }

  if (document.joinForm.memberpw.value == "") {
    alert("비밀번호는 필수 입력사항 입니다.");
    document.joinForm.memberpw.focus();
    return false;
  }

  if (document.joinForm.membername.value == "") {
    alert("이름은 필수 입력사항 입니다.");
    document.joinForm.membername.focus();
    return false;
  }

  if (document.joinForm.memberemail.value == "") {
    alert("이메일은 필수 입력사항입니다. 확인 후 다시 입력하세요.");
    document.joinForm.memberemail.focus();
    return false;
  }

  if (document.joinForm.memberintro.value.length <= 10) {
    alert("자기소개는 11자 이상 작성해주세요.");
    document.joinForm.membernintro.focus();
    return false;
  }

  return true;
}
