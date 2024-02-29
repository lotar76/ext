const grid = document.querySelectorAll('[role="gride"]')[0]

// Создаем новый экземпляр MutationObserver
const observer = new MutationObserver(()=>{
    insertButton()
});

// Начинаем наблюдение за изменениями в DOM
observer.observe(document.body, { childList: true, subtree: true });


setTimeout(insertButton,2000)



function insertButton() {
    const images = document.querySelectorAll('div[role="gridcell"]');
    [...images].forEach(el=>{
        const button = el.querySelector('button.bg-zinc-900')
        console.log(button.classList.contains("grap"))
        if(!button.classList.contains("grap")){
            console.log(1)
            button.classList.add('grap')
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
            })
        }
    })
}




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
