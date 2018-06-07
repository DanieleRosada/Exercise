
(<any>File.prototype).toJSON = function() { 
    if (this) {
        return {
        'lastModified'     : this.lastModified,
        'lastModifiedDate' : this.lastModifiedDate,
        'name'             : this.name,
        'size'             : this.size,
        'type'             : this.type 
        }
    }
};

export class Service {
    constructor() {

    }
    setSession(key, values) {
        this.removeSession(key);

        let files: Array<any> = [];
        for (let i = 0; i < values.length; i++) {

            files.push(values[i][0]);
        }

        console.log("service::setSession::files", files);
        console.log("service::setSession::files::stringify", JSON.stringify(files));

 
        sessionStorage.setItem(key, JSON.stringify(files));
    }
    clearSession() {
        sessionStorage.clear();
    }
    removeSession(key) {
        sessionStorage.removeItem(key);
    }
    getSession(key) {
        console.log("getSession::value of session"+sessionStorage.getItem(key));
        console.log("getSession::value of session parse"+JSON.parse(sessionStorage.getItem(key)));
        let x=[];
        let obj;
        let objs: Object[];
        objs=JSON.parse(sessionStorage.getItem(key));
        if (objs) {
            for (let i=0; i<objs.length;i++){
                x.push(objs[i]);
                console.log(objs[i]);
            }
            console.log("Sono x"+x);
           return x;
        }
        return [];

    }

}