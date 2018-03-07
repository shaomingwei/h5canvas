//发表
function thisone() {
    $('#generate .neirong').text($('#mainText').val());
    $('#generate .wrapper').addClass('bounceIn animated');
    $('#main-form').hide();
    $('#generate').show();
    //将画布生成图片
    var mycanvas = document.getElementById("main");
    var starImg = document.getElementById("starImg");
    var image = mycanvas.toDataURL("image/jpg");
    starImg.src = image;
}

function hechen(){
    //获取画布对象
    var mainCtx = document.getElementById('main');
    mainCtx = mainCtx.getContext("2d");
    mainCtx.clearRect(0,0,750,1148);
    //获取图片的实际路径
    var starImg = new Image();
    starImg.src=$('#starImg').attr('src');
    //合成
    starImg.onload=function(){
        //先把图片绘制在这里
        mainCtx.drawImage(starImg,0,0,750,1148);
        //读取用户的文本
        mainCtx.font = "28px Verdana";
        mainCtx.fillStyle = "#61472b";
        //绘制文本
        drawText(mainCtx,$('#mainText').val(),182,692,500);
    };
}

//canvas文字换行
function drawText(mainCtx,t,x,y,w){
    var chr = t.split("");
    var temp = "";
    var row = [];
    for(var a = 0; a < chr.length; a++){
        if( mainCtx.measureText(temp).width < w ){ }
        else{
            row.push(temp);
            temp = "";
        }
        temp += chr[a];
    }
    row.push(temp);
    for(var b = 0; b < row.length; b++){
        mainCtx.fillText(row[b],x,y+(b+1)*40);
    }
}