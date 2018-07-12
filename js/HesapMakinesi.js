$(function () {

    var metin = "";

    var dizi = new Array();
    var isaret = new Array();

    var a, b, sonuc = 0, sonuccrpm = 1;
    var sayac = 0;

    $("#sy1,#sy2,#sy3,#sy4,#sy5,#sy6,#sy7,#sy8,#sy9,#sfr").click(function () {

              var txt=$(this).val();
                metin+=txt;
                $("#veri").val(metin);

    });

    $("#tpl,#ckr,#crpm,#blm,#esttr").click(function () {

        var txt=$(this).val();

        if (txt == "+" || txt == "-" || txt == "*" || txt == "/") {

            dizi.push(metin);
            isaret.push(txt);
            metin = "";
            $("#veri").val(metin);

        }

        else if (txt == "=") {

                dizi.push(metin);

                for (var i = 0; i < dizi.length - 1; i++) {

                    if (isaret[i] == "+") {

                        if (sayac != 0) {
                            a = sonuc + parseInt(dizi[i + 1]);
                            sonuc = a;
                        }

                        else {
                            a = parseInt(dizi[i]) + parseInt(dizi[i + 1]);
                            sonuc += a;
                            sayac++;
                        }

                    }

                    if (isaret[i] == "-") {

                        if (sayac != 0) {
                            a = sonuc - parseInt(dizi[i + 1]);
                            sonuc = a;
                        }

                        else {
                            a = parseInt(dizi[i]) - parseInt(dizi[i + 1]);
                            sonuc = a + sonuc;
                            sayac++;
                        }

                    }

                    if (isaret[i] == "*") {

                        if (sayac != 0) {

                            a = sonuc * parseInt(dizi[i + 1]);
                            sonuc = a;
                            //sonuc = sonuccrpm;
                        }

                        else {

                            a = parseInt(dizi[i]) * parseInt(dizi[i + 1]);
                            sonuccrpm *= a;
                            sonuc = sonuccrpm;
                            sayac++;
                        }

                    }

                    if (isaret[i] == "/") {

                        if (sayac != 0) {

                            a = sonuc / parseInt(dizi[i + 1]);
                            sonuc = a;

                        }

                        else {

                            a = parseInt(dizi[i]) / parseInt(dizi[i + 1]);
                            sonuccrpm = a / sonuccrpm;
                            sonuc = sonuccrpm;
                            sayac++;
                        }

                    }

                }

             $("#veri").val(sonuc.toString());

            }

    });

    $("#sfrl").click(function () {

       $("#veri").val("");

        metin = "";

        while (dizi.length > 0) {
            dizi.pop();
        }

        while (isaret.length > 0) {
            isaret.pop();
        }

        sonuc = 0;
        sonuccrpm = 1;
        sayac = 0;

});


    $("#gr").click(function () {

        if (metin == "") {
            alert("SİLİNECEK VERİ BULUNMAMAKTADIR");
        }

        else {
            var karakter = metin.split('');

            metin = "";

            karakter.pop();

            for (var i = 0; i < karakter.length; i++) {
                metin += karakter[i].toString();
            }

            $("#veri").val(metin);

        }

    });

});