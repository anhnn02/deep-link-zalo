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

  if(phoneNumber && code && showError) {
    if(phoneNumber.value.trim() == "" || code.value.trim() == "") {
      showError.innerHTML = "<span class='text-danger' >Vui lòng nhập thông tin!</span>";
      return
    }
    if(code.value.trim() === "mpm97") {
      showError.innerHTML = "<span class='text-danger' >Mã phần mềm này không hỗ trợ trên điện thoại, máy tính của bản. Mời nâng cấp gói phần mềm khác!</span>";
      return
    }
    if(code.value.trim() !== "quang123" && code.value.trim() !== "mpm97"){
      showError.innerHTML = "<span class='text-danger' >Mã phần mềm này không đúng!</span>";
      return
    }
      showError.innerHTML = "";
      progress();
      loadingLine.style.display = 'inline-block'
      setTimeout(function () {
        phoneNumber.value =""
        code.value =""
        window.location.href = "https://zalo.me";
      }, 2500);
  }
}

