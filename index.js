// 获取url参数值
export const getQueryString = (name)=> {

    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if(window.location.hash.indexOf("?") < 0){
        return null;
    }
    let r = window.location.hash.split("?")[1].match(reg); 　　
    if (r != null) return decodeURIComponent(r[2]); 
　　    return null; 
}

// 设置url参数值
export const setUrlPrmt= (obj)=> {
    let _rs = [];
    for (let p in obj) {
        if (obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p])
        }
    }
    return _rs.join('&');
}

// UTC时间转化为本地时区时间（UTC时间格式一般为 "2017-11-16T05:23:20.000Z"）；
export const formatUTCTime = (utc_datetime,needDetail)=> {
    if(!utc_datetime){
        return '-';
      }
    function handleNum(str) {    //格式化显示
        return str > 9 ? str : '0' + str
      }
    timestamp = new Date(Date.parse(utc_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;
    
    var timestamp = timestamp
    // 时间戳转为时间
    var time= new Date(parseInt(timestamp) * 1000)
    var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
    var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
    var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
    var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
    var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
    var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
    if(needDetail) {
        return y + '-' +handleNum(M) + '-' + handleNum(d) + ' ' + handleNum(h) + ':' + handleNum(m) + ':' + handleNum(s);
    } else {
        return y + '-' +handleNum(M) + '-' + handleNum(d) 
    }
  } 
 

export const Lstorage = {
    
    set:(key, val, store = window.localStorage)=> {
        store.setItem(key, JSON.stringify(val))
    },
    get:(key, store = window.localStorage)=> {
        return JSON.parse(store.getItem(key));
    },
    remove:(key, store = window.localStorage)=> {
        store.removeItem(key)
    },
    clear:(store = window.localStorage) =>{
        store.clear()
    }

}

export const judgeClient= ()=> {
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

export const isCellphoneValid = (phone)=>{
    if(!phone) return false;
    return (/^1[34578]\d{9}$/.test(phone) || /^1(99)|(98)|(66)\d{8}$/.test(phone))
}

export const isIDValid = (id)=>{
    if(!id) return false;
    return (/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(id))
}