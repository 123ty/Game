//定义全局变量
var square = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var squareCellWidth = parseInt(100 + "px");
var squareCellSpace = parseInt(20 + "px");
var score = 0;

$(document).ready(function(){
    newGame();
});

//1.newGame()
var newGame = function(){
    //初始化
    init();
    //在随机的两个格子里生成数字
    putOneNewNumber();
    putOneNewNumber();
};

//2.初始化init
var init = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            var squareCell = $("#square-cell-" + i + "-" + j);
            squareCell.css("top",getPosTop(i,j));
            squareCell.css("left",getPosLeft(i,j));
        }
    }
    square = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    update();
    updateScore(0);
};

//3.初始化时获得top值
var getPosTop = function(i,j){
    return squareCellSpace + i * (squareCellWidth + squareCellSpace);
};

//4.初始化时获得left值
var getPosLeft = function(i,j){
    return squareCellSpace + j * (squareCellWidth + squareCellSpace);
};

//5.update() 若非第一次进入游戏，生成newGame时，需要将之前状态清除
var update = function(){
    //因为在每一次init()初始化时，都会将number-cell移出，进行页面重置，所以循环遍历需要添加number-cell。
    $(".number-cell").remove();
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            $("#square-container").append('<div class="number-cell" id="number-cell-'+ i + '-' + j + '"></div>');
            var numberCell = $("#number-cell-" + i + "-" + j);
            if(square[i][j] == 0){
                numberCell.css({
                    'width' : '0px',
                    'height' : '0px',
                    'top' : getPosTop(i,j),
                    'left' : getPosLeft(i,j)
                });
            }
            //方格中存在数字，则显示数字
            else{
                showNumber(i,j,square[i][j]);
            }
        }
    }
};

//6.显示数字，即设置数字的css样式
//主要是设置不同数字的不同背景颜色和数字颜色
var showNumber = function(x,y,number){
    var numberCell = $("#number-cell-" + x + "-" + y);
    numberCell.css({
        'width':squareCellWidth,
        'height':squareCellWidth,
        'top':getPosTop(x,y),
        'left':getPosLeft(x,y),
        'background-color':getNumberBackgroundColor(number),
        'color':getNumberColor(number)
    });
    if(number >= 1024){
        number.css("font-size","40px");
    }
    numberCell.text(number);
};

//7.getNumberBackgroundColor()得到每个数字方格的背景色
/*该函数根据传入的不同值来决定数字方格的背景颜色。将背景颜色保存在颜色数组中，第一个为空，
第一个为空的原因是：number的最小值为2，为2时执行for循环语句，得到的x的值为1，
所以将数组第一个设为空，从第二个开始赋值。
当number为4时，for循环执行两次，得到x的值为2；同样的道理，给不同的数字赋值不同的背景色。*/
var getNumberBackgroundColor = function(number){
    var color = ["","#eff0c8","#efe4da","#f2bc79",
        "#f59563","#f67c5f","#f65e3b",
        "#edcf72","#98cd01","#33b5e5",
        "#0f98cd","#ab56cd","#983451"];
    var x = 0;
    for(x=0; number-1>0; ++x,number/=2);
    return color[x];
};

//8.getNumberColor()  得到数字的颜色
var getNumberColor = function(number){
    if(number <= 4){
        return "#666";
    }
    else{
        return "#fff";
    }
};


//9.更新分数
var updateScore = function(){
    $("#score").text(score);
};

//10.putOneNewNumber() 在一个随机的位置放置一个随机数，主要是利用了Math.random()。
/*关于这个函数需要注意的点为：这个函数执行两次来产生两个随机数，会存在两个随机数产生在同一位置的情况，所以要避免这种情况。
解决方法：我定义了一个随机次数变量，当这个变量小于30时，产生一个随机位置，如果该位置为空，则显示数字。
当随机次数增大时，我需要循环遍历16个方格，找到位置为空的方格，然后显示数字。*/
var putOneNewNumber = function(){
    //需要先判断是否还有空位，如果没有空位，则返回false
    if(noSpace(square)){
        return false;
    }
    //产生一个随机的位置
    //randomX，randomY两个变量可确定16个方格中的坐标
    var randomX = 0;
    var randomY = 0;
    var randomTimes = 0;
    while(randomTimes < 50){
        randomX = parseInt(Math.floor(Math.random()*4));
        randomY = parseInt(Math.floor(Math.random()*4));
        if(square[randomX][randomY] == 0){
            break;
        }
        randomTimes++;
    }
    if(randomTimes >= 50){
        for(var i = 0;i < 4;i++){
            for(var j = 0;j < 4;j++){
                if(square[i][j] == 0){
                    randomX = i;
                    randomY = j;
                    break;
                }
            }
            if(square[randomX][randomY] == 0){
                break;
            }
        }
    }
    //随机产生一个2或4
    var randomNumber = Math.random() < 0.5 ? 2 : 4;
    square[randomX][randomY] = randomNumber;
    showNumber(randomX,randomY,randomNumber);
    return true;
};

//11.判断当前是否还有空位，如果有空位，则返回false，没有空位则返回true
var noSpace = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            if(square[i][j] == 0){
                return false;
            }
        }
    }
    return true;
};








