// Khi roll chuột đến mục nào thì mục đấy trên thanh topnav sẽ đổi màu
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if ( document.documentElement.scrollTop <= 200) {
    document.getElementById("gioi_thieu").style.color = "blue";
    document.getElementById("uu_loi").style.color = "white";
    document.getElementById("hoc_ntn").style.color = "white";
    document.getElementById("danh_gia").style.color = "white";
    document.getElementById("danh_ky_ta").style.color = "white";
  } else if(document.documentElement.scrollTop <= 1000) {
    document.getElementById("gioi_thieu").style.color = "white";
    document.getElementById("uu_loi").style.color = "blue";
    document.getElementById("hoc_ntn").style.color = "white";
    document.getElementById("danh_gia").style.color = "white";
    document.getElementById("danh_ky_ta").style.color = "white";
  }else if(document.documentElement.scrollTop <= 1900) {
    document.getElementById("gioi_thieu").style.color = "white";
    document.getElementById("uu_loi").style.color = "white";
    document.getElementById("hoc_ntn").style.color = "blue";
    document.getElementById("danh_gia").style.color = "white";
    document.getElementById("danh_ky_ta").style.color = "white";
  }else if(document.documentElement.scrollTop <=2900) {
    document.getElementById("gioi_thieu").style.color = "white";
    document.getElementById("uu_loi").style.color = "white";
    document.getElementById("hoc_ntn").style.color = "white";
    document.getElementById("danh_gia").style.color = "blue";
    document.getElementById("danh_ky_ta").style.color = "white";
  }else{
    document.getElementById("gioi_thieu").style.color = "white";
    document.getElementById("uu_loi").style.color = "white";
    document.getElementById("hoc_ntn").style.color = "white";
    document.getElementById("danh_gia").style.color = "white";
    document.getElementById("danh_ky_ta").style.color = "blue";
  }
}