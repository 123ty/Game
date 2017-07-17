window.onload = function(){
    var bu = document.getElementsByClassName("bu")[0];
    var jiandao = document.getElementsByClassName("jiandao")[0];
    var shitou = document.getElementsByClassName("shitou")[0];
    var myResult = document.getElementsByClassName("myResult")[0];
    var computerResult = document.getElementsByClassName("computerResult")[0];
    var result_text = document.getElementsByClassName("result_text")[0];
    bu.onclick = function(){
        myResult.src = "img/bu.jpg";
        var number = Math.random();
        if(number < 0.33){
            //jiaodao
            computerResult.src = "img/jiandao.jpg";
            result_text.innerHTML = "LOSE!"
        }
        else if(0.33 <= number < 0.67){
            //shitou
            computerResult.src = "img/shitou.jpg";
            result_text.innerHTML = "WIN!"
        }
        else{
            //bu
            computerResult.src = "img/bu.jpg";
            result_text.innerHTML = "TIE!";
        }
    };
    jiandao.onclick = function(){
        myResult.src = "img/jiandao.jpg";
        var number = Math.random();
        if(number < 0.33){
            //jiaodao
            computerResult.src = "img/jiandao.jpg";
            result_text.innerHTML = "TIE!"
        }
        else if(0.33 <= number < 0.67){
            //shitou
            computerResult.src = "img/shitou.jpg";
            result_text.innerHTML = "LOSE!"
        }
        else{
            //bu
            computerResult.src = "img/bu.jpg";
            result_text.innerHTML = "WIN!";
        }
    };
    shitou.onclick = function(){
        myResult.src = "img/shitou.jpg";
        var number = Math.random();
        if(number < 0.33){
            //jiaodao
            computerResult.src = "img/jiandao.jpg";
            result_text.innerHTML = "WIN!"
        }
        else if(0.33 <= number < 0.67){
            //shitou
            computerResult.src = "img/shitou.jpg";
            result_text.innerHTML = "TIE!"
        }
        else{
            //bu
            computerResult.src = "img/bu.jpg";
            result_text.innerHTML = "LOSE!";
        }
    }
};