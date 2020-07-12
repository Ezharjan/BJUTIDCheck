$(function() {
    $(document).on('click', '#login', function() {
        var $account = $('#user-name'),
            $password = $('#user-pwd');
        if (!$account.val()) {
            $account.next().show().find('div').text('请输入姓名');
            return;
        }
        if (!$password.val()) {
            $password.next().show().find('div').text('请输入学号');
            return;
        }
        var params = {
            url: '',
            type: 'post',
            data: { account: $account.val(), password: $password.val() },
            sCallback: function(res) {
                if (res) {
                    window.base.setLocalStorage('token', res.token);
                    //localStorage.setItem('token', res.token);
                    window.location.href = 'index.html';
                    window.alert("校验成功！ ");
                }
            },
            eCallback: function(e) {

                switch (e.status) {
                    case 401:
                        warner('姓名、学号输入有误或不在准入名单内！ ');
                        break;
                    case 403:
                        warner('已经登记，请不要重复操作！ ');
                        break;
                    default:
                        break;
                }
            }
        };
        window.base.getData(params);
    });

    $(document).on('focus', '.normal-input', function() {
        $('.common-error-tips').hide();
    });

    $(document).on('keydown', '.normal-input', function(e) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {
            $('#login').trigger('click');
        }
    });
});

const warner = function(alertMsg) {
    window.alert(alertMsg);
    $('.error-tips').text(alertMsg).show().delay(2000).hide(0);
}