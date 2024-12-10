document.addEventListener('DOMContentLoaded', function() {
    console.log('网站已加载完成！');
    var registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交行为

        // 这里可以添加验证逻辑，例如检查密码是否匹配等
        var password = document.querySelector('input[name="password"]').value;
        var confirmPassword = document.querySelector('input[name="confirm_password"]').value;
        if (password !== confirmPassword) {
            alert('密码不匹配，请重新输入！');
            return;
        }
        // script.js
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单的默认提交行为

        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="password"]').value;

        if (username === "" || password === "") {
            alert("所有字段都是必填的！");
            return;
        }

    });


        // 假设注册成功，显示成功消息并重定向到登录界面
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'interface.html'; // 重定向到登录界面
        }, 3000); // 3秒后重定向
        var bgd =document.getElementById("bgd")
		var tp1=document.getElementById("tp1")
		var tp2=document.getElementById("tp2")
		    tp2.innerHTML=tp1.innerHTML;
		var tm=null;
		function picgundong () {
			//alert(gd.scrollLeft)
			if (bgd.scrollLeft>tp1.offsetWidth) {
				bgd.scrollLeft-=tp1.offsetWidth
			}else{
				bgd.scrollLeft+=5;
			};
		}
		
		function picstart () {
			// 清空定时器
			window.clearInterval(tm);
			//定义定时器
			tm = window.setInterval('picgundong()',60)
		}
		function picstops () {
			// 清空定时器
			window.clearInterval(tm);
		}
				picstart ()
    });
});