class DB{
    ready = false;
    constructor(){
        console.log("Initiate Connection")
        this.ready = true;
    }

    isReady(){
        return ready;
    }
}

export default Object.freeze(new DB());