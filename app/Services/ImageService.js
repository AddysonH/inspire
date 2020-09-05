//TODO create methods to retrieve data and save to the State
import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"


class ImageService {
    constructor() {

    }

    async getImage() {
        console.log("[Image Info Here]")
        let res = await api.get("images")
        ProxyState.image = new Image(res.data.url)

    }
}

const imageService = new ImageService();
export default imageService;