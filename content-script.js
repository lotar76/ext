
console.log('hello')

setTimeout(insertButton,2000)



function insertButton() {
    const images = document.querySelectorAll("[role='gridcell']  ");

    [...images].forEach(el=>{

        const button = el.querySelector('button.bg-zinc-900')



        // const root =document.createElement('div')
        // const shadowRoot =root.attachShadow({mode:"open"})
        // const cssUrl = chrome.runtime.getURL('content-script.css');
        // shadowRoot.innerHTML=`<link rel='stylesheet' href='${cssUrl}' />`
        // const button = document.createElement('button')
        // button.innerText = 'copy'
        // button.type='button'
        // button.className ='btnClass'
        // shadowRoot.prepend(button)
        // el.prepend(root)

        button.addEventListener('click', (e)=>{
            e.preventDefault();
            const url = "http://localhost/api/image";
            const options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    url:el.querySelector('img').src,
                    title:el.querySelector('p.text-sm')?.innerHTML || ' ---- ',
                    promt:el.querySelector('p.opacity-70')?.innerHTML || ' ---- '
                }),
            };

            fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
            // alert(2)
            // e.stopPropagation()
            // let imgLink = el.querySelector('img').src;
            // window.open(imgLink,'_blank');
        })
    })
}
// images.forEach((el) => {
//
//     let div = document.createElement("div");
//     div.style = styleBtn
//     div.append("забрать");
//     el.appendChild(div)
//     div.onclick = function () {
//         let imgLink = el.querySelector('img').src;
//         let imgWidth = el.querySelector('img').width;
//         let imgHeight = el.querySelector('img').height;
//         let img = {
//             imgLink, imgWidth, imgHeight
//         }
//         let title = el.querySelector('p.text-sm').innerHTML;
//         let promt = el.querySelector('p.opacity-70').innerHTML;
//
//         let list = document.querySelector("#list");
//         let item = document.createElement("div");
//
//         // item.style = styleBtn
//         list.appendChild(item)
//         item.innerHTML  = imgLink
//
//         // window.navigator.clipboard
//         //     .writeText(JSON.stringify({
//         //         title,
//         //         promt,
//         //         img
//         //     }))
//         //     .then(() => {
//         //         // закрыть окно расширения после
//         //         // завершения
//         //         window.close();
//         //     });
//
//     };
// })