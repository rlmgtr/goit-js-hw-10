!function(){var e="https://api.thecatapi.com/v1",n="live_J9QkgshB2A5IXJFOZuLC7K6IskaQ4lYsPnuVtoFdmvj6zZsyrWlvCOYe5uwiMvW2";function t(t){return fetch("".concat(e,"/images/search?api_key=").concat(n,"&breed_ids=").concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var c=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),a=document.querySelector(".loader"),i=document.querySelector(".error");function r(){i.classList.remove("is-hidden"),c.classList.add("is-hidden")}fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){a.classList.replace("loader","is-hidden");var n=e.map((function(e){var n=e.name,t=e.id;return"<option value ='".concat(t,"'>").concat(n,"</option>")}));c.insertAdjacentHTML("beforeend",n),c.classList.remove("is-hidden")})).catch(r),c.addEventListener("change",(function(e){a.classList.replace("is-hidden","loader"),c.classList.add("is-hidden"),s.classList.add("is-hidden"),t(e.target.value).then((function(e){a.classList.replace("loader","is-hidden"),c.classList.remove("is-hidden");var n=e[0],t=n.url,i=n.breeds[0],r=i.name,o=i.description,d=i.temperament;s.innerHTML='\n      <img src="'.concat(t,'" alt="').concat(r,'" width="400"/>\n      <div class="box">\n        <h2>').concat(r,"</h2>\n        <p>").concat(o,"</p>\n        <p><strong>Temperament:</strong> ").concat(d,"</p>\n      </div>\n      "),s.classList.remove("is-hidden")})).catch(r)}))}();
//# sourceMappingURL=index.52c99532.js.map
