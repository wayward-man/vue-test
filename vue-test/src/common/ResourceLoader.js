//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import {resource} from './resource.js';


export class ResourceLoader {
    constructor() {
        this.map = new Map(resource);
        for (let [key, value] of this.map) {
            const image = new Image();
            image.src = PATH+ 'img/'+ value + '.png';
            this.map.set(key, image);
        }
    }
    onLoaded(callback) {
        let loadedCount = 0;
        for (let img of this.map.values()) {
            img.onload = () => {
            	console.log(img)
                loadedCount++;
                if (loadedCount >= this.map.size) {
                    callback(this.map);
                }
            }
            img.onerror = (err)=>{
            	console.warn(img)
            }
        }
    }

    static create() {
        return new ResourceLoader();
    }
}