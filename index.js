export const getQueryString = (name) => {

    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    if (window.location.hash.indexOf('?') < 0) {
        return null;
    }
    let r = window.location.hash.split('?')[1].match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
// v1 auth
export const getAuth = (state = '', scope = 'snsapi_base') => {
    if (state.length >= 128) console.warn(`${state.length}: ${state}`)
    //修复不带任何参数的bug
    let hash = state.split('#')[1]
    if (hash && hash.indexOf('?') === -1) {
        state = state + '?'
    }
    //state必须encode
    state = encodeURIComponent(state)
    var _appid = $service.APPID
    const redirect_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${_appid}&redirect_uri=${encodeURIComponent('https://wechatgateway.jiliguala.com/gate/wechatcallback')}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    window.location.href = redirect_url
}
// v2 auth
export const wechatAuth = (next, appid, scope = 'snsapi_base') => {
    let nextUrl = encodeURIComponent(next || window.location.href)
    let redirectUrl = encodeURIComponent(`https://wechatgateway.jiliguala.com/gate/wechatcallback_v2?next=${nextUrl}`)
    // let appid = config.appid || process.env.APP_WECHAT_APPID
    let state = Math.ceil(Math.random() * 1000)
    let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    // let qrCodeUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&client_id=${appid}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_login,snsapi_userinfo&state=${state}#wechat_redirect`
    // window.location.href = isWeChat() ? url : qrCodeUrl
    window.location.href = url
}
/**
 * 本地存储包装
 */
export const Lstorage = {
    set: (key, val, store = window.localStorage) => {
        store.setItem(key, JSON.stringify(val))
    },
    get: (key, store = window.localStorage) => {
        return JSON.parse(store.getItem(key));
    },
    remove: (key, store = window.localStorage) => {
        store.removeItem(key)
    },
    clear: (store = window.localStorage) => {
        store.clear()
    }

}

export const isCellphoneValid = (phone) => {
    if (!phone) return false;
    return (/^1[12345789]\d{9}$/.test(phone) || /^1(99)|(98)|(66)\d{8}$/.test(phone))
}

export const judgeClient = () => {
    let client = '';
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
        client = 'IOS';
    } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
        client = 'Android';
    } else {
        client = 'PC';
    }
    return client;
}

export const adjustSize = () => {
    var $dom = document.createElement('div');
    $dom.style = 'font-size:10px;';
    document.body.appendChild($dom);
    // 计算出放大后的字体
    var scaledFontSize = parseInt(window.getComputedStyle($dom, null).getPropertyValue('font-size'));
    document.body.removeChild($dom);
    // 计算原字体和放大后字体的比例
    var scaleFactor = 10 / scaledFontSize;
    // 取html元素的字体大小
    // 注意，这个大小也经过缩放了
    // 所以下方计算的时候 *scaledFontSize是原来的html字体大小
    // 再次 *scaledFontSize才是我们要设置的大小
    //alert(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'))
    var originRootFontSize = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
    document.documentElement.style.fontSize = originRootFontSize * scaleFactor * scaleFactor + 'px';
}

/**
 * 浮点型的元转为分，修复js浮点数bug
 * @param {*} number
 */
export const floatYuanToFen = (number) => {
    if (number.toString().indexOf('.') < 0) {
        return parseInt(number, 10) * 100 || 0
    }
    let parts = number.toString().split('.');
    if (parts[1].toString().length < 2) {
        return parseInt(parts[0], 10) * 100 + parseInt(parts[1], 10) * 10
    } else {
        return parseInt(parts[0], 10) * 100 + parseInt(parts[1].toString().substring(0, 2), 10)
    }
}


export const formatUTCTime = (utc_datetime, needDetail) => {
    if (!utc_datetime) {
        return '-';
    }
    function handleNum(str) {    //格式化显示
        return str > 9 ? str : '0' + str
    }
    // 转为正常的时间格式 年-月-日 时:分:秒
    // var T_pos = utc_datetime.indexOf('T');
    // var Z_pos = utc_datetime.indexOf('Z');
    // var year_month_day = utc_datetime.substr(0,T_pos);
    // var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    // var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06
    // 处理成为时间戳
    var timestamp = 0
    // 时间戳转为时间
    // timestamp = new Date(Date.parse(new_datetime));
    timestamp = new Date(Date.parse(utc_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;
    // 增加8个小时，北京时间比utc时间多八个时区
    // var timestamp = timestamp+8*60*60;
    var time = new Date(parseInt(timestamp) * 1000)
    var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
    var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
    var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
    var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
    var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
    var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
    if (needDetail) {
        return y + '-' + handleNum(M) + '-' + handleNum(d) + ' ' + handleNum(h) + ':' + handleNum(m) + ':' + handleNum(s);
    } else {
        return y + '-' + handleNum(M) + '-' + handleNum(d)
    }
}

// export const setToken = (param) => new Promise((resolve, reject) => {
//     wxLogin(param).then(res => {
//         if (res.data.code === 0) {
//             Lstorage.set(`${process.env.NODE_ENV}_p_code`, {
//                 typ: res.data.data.typ,
//                 wechat_token: res.data.data.wechat_token
//             })
//             resolve(res)
//         }
//     }).catch(err => {
//         reject(err)
//     })
// })


