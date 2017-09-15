//判断当前情况是否能向下移动
/*判断的方法为：遍历每一列和前三行，具体参考代码。如果当前位置不为空，并且当前位置的下一列为空，
或当前位置的数字和下一列数字相等，则可以向上移动。*/
var canMoveDown = function(square){
    for(var j = 0;j < 4;j++){
        for(var i = 2;i >= 0;i--){
            if(square[i][j] != 0 && (square[i+1][j] == 0 || square[i+1][j] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};


//向下移动
var moveDown = function(){
    for(var j = 0;j < 4;j++){
        for(var i = 2;i >= 0;i--){
            if(square[i][j] != 0){
                for(var k = 3;k > i;k--){
                    //情况一：当前位置的上列为空
                    if(square[k][j] == 0 && noSquareVertical(j,k,i,square)){
                        //move
                        moveAnimate(i,j,k,j);
                        square[k][j] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    //情况二：两个相等的数可以进行合并，但两数必须相邻，或两数之间有空格。
                    /*noSquareVertical函数的作用就是如果两个不相邻的数相等且中间必须有空格的时候才能进行合并*/
                    else if(square[k][j] == square[i][j] && noSquareVertical(j,k,i,square)){
                        //move
                        moveAnimate(i,j,k,j);
                        //add
                        square[k][j] += square[i][j];
                        square[i][j] = 0;
                        //add Score
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
