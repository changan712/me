<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <style>
        div {
            height: 50px;
            text-align: center;
        }

        input {
            width: 100%;
            padding: 5px;
            font-size: 16px;
            display: block;
        }

    </style>
    <div>
        <form method="post" id="form1">
            <input id="pwd" name="pwd" type="password">
        </form>
    </div>
    <div>
        <a id="go" href="#">submit</a>
    </div>
    <div>
        <a id="logout" href="#">logout</a>
    </div>

    <script src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script>
        $("#go").click(function () {
            $.post('/api/app/common/aia-private', {pwd:$("#pwd").val()}, function(res){
                console.log(res);
                if(res['errno']){
                    alert(res['msg']);
                } else {
                    window.location = res['url'];
                }
            }, 'json');
        });

        $("#logout").click(function () {
            $.get("/api/app/user/logout?corp_id=wx3301b13994a262d0", function (data) {
                alert("用户已退出")
            });
        })
    </script>

</body>
</html>