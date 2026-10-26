let e=document.querySelector(".list"),t=document.querySelector(".btn"),r=1,i=0,c=0;function n(r){let n;(n=new URLSearchParams({key:"57813574-c8977c5d3dcf506f235105762",editors_choice:"true",image_type:"photo",safesearch:"true",per_page:"12",page:r}),fetch(`https://pixabay.com/api/?${n}`).then(e=>{if(!e.ok)throw Error("Помилка завантаження зображень");return e.json()})).then(r=>{let n;i=r.totalHits,c+=r.hits.length,n=r.hits.map(({id:e,tags:t,previewURL:r})=>`<li id="${e}">
        <img src="${r}" alt="${t}">
      </li>`).join(""),e.insertAdjacentHTML("beforeend",n),(c>=i||0===r.hits.length)&&(t.style.display="none")}).catch(e=>{console.error(e)})}n(1),t.addEventListener("click",()=>{n(++r)});
//# sourceMappingURL=hw-17-js4.baf26394.js.map
