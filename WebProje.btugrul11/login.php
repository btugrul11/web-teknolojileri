<?php
    $eposta = $_POST["eposta"];
    $sifre = $_POST["sifre"];

    if($eposta == "g171210035@sakarya.edu.tr" && $sifre == "1997"){
        echo "Hoşgeldin ". $eposta;
    }else{
        header("Location: ./Login.html");
    }
?>