// api
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"GET"
})
    .then((response =>{
        if (response.status !==200){
            throw "error";
        }
        return response.json();
    }))
    .then((responseData =>{
        let latestnewsWrapper = document.querySelector(".latest-news__card__wrapper");
        let btn = document.querySelector(".btn");
        function createCard(item){
            // latest-news__card
            let card = document.createElement("div");
            card.setAttribute("class","latest-news__card");
            latestnewsWrapper.appendChild(card);

            // inside latest-news__card
            let h1 = document.createElement("h1");
            h1.textContent = item.title;
            card.appendChild(h1);

            let p = document.createElement("p");
            p.textContent = item.body;
            card.appendChild(p);

            // time
            let time = document.createElement("div")
            time.setAttribute("class","time");
            card.appendChild(time);
            let img = document.createElement("img");
            img.setAttribute("src","img/time.svg");
            time.appendChild(img);
            let span = document.createElement("span");
            span.textContent = item.id + ' m ago';
            time.appendChild(span);
        }
        for(let k=0;k<10;k++){
            createCard(responseData[k]);
        }
        // responseData.forEach(function(each){
        //     console.log(each.title);
        // })
        let num = 11;
        btn.addEventListener("click",function(){
            createCard(responseData[num])
            num+=1;
        })

    }))
    .catch((error =>{
        console.log(error)
    }))
