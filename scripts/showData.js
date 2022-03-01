async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }
}

function appendData(data, location) {
        
    data.forEach(function (data) {
       let div = document.createElement("div");

            let content = document.createElement("p");

            content.innerText = data.description;
            
           let author = document.createElement("p");
           author.innerText = data.author;
        
           let img = document.createElement("img")
           img.src = data.image;
            
            div.append(img,content,author);
            location.append(div);      
    });

            
}

export {getData,appendData}