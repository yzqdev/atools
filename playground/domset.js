let lis = [];
let arr = [];
[...lis].forEach(i => {
        arr.push({
            text: i.innerHTML.split('：')[0],
            reg: i.querySelector('strong').innerText
        })

    }
)
