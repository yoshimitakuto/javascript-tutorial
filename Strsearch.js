const regexpModule = (() => {
    return {
        excludeNonNumbers: (id) => {
            const telWithHyphen = document.getElementById(id).value;
            const tel = telWithHyphen.replace(/[^0-9]/g, '')
            alert(`電話番号は${tel}です。`)
        },
        isValidEmailFormat: (id) => {
            const email = document.getElementById(id).value;
            const regex = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
            if (regex.test(email)) {
                alert("正常なメールアドレスです");
            } else {
                alert("不正なメールアドレスです");
            }
        },
    }
    
})();
