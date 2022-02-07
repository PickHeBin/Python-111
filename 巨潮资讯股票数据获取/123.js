var indexcode={
    getResCode:function(){
//      时间戳
        var time=Math.floor(new Date().getTime()/1000);
//        调用了某一个方法 ""+time
        return window.JSonToCSV.missjson(""+time);
    }
}