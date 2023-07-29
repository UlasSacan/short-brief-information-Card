var info = ["JavaScript, web sayfalarında etkileşimli öğeler oluşturmak için kullanılan bir programlama dilidir. ",

"JavaScript, tarayıcının içinde çalışır ve HTML ve CSS ile birlikte kullanılarak web sayfalarının dinamikleştirilmesine olanak tanır.",

"JavaScript, değişkenler, fonksiyonlar, döngüler, koşullu ifadeler ve diğer programlama yapıları gibi birçok özelliğe sahiptir.",

" JavaScript, birçok popüler web uygulamasının arkasındaki teknolojidir. Örneğin, Facebook, Twitter ve Google Maps gibi uygulamalar JavaScript kullanır.",

"JavaScript, öğrenmesi kolay bir dil olmasına rağmen, kapsamlı bir dil olduğu için, öğrenmek için zaman ve pratik gerektirir.",

"JavaScript, birçok farklı alanda kullanılabilir. web geliştirme, oyun geliştirme, mobil uygulama geliştirme, masaüstü uygulama geliştirme, yapay zeka ve makine öğrenimi gibi alanlarda kullanılabilir. ",

"JavaScript, birçok farklı çerçeve ve kütüphane ile birlikte kullanılabilir. Örneğin, React, Angular, Vue.js, Node.js, Express.js, jQuery gibi popüler çerçeve ve kütüphaneler JavaScript ile çalışır.",

"JavaScript, sürekli olarak gelişen bir dil olduğu için, yeni özellikler ve güncellemelerle birlikte sürekli olarak güncellenir. Bu nedenle, öğrenmeye devam etmek ve güncel kalmanız önemlidir.",

];

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("closebtn");
const content = document.getElementById("content");
const contentBox = document.getElementById("content-box")
const opened = document.getElementById("opened-div");
const closed = document.getElementById("closed");
const refresh = document.getElementById("refresh");

openBtn.addEventListener("click", function () {
    opened.classList.remove("openedd");
    opened.classList.add("hidden");
    closed.classList.remove("hidden");
    
    info.forEach(function(){
        var rndm = info[Math.round(Math.random() * info.length)];
        content.innerHTML = rndm;
      
    });
  
});

refresh.addEventListener("click" , function(){
    info.forEach(function(){
        var rndm = info[Math.round(Math.random() * info.length)];
        content.innerHTML = rndm;
        
    });
  
}); 

closeBtn.addEventListener("click", function () {
    closed.classList.add("hidden");
    opened.classList.add("openedd");
});
