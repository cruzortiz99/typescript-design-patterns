interface IPhone{
    useLightning();
}

interface Android{
    useMicroUSB();
}

class iPhone7 implements IPhone {
    useLightning() {
        console.log('Using lightning port..');
    }
}

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

// -----
// Adapts One class, so it can execute similar functions that are call different for example.
class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useLightning();
    }
}
// Create a class to be adapted
let iphone = new iPhone7();
// Create the adapter base on a class, and hide the execution of a method by calling the adapter method insted
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
// Execute the charge of the adapter and execute the charge of the iphone 
chargeAdaptor.useMicroUSB();
