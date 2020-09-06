
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js";

function _drawImage() {
    console.log("Image here", ProxyState.image)
    //document.body.style.backgroundImage = `${ProxyState.image.image}`
    document.getElementById("bg-img").style.backgroundImage = `url(${ProxyState.image})`
}

export default class ImageController {
    constructor() {
        this.getImage()
        ProxyState.on("image", _drawImage)
    }

    getImage() {
        try {
            imageService.getImage()
        } catch (error) {
            console.error(error);
        }
    }
}