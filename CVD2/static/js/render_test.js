$(function(){
    $("button").click(function(){

    alert("click");
         $.ajax({
                    url:"/test",
                    type:'POST',
                    data:{num:"1"},
                    processData: false,   // jQuery不要去处理发送的数据
                    contentType: false,   // jQuery不要去设置Content-Type请求头
                    success:function(){
                       alert("ok")

                    }
                });

    })


})