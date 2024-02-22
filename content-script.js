


setTimeout(insertButton,1000)
setTimeout(Watch,2500)

function Watch() {
    const elem = document.querySelector("[role='grid']");
    let observer = new MutationObserver(mutationRecords => {
        // insertButton()
        insertButton()
    });

    observer.observe(elem, {
        childList: true, // наблюдать за непосредственными детьми
        subtree: false, // и более глубокими потомками
    });
}

function clear() {
    let btns = document.querySelectorAll('button.btnClass')
    btns.forEach((el)=>{
        el.style='opacity:1'
        el.remove()
    })
}

function saveImg(el){
    let imgLink = el.querySelector('img').src;
    window.open(imgLink,'_blank');
}


function insertButton() {
    const images = document.querySelectorAll("[role='gridcell']");
    [...images].forEach(el=>{
        let child = el.querySelectorAll('a.absolute').forEach((el)=>{
            el.remove();
        })
        el.addEventListener('click', (event)=>{
            event.preventDefault()
                        saveImg(el)
                    })
        console.log(images.length)

        // var child = el.querySelector('div.blockBtn');
        // console.log(child)
        // if(child == null){
        //     const root =document.createElement('div')
        //     root.className ='blockBtn'
        //     const shadowRoot =root.attachShadow({mode:"open"})
        //     const cssUrl = chrome.runtime.getURL('content-script.css');
        //     shadowRoot.innerHTML=`<link rel='stylesheet' href='${cssUrl}' />`
        //
        //
        //         const button = document.createElement('button')
        //         button.style='visibility:hidden;'
        //         // button.innerText = 'copy'
        //         button.type='button'
        //         button.className ='btnClass'
        //         shadowRoot.prepend(button)
        //         el.prepend(root)
        //         button.style='visibility:visible;'
        //         button.addEventListener('click', ()=>{
        //             saveImg(el)
        //         })
        //
        //
        // }


    })
}


