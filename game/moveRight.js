//判断当前情况能否向右移动
/*判断能否向右移动的方法：循环遍历每一行和前三列，可参考具体代码。如果当前位置不为空，
并且当前位置的右边位置为空或当前位置的数字和右边位置的数字相等，则可以向右移动*/
var canMoveRight = function(square){
    for(var i = 0;i < 4;i++){
        for(var j = 2;j >= 0;j--){
            if(square[i][j] != 0 && (square[i][j+1] == 0 || square[i][j+1] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向右移动
var moveRight = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 2;j >= 0;j--){
            if(square[i][j] != 0){
                for(var k = 3;k > j;k--){
                    //情况一：当前位置的右列为空
                    if(square[i][k] == 0 && noSquareHorizontal(i,k,j,square)){
                        //move
                        moveAnimate(i,j,i,k);
                        square[i][k] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    //情况二：当前位置的数字与右列数字相同
                    else if(square[i][k] == square[i][j] && noSquareHorizontal(i,k,j,square)){
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
