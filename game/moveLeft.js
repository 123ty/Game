//判断当前情况是否能够向左移动
/*判断向左移动的方法：遍历每一行和后三列,可参考具体代码。如果当前位置不为空，
并且当前位置的左边为空或左边位置的数字和当前位置的数字相等，就执行向左移动函数*/
var canMoveLeft = function(square){
    for(var i = 0;i < 4;i++){
        for(var j = 1;j < 4;j++){
            if(square[i][j] != 0 && (square[i][j-1] == 0 || square[i][j-1] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向左移动
var moveLeft = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 1;j < 4;j++){
            if(square[i][j] != 0){
                for(var k = 0;k < j;k++){
                    //情况一：当前位置的左列为空
                    if(square[i][k] == 0 && noSquareHorizontal(i,j,k,square)){
                        //move
                        moveAnimate(i,j,i,k);
                        //add
                        square[i][k] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    //情况二：当前位置的数字与左列数字相同
                    else if(square[i][k] == square[i][j] && noSquareHorizontal(i,j,k,square)){
                        //move
                        moveAnimate(i,j,i,k);
                        //add
                        square[i][k] += square[i][j];
                        square[i][j] = 0;
                        //add score
                        score += square[i][k];
                        updateScore(score);

                        continue;
                    }
                }
            }
        }
    }
    setTimeout("update()",200);
};