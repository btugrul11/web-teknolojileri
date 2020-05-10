function dogrula() {
    
    $("input.form-control").removeClass("is-invalid");
    $(".uyari").remove();

    var ad = $("input[name='Ad']").val();
    var soyad = $("input[name='Soyad']").val();
    var eposta = $("input[name='Eposta']").val();
    var telefon = $("input[name='Telefon']").val();
    var konu = $("select[name='Konu']").val();
    var mesaj = $("textarea[name='Mesaj']").val();

    if (ad != "" && soyad != "" && eposta != "" && telefon != "" && konu != "" && mesaj != "") {
        return true;
    } else {
        if (ad == "") {
            $("input[name='ad']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        if (soyad == "") {
            $("input[name='soyad']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        if (eposta == "") {
            $("input[name='eposta']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        if (telefon == "") {
            $("input[name='telefon']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        if (konu == "") {
            $("select[name='konu']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        if (mesaj == "") {
            $("textarea[name='mesaj']").addClass("is-invalid").after("<span class='uyari'>*Zorunlu alan</span>");
        }
        return false;
    }

}