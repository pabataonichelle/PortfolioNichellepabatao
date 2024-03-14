
const card = (title2,img1,img2,img3,para2,para3,para4) => {
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<h>${title2}</h>
                    <p>${para2}</p>
                    <p>${para3}</p>
                    <p>${para4}</p>
                    <img src="./image/${img1}">
                    <img src="./image/${img1}">
                    <img src="./image/${img1}">
        `
    return div
}

export { card }