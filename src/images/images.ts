import { customElement, bindable, bindingMode, observable } from "aurelia-framework"
import { Service } from "../service"
@customElement("images")
export class images {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) file;
    files=[];
    totalElement: number = 0;
    service;
    constructor(service: Service) {
        this.service = service;
        this.files=this.service.getSession("file");
        this.totalElement=this.files.length;
    }
    fileChanged() {
        this.files.push(this.service.push(this.file));
        this.totalElements();
    }
    clearList() {
        this.files = [];
        this.totalElements();
    }
    deleteElements() {
        // this.files.forEach(element => {
        //     if (element[0].checkedForDelete == true) {
        //         let deleteE = this.files.indexOf(element);
        //         this.files.splice(deleteE, 1);
        //         this.totalElements();
        //     }
        // });
        //Devo usare la funzione sotto perchè devo considerarlo come un unico oggetto.
        let trovato : boolean = true;
        while(trovato) {
            let targetedIndex = this.files.findIndex(x => x.checkedForDelete== true);
            if (targetedIndex == -1) {
                trovato = false;
            } else {
                this.files.splice(targetedIndex, 1);
                this.totalElements();
            }
        }
    }
    totalElements() {
        this.totalElement = this.files.length;
        this.service.setSession("file", this.files);
    }
}