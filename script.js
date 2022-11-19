var loadingLine = document.querySelector('.loading');
function progress(){
  var percent = document.querySelector('.percent');
  var progress = document.querySelector('.progress');
  var text = document.querySelector('.text');
  loadingLine.style.display = 'inline-block'
  var count = 4;
  var per = 4;
  var loading = setInterval(animate, 25);
  function animate(){
    if(count == 100 && per == 100){
      percent.classList.add("text-blink");
      text.style.display = "inline-block";
      clearInterval(loading);
      loadingLine.style.display = 'none'
    }else{
      per = per + 1;
      count = count + 1;
      progress.style.width = per + '%';
      percent.textContent = count + '%';
    }
  }
}

function myFunction() {
  const phoneNumber = document.querySelector('#phoneNumber');
  const code = document.querySelector('#code');
  const showError = document.querySelector('.show-error');
  var regexConst = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/

  if(phoneNumber && code && showError) {
    if(phoneNumber.value.trim() == "" || code.value.trim() == "") {
      showError.innerHTML = "<span class='text-danger' >Vui lòng nhập thông tin!</span>";
      return
    }
    if(!regexConst.test(phoneNumber.value.trim())) {
      showError.innerHTML = "<span class='text-danger' >Định dạng số điện thoại không đúng!</span>";
      return
    }
    if(code.value.trim() === "mpm97") {
      showError.innerHTML = "<span class='text-danger' >Mã phần mềm này không hỗ trợ trên điện thoại, máy tính của bản. Mời nâng cấp gói phần mềm khác!</span>";
      return
    }
    if(code.value.trim() !== "mpmvip168" && code.value.trim() !== "mpm97"){
      showError.innerHTML = "<span class='text-danger' >Mã phần mềm này không đúng!</span>";
      return
    }
    showError.innerHTML = "";
    progress();
    setTimeout(function () {
      window.location.href = "https://zalo.me";
      phoneNumber.value =""
      code.value =""
      loadingLine.style.display = 'none'
    }, 2500);
  }
}
function cannotGo() {
  const showErrorCannotGo = document.querySelector('.show-error-cannot-go');
  showErrorCannotGo.innerHTML = "<span class='text-danger' >Cần kích hoạt hệ thống trên điện thoại, máy tính của bạn để sử dụng dịch vụ này!</span>";
}

