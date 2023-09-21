// 以下即時関数（関数を定義すると同時に実行するための構文）
(() => {

    //クラス
    class Accordion {
        //初期化
        constructor(obj) {
            console.log(obj);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const $trrigerLen = $trigger.length;

            for (let i = 0; i < $trrigerLen; i++) {
                $trigger[i].addEventListener('click', (e) => this.clickHandler(e)); //クラス内ではthisを指定しないと関数を呼び出せない
            };

            this.actionUnko(); //関数呼び出し
        }

        actionUnko() {
            console.log("Hello World");
        }

        //クリックしたら実行される処理
        clickHandler = (e) => { //const宣言はクラス内では不必要
            e.preventDefault();
            // console.log('Clicked')
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
    
            if($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        };
    }

    //インスタンス化
    const nomalAccordion = new Accordion({
        hookName: "#js-accordion",
        tagName: 'a'
    })

    const fuckingAccordion = new Accordion({
        hookName: "#js-faq",
        tagName: 'p'
    });

})();