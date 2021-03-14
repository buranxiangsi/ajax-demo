console.log('hello')

//加载css AJAX方法

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')

    request.onload = () => {
        console.log('成功了')
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
