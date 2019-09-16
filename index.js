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
export const convertUTCTimeToLocalTime=(UTCDateString,needDetail)=> {
    // needDetail 为true表示需要具体时间，未传表示只需日期
    if(!UTCDateString){
        return '-';
      }
    function formatFunc(str) {    //格式化显示
        return str > 9 ? str : '0' + str
      }
    const date = new Date(Date.parse(UTCDateString));
    const year = date.getUTCFullYear();
    const month = formatFunc(date.getUTCMonth()+1);
    const day = formatFunc(date.getUTCDate());
    const h = formatFunc(date.getUTCHours()+8);
    const m = formatFunc(date.getUTCMinutes());
    const s = formatFunc(date.getUTCSeconds());
    if(!needDetail) {
        return `${year}-${month}-${day}`
    } else {
        return `${year}-${month}-${day} ${h}:${m}:${s}`
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
export const isCellphoneValid = (phone)=>{
    if(!phone) return false;
    return (/^1[34578]\d{9}$/.test(phone) || /^1(99)|(98)|(66)\d{8}$/.test(phone))
}

export const isIDValid = (id)=>{
    if(!id) return false;
    return (/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(id))
}