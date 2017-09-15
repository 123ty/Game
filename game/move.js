//设置键盘监听事件，监听用户的键盘输入
$(document).keydown(function(event){
    event.preventDefault();//阻止默认事件
    switch(event.keyCode){
        case 37://用户按下左键
            if(canMoveLeft(square)){
                moveLeft();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 38://用户按下上键
            if(canMoveUp(square)){
                moveUp();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 39://用户按下右键
            if(canMoveRight(square)){
                moveRight();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 40://用户按下下键
            if(canMoveDown(square)){
                moveDown();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        default:break;
    }
});

//判断某一行中的某点到另一点之间是否有空格，如果有空格，则返回true，如果没有空格，则返回false。
var noSquareHorizontal = function(row,col1,col2,square){
    for(var col = col2 + 1;col < col1;col++){
        if(square[row][col] != 0){
            return false;
        }
    }
    return true;
};

//判断某一列中的某点到另一点之间是否有空格，如果有空格，则返回true，如果没有空格，则返回false。
var noSquareVertical = function(col,row1,row2,square){
    for(var row = row2 + 1;row < row1;row++){
        if(square[row][col] != 0){
            return false;
        }
    }
    return true;
};

//数字方格的移动动画效果，应用了jQuery的动画效果。
// (fx,fy)表示初始位置，(tx,ty)表示终点位置
var moveAnimate = function(fx,fy,tx,ty){
    var numberCell = $("#number-cell-" + fx + "-" + fy);
    numberCell.animate({
        top:getPosTop(tx,ty),
        left:getPosLeft(tx,ty)
    },200);
};

//判断当前情况能否向四个方向移动
var canMove = function(){
    if(canMoveLeft(square) || canMoveUp(square) || canMoveRight(square) || canMoveDown(square)){
        return true;
    }
    return false;
};

//判断当前游戏是否结束
var isGameOver = function(){
    if(noSpace(square) && !canMove(square)){
        gameOver();
    }
};

//游戏结束
var gameOver = function(){
    alert("游戏结束！");
};