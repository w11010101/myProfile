var master = 'https://wisdom.xzxpay.com/';
var urls = {
    getInfo:master+'card/anonymous/childInfo',
    recharge:master+'card/anonymous/recharge'
}
var accountObj = {
    body:document.querySelector('body'),
    accountInput:document.querySelector('.account'),
    accountName:document.querySelector('.account-name input'),
    submitBtn:document.querySelector(".submit-btn"),
    account:document.querySelector('.recharge-account'),
    money:document.querySelector('.recharge-money'),
    userDefinedMoney:document.querySelector('.user-defined-money input'),
}

accountObj.account.addEventListener('click',setterActive);
accountObj.money.addEventListener('click',setterActive);

function setterActive(event){
    var el = event.target;
    
    if(el.nodeName.toLocaleLowerCase() === 'button'){

        var activeEl = this.querySelector('.active');
        if(activeEl) activeEl.classList.remove('active');
        if(this.className === 'recharge-account'){
            accountObj.accountInput.value = '';
            accountObj.userDefinedMoney.value = '';
            accountObj.body.querySelector('.account-name').style.display = 'none';
            if(accountObj.money.querySelector('.active')){
               accountObj.money.querySelector('.active').classList.remove('active'); 
            }
        }else if(this.className === 'recharge-money'){

            accountObj.userDefinedMoney.value = el.innerText.substr(0,el.innerText.length-1);
        }
        el.classList.add('active');
    }
}
// 卡号、学号 输入
accountObj.accountInput.oninput = function(){
    if(accountObj.money.querySelector('.active')){
        accountObj.body.querySelector('.account-name').style.display = 'none';
        accountObj.money.querySelector('.active').classList.remove('active'); 
    }   
}
// 获取卡号、学号信息
accountObj.accountInput.onblur = function(){
    var accountNamebox = accountObj.account.querySelector('.account-name');
    ajaxFn({
        url:urls.getInfo,
        type:'post',
        data:{
           no:this.value,
           type:parseInt(accountObj.account.querySelector('.active').getAttribute("account-type"))
        },
        success:function(data){
            console.log(data)
            if(data.result && data.data){
                var data = data.data;
                accountNamebox.style.display = 'block';
                accountObj.accountName.value = data.name;
                accountObj.accountName.setAttribute('studentId',data.studentId);

            }else{
                accountObj.accountName.value = '';
                accountNamebox.style.display = 'none';
                tips(data.msg)
            }

        },
        error:function(data){
            console.log(data)
            if(data.status == 404){
                tips('找不到服务器');
            }
        }
    });
}
// 充值按钮
accountObj.submitBtn.onclick = function(){
    if(accountObj.accountName.value!=''&&accountObj.userDefinedMoney.value!=''){
        ajaxFn({
            url:urls.recharge,
            type:'post',
            data:{
               studentId:accountObj.accountName.getAttribute('studentId'),
               amount:accountObj.userDefinedMoney.value,
               device:getAppDevice(),
               ip:"127.0.0.1"
            },
            success:function(data){
                console.log(data)
                if(data.result && data.data){
                    window.location.href = data.data.url;
                }else{
                    tips(data.msg);
                }
            },
            error:function(data){
                if(data.status == 404){
                    tips('找不到服务器');
                }
            }
        });
    }else{
        var inputs = accountObj.body.querySelectorAll('input');
        inputs.forEach(function(e,i){
            if(!e.value){
                if(e.parentNode.className.indexOf('account-name')>=0){
                    tips('充值账户错误');
                    return false;
                }else{
                    tips(e.getAttribute('tipeName')+'不为空'); 
                    return false;
                }
            }
        });
    }
}
// 获取移动设备
function getAppDevice(){
    var navigator = window.navigator.appVersion;
    if(navigator.toLocaleLowerCase().indexOf('android')>=0){
        return 'android';
    }else if(navigator.toLocaleLowerCase().indexOf('iphone')>=0){
        return 'ios';
    }else if(navigator.toLocaleLowerCase().indexOf('ipad')>=0){
        return 'ipad';
    }else{
        return navigator;
    }
}
// 提示
function tips(val,time){
    time = time||2000;
    var body = accountObj.body;
    var tips = body.querySelector('.tips');
    if(!tips){
        body.insertAdjacentHTML('beforeend','<div class="tips"><div class="tips-val">'+val+'</div></div>');
        tips = body.querySelector('.tips');
        setTimeout(function(){
            tips.classList.add('tips-dis');
            setTimeout(function(){
                tips.remove();
            },200);
        },time);

    }else{
        console.log('error');
    }
}
