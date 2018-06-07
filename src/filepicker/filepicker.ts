import {customElement, bindable, bindingMode} from "aurelia-framework";
@customElement("filepicker")
export class filepicker{
    @bindable({ defaultBindingMode: bindingMode.twoWay }) file: File;
}