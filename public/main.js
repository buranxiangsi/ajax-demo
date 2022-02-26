
function ajax(options) {
  options = options || {};
  options.method = (options.method || 'GET').toUpperCase();
  options.path = options.path;
  options.success = options.success;

  const request = new XMLHttpRequest();
  request.open(options.method, options.path);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let contentType = request.getResponseHeader('Content-Type')
      if(contentType.indexOf('json')>0){
        let context = request.response
        options.success(JSON.parse(context))
      }else if(contentType.indexOf('xml')>0){
        let context = request.responseXML
        options.success(context)
      }else{
        let context = request.response
        options.success(context)
      }
    };
  }

  request.send();
}

let n = 1;
getPage.onclick =()=>{
  ajax({
    method: 'GET',
    path: `/page${n + 1}`,
    success: (data) => {
      data.forEach((item)=>{
        const li = document.createElement('li')
        li.textContent = item.id 
        page.appendChild(li)
      })
     n+1
    },
  });
}
// getPage.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `/page${n + 1}`);
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const array = JSON.parse(request.response);
//       array.forEach((item) => {
//         const li = document.createElement('li');
//         li.textContent = item.id;
//         page.appendChild(li);
//       });
//       n += 1;
//     }
//   };
//   request.send();
// };

getJSON.onclick = () => {
  ajax({
    method: 'GET',
    path: '/5.json',
    success: (data) => {
      myName.textContent = data.name
    },
  });
  
};
// getJSON.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", '/5.json')
//     request.onreadystatechange = () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.response)
//             const object = JSON.parse(request.response)
//             console.log(object)
//             myName.textContent = object.name

//         }
//     }
//     request.send()
// }
getXML.onclick = () => {
  ajax({
    method: 'GET',
    path: '/4.xml',
    success: (data) => {
      const text = data.getElementsByTagName('warning')[0].textContent;
      console.log(text.trim());
    },
  });
};
// getXML.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', '/4.xml');
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const dom = request.responseXML;
//       console.log(dom);
//       const text = dom.getElementsByTagName('warning')[0].textContent;
//       console.log(text.trim());
//     }
//   };
//   request.send();
// };
getHTML.onclick = () => {
  ajax({
    method: 'GET',
    path: '/3.html',
    success: (data) => {
     const div = document.createElement('div');
     div.innerHTML = data;
     document.body.appendChild(div);
    },
  });
};
// getHTML.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', '/3.html');

//   request.onload = () => {
//     const div = document.createElement('div');
//     div.innerHTML = request.response;
//     document.body.appendChild(div);
//   };
//   request.onerror = () => {};

//   request.send();
// };

getJS.onclick =()=>{
  ajax({
    method: 'GET',
    path: '/main2.js',
    success: (data) => {
     const script = document.createElement('script');
     script.innerHTML = data;
     document.body.appendChild(script);
    },
  });
}
// getJS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open('GET', '/main2.js');

//   request.onload = () => {
//     //创建，填写，插入body
//     const script = document.createElement('script');
//     script.innerHTML = request.response;
//     document.body.appendChild(script);
//   };
//   request.onerror = () => {};

//   request.send();
// };

//加载css AJAX方法

getCSS.onclick =()=>{
  ajax({
    method: 'GET',
    path: '/style.css',
    success: (data) => {
    const style = document.createElement('style');
     style.innerHTML = data;
     document.head.appendChild(style);
    },
  });
}
// getCSS.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.onreadystatechange = () => {
//     //下载完成，但不知道是成功2xx还是失败4xx 5xx
//     if (request.readyState === 4) {
//       if (request.status >= 200 && request.status < 300) {
//         //获取/创建/插入css,
//         const style = document.createElement('style');
//         style.innerHTML = request.response;
//         document.head.appendChild(style);
//       } else {
//         alert('加载css失败');
//       }
//     }
//   };
//   request.onerror = () => {
//     console.log('失败了');
//   };
//   request.open('GET', '/style.css'); //readyState = 1
//   request.send(); //readyState = 2
// }
