const $site = document.querySelector("#site");
models.forEach((block)=>{
    let html = "";
    if (block.type === "title") html = title(block);
    else if (block.type === "text") html = text(block);
    else if (block.type === "columns") html = list(block);
    else if (block.type === "img") html = image(block);
    $site.insertAdjacentHTML("beforeend", html);
});
function title(block) {
    return `
            <div class="row">
               <div class="col-sm">
                   <h1>${block.value}</h1>
               </div>
            </div>`;
}
function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>`;
}
function list(block) {
    const html = block.value.map((el)=>`<div class="col-sm">${el}</div>`);
    return `
        <div class="row">
            ${html.join("")}
        </div>
    `;
}
function image(block) {
    return `
    <div class="row">
        <img src="${block.value}">
    </div>`;
}

//# sourceMappingURL=index.579125c3.js.map
