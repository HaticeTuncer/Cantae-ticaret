
// window.onload = async function(){
//     let OrijinalData=await fetch("data.json");
//     let TransferedData=await OrijinalData.json();

//     console.log(TransferedData);
// }

const veri=[
    {"id":"1","urunisim":"Gold Abiye Çanta lorem impus","urunfiyat":250,"kategori":"AbiyeÇanta","src":"./img/abiyeçanta1.jpeg"},
    {"id":"2","urunisim":"Kırmızı zincir Askılı Abiye Çanta","urunfiyat":500,"kategori":"AbiyeÇanta","src":"./img/abiyeçanta2.png"},
    {"id":"3","urunisim":"Siyah Zincir Askılı Abiye Çanta","urunfiyat":500,"kategori":"AbiyeÇanta","src":"./img/abiyeçanta3.png"},
    {"id":"4","urunisim":"Bej Kulplu Zincir Askılı Abiye Çanta","urunfiyat":750,"kategori":"AbiyeÇanta","src":"./img/abiyeçanta4.jpeg"},
    {"id":"5","urunisim":"Küçük Boy Siyah Tekerlek Bavul","urunfiyat":800,"kategori":"Bavul","src":"./img/bavul1.jpeg"},
    {"id":"6","urunisim":"Büyük Boy Kırmızı Kumaş Tekerlek Bavul","urunfiyat":1200,"kategori":"Bavul","src":"./img/bavul2.jpeg"},
    {"id":"7","urunisim":"Gold şerit Detaylı Büyük Boy kutu Bavul","urunfiyat":1500,"kategori":"Bavul","src":"./img/bavul3.jpeg"},
    {"id":"8","urunisim":"Mavi Büyük Boy Kutu Bavul","urunfiyat":1400,"kategori":"Bavul","src":"./img/bavul4.jpeg"},
    {"id":"9","urunisim":"Sarı Büyük Boy Tekerlek Kutu Bavul","urunfiyat":1400,"kategori":"Bavul","src":"./img/bavul5.jpeg"},
    {"id":"10","urunisim":"Kırmızı Kol Çanta","urunfiyat":120,"kategori":"KolÇanta","src":"./img/kolçanta1.png"},
    {"id":"11","urunisim":"İşelemeli Bej Kol çanta","urunfiyat":400,"kategori":"KolÇanta","src":"./img/kolçanta2.png"},
    {"id":"12","urunisim":"Siyah Kol Çanta","urunfiyat":200,"kategori":"KolÇanta","src":"./img/kolçanta3.png"},
    {"id":"13","urunisim":"Siyah Sırt Laptop Çanta","urunfiyat":600,"kategori":"LaptopÇanta","src":"./img/laptopçanta1.png"},
    {"id":"14","urunisim":"Gri Laptop Çanta","urunfiyat":500,"kategori":"LaptopÇanta","src":"./img/laptopçanta2.png"},
    {"id":"15","urunisim":"Siyah Laptop Çanta","urunfiyat":500,"kategori":"LaptopÇanta","src":"./img/laptopçanta3.jpg"},
    {"id":"16","urunisim":"Pembe Makyaj Çanta","urunfiyat":80,"kategori":"MakyajÇanta","src":"./img/makyajçanta1.png"},
    {"id":"17","urunisim":"Katlamalı Siyah Makyaj Çanta","urunfiyat":500,"kategori":"MakyajÇanta","src":"./img/makyajçanta2.jpeg"},
    {"id":"18","urunisim":"Mavi Okul Çanta","urunfiyat":700,"kategori":"OkulÇanta","src":"./img/okulçanta1.jpeg"},
    {"id":"19","urunisim":"Kırmızı 3fermuarlı okul çanta","urunfiyat":750,"kategori":"OkulÇanta","src":"./img/okulçanta2.jpg"},
    {"id":"20","urunisim":"Siyah okul Çantası","urunfiyat":400,"kategori":"OkulÇanta","src":"./img/okulçanta3.jpeg"},
    {"id":"21","urunisim":"YeşilOkul Çanta","urunfiyat":750,"kategori":"OkulÇanta","src":"./img/okulçanta4.png"}
    ]


/*****************************************************************
/*****************************************************************
 *                                                               *
 *         Select ve Arama   Bölümü                              *
 *                                                               *
 *                                                               *
 *****************************************************************/
    //Önce bütün veriler sayfada yayınlandı
    const sepetim=document.querySelector(".sepetim");
    let filtrele;
    let html="";
    
        filtrele=veri;
        htmlYaz(filtrele);
  

 
  //kategori seçenekleri tıklandığında yapılacak işlemler
  document.addEventListener("click", function(){
    html="";
    if(document.getElementById('cantalar').value=="abiye"){
       
        const abiyecanta = veri.filter((valu) => 
            valu.kategori=="AbiyeÇanta"
        );
        filtrele=abiyecanta;
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="laptop"){
       
        const laptopcanta = veri.filter((valu) => 
            valu.kategori=="LaptopÇanta"
        );
        filtrele=laptopcanta;
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="kolcanta"){
       
        const kolcanta = veri.filter((valu) => 
            valu.kategori=="KolÇanta"
        );
        filtrele=kolcanta;
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="makyaj"){
       
        const makyajcanta = veri.filter((valu) => 
            valu.kategori=="MakyajÇanta"
        );
        filtrele=makyajcanta;
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="okul"){
       
        const okulcanta = veri.filter((valu) => 
            valu.kategori=="OkulÇanta"
        );
        filtrele=okulcanta;
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="bavul"){
       
        const bavul = veri.filter((valu) => 
            valu.kategori=="Bavul"
        );
        filtrele=bavul
        htmlYaz(filtrele);
    }
    else if(document.getElementById('cantalar').value=="hepsi"){
        filtrele=veri;
        htmlYaz(filtrele);
    }
  });

  //yansıtılacak veriyi html ile düzenlendiği kod
function htmlYaz(filtrele){
    html="";
    filtrele.forEach(function(valu){
        html+=`
             <div class="card">
             <div class="urunfoto">
                 <img src="${valu.src}" alt="">
             </div>
             <div class="urunbilgi">
                 <span class="urunadi">${valu.urunisim}</span>
                 <span class="urunfiyat">${valu.urunfiyat} &#x20BA</span>
                 <button class="SepeteEkle" data-urunadi="${valu.urunisim}" data-urunfoto="${valu.src}" data-urunfiyat="${valu.urunfiyat}" >Sepete Ekle</button>
             </div>
             </div>
         `
    });    
    yansit(html);   
}
//yazılan html kodunu ekrana yansıtıyoruz
  function yansit(html){
    const katalog=document.querySelector(".katalog");
    katalog.innerHTML=html;

  ekle();
  }

//Arama input giriş
  const inputarama=document.querySelector(".anahtarkelime");
 
  
  inputarama.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
       const kelime=inputarama.value;
       console.log(kelime);
          arat(kelime);
      }
  })
  //içinde xxxx bulunan ürünleri filtreledi
  function arat(kelime){
    const sonuc = veri.filter(x => new RegExp(kelime, "i").test(x.urunisim));
    filtrele=sonuc;
    htmlYaz(filtrele);
 }

//Slider Yapımı
   const slides=document.querySelectorAll(".foto");
   const nokta=document.querySelectorAll(".dot");
    for(let i=0; i<nokta.length;i++){
        

        nokta[i].addEventListener('click',function(){
            console.log("tıklandı");
            for(nok of nokta){
                nok.classList.remove('active');
                nokta[i].classList.add('active');
               
            }
            for(s of slides){
                s.classList.remove('active');
                slides[i].classList.add('active');
            }
            
        })
        
    }  
    let tutar=0;
    //Ürün Sepete ekleme Butonu  
function ekle(){
    spthtml="  ";
    document.querySelectorAll(".SepeteEkle")
   
    
    .forEach((buton)=>{
       
       buton.addEventListener('click',()=>{
        const urunadi=buton.dataset.urunadi;
        const urunfoto=buton.dataset.urunfoto;
        const urunfiyat=Number(buton.dataset.urunfiyat);
      
        let islemItem;
       
        sepet.forEach((item)=>{
            if(urunadi===item.urunadi){
                islemItem=item;
            } 
            
        });
        
        if(islemItem){
            islemItem.adet+=1;
            
        }
        else{
            
            sepet.push({
                urunfoto:urunfoto,
                urunadi:urunadi,
                urunfiyat:urunfiyat,
                adet:1
            });
           
        }
        
        let urunsayisi=0;

        sepet.forEach((item)=>{
            urunsayisi+=item.adet;
            urunadeti=item.adet;
        });
        document.querySelector(".adet").innerHTML=urunsayisi;
        
        for(s of sepet){
            spthtml+=   `<div class="box">

                    <div class="sepetfoto">
                        <img src=${s.urunfoto} alt="">
                    </div>

                    <div class="sepeturunbil">
                        <span class="urunadi">${s.urunadi}</span>
                        <span class="sepetadet">Ürün Adeti:${s.adet} </span>
                        <span class="sepetadetfiy">Ürün Adet Fiyatı: ${s.urunfiyat}</span>
                        <span class="sepettensil"  >Sepetten Sil</span>
                        
                    </div>
                    

                    <div class="sepetucret">
                        <span class="ucret">${s.urunfiyat*s.adet}tl</span>
                        <span>Kdv Dahil</span>
                       
                    </div>
        
        
            </div>
            </div>
            
            `

        }
       

        //////TOPLAM TUTAR HESAPLA  YANSIT//////
        //tutarhtml üstte tanımlandı 
        tutar+=Number(urunfiyat);
        console.log(tutar)
        
        tutarhtml=`
                <div class="tutarbox">
                    <span class="tutar">Toplam Tutar:${tutar}</span>
                    <span><button class="öde">Ödemeye Geç</button></span>
                </div>

        `
    
        sepetim.innerHTML=spthtml+tutarhtml;

        ///////**********EKLENDİ BİLDİRİMİ */
        document.querySelector(".bildiri").style.display="block";
        const sure= setTimeout(bildi,1000);
        function bildi(){
            document.querySelector(".bildiri").style.display="none";
        }
       
       }) ;

        
    });
   
    
}

///SEPET AÇ KAPAT
const spticon=document.querySelector(".sepet");
spticon.addEventListener("click",function(){
    sepetim.classList.toggle(".sptactive")
});