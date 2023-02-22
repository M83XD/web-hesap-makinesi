var a =prompt("Birinci Sayıyı Giriniz:","")
var b =prompt("İkinci Sayıyı Giriniz:","")
var c =prompt("Üçüncü Sayıyı Giriniz:","")
if (a/b/c && a*b*c && a-b-c && a+b+c)
{
    const toplam = a+b+c;
    const fark = a-b-c;
    const carpim = a*b*c;
    const bolum = a/b/c;
    const sonuc = (a%b);
    console.log("toplam" +toplam);
    console.log("fark" + fark);
    console.log("çarpım" + carpim);
    console.log("bölüm" + bolum) ;
    console.log("Mod" + sonuc) ;
    console.log("KOMUT LOG - İŞLEM GEÇERLİ! KARAKTERLER :\n\n"+a+"\n\n"+b+"\n\n"+c+"\n\n");
}
else {
    console.log("KOMUT LOG - İŞLEM GEÇERSİZ! KARAKTERLER :\n\n"+a+"\n\n"+b+"\n\n"+c+"\n\n");
    alert("HATALI TUŞLAMA YAPTINIZ! \n\nSADECE SAYILAR KABUL EDİLİYOR. \n\nLÜTFEN SAYFAYI butondan yenileyiniz.");
location.reload()
}
