
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/main2.js')

    request.onload = () => {

        //创建，填写，插入body
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {

    }

    request.send()

}

//加载css AJAX方法

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')

    request.onload = () => {
        //获取/创建/插入css,
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }

    request.send()

}
