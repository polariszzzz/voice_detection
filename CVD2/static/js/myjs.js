$(function(){

		var nowpage = 0;
		//给最大的盒子增加事件监听
		$(".container").swipe(
			{
				swipe:function(event, direction, distance, duration, fingerCount) {
					 if(direction == "up"){
						nowpage = nowpage + 1;
					 }else if(direction == "down"){
						nowpage = nowpage - 1;
					 }
					 if(nowpage == 3){
						$(".label").hide();
					 }

					 if(nowpage != 3){
						$(".label").show();
					 }

					 if(nowpage > 3){
						nowpage = 3;
					 }
					 if(nowpage < 0){
						nowpage = 0;
					 }
					$(".container").animate({"top":nowpage * -100 + "%"},800);
					$(".page").eq(nowpage).addClass("cur").siblings().removeClass("cur");
				}
			}
		);


		$(".detect").button().click(function(){

                $(".wait").html("正在分析检测......");
                var form = $("#uploadForm")[0];
                var formdata = new FormData(form)


                $.ajax({
                    url:"/upload",
                    type:'POST',
                    data:formdata,
                    processData: false,   // jQuery不要去处理发送的数据
                    contentType: false,   // jQuery不要去设置Content-Type请求头
                    success:function(data){
                        $(".wait").html("下滑查看结果");
                        console.log(data.flag);

                        if(data.flag)
                            $(".result").html('<img id = "true" src = "../static/img/true.png">')

                        else
                            $(".result").html('<img id = "false" src = "../static/img/false.png">')
                    }
                });


		})


		$(".mask").button().click(function(){
			alert("mask")
		})


		$("#file").on("change", function(){
		    var file = this.files[0];
		     $(".show").html(file.name);
		})


})