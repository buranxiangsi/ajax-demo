
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
    }
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

getJSON.onclick = () => {
  ajax({
    method: 'GET',
    path: '/5.json',
    success: (data) => {
      myName.textContent = data.name
    },
  });
  
};
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