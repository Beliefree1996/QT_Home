(function(a){a("#contactForm").validator().on("submit",function(f){if(f.isDefaultPrevented()){b();e(false,"请完整输入信息！")}else{f.preventDefault();d()}});function d(){var i=a("#name").val();var f=a("#email").val();var h=a("#msg_subject").val();var g=a("#message").val();a.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+i+"&email="+f+"&msg_subject="+h+"&message="+g,success:function(j){if(j=="success"){c()}else{b();e(false,j)}}})}function c(){a("#contactForm")[0].reset();e(true,"Message Submitted!")}function b(){a("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a(this).removeClass()})}function e(h,f){if(h){var g="h4 tada animated text-success"}else{var g="h4 text-danger"}a("#msgSubmit").removeClass().addClass(g).text(f)}}(jQuery));