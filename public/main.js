let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                page.appendChild(li)

            });
            n += 1
        }
    }
    request.send()
}


getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name

        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].
                textContent
            console.log(text.trim())
        }
    };
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')

    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)

    }
    request.onerror = () => { }

    request.send()

}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/main2.js')

    request.onload = () => {

        //创建，填写，插入body
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => { }

    request.send()

}

//加载css AJAX方法

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        //下载完成，但不知道是成功2xx还是失败4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //获取/创建/插入css,
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)

            } else {
                alert('加载css失败')
            }
        }
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.open('GET', '/style.css') //readyState = 1
    request.send()//readyState = 2

}
