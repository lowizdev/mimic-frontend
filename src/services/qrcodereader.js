import {BrowserMultiFormatReader} from '@zxing/library';

export const decodeOnce = (videoAreaRef) => {

    const codeReader = new BrowserMultiFormatReader();
    codeReader.listVideoInputDevices().then((devices) => {

        let selectedDeviceId = devices[0].deviceId; //TODO: ENABLE SELECTION

        //console.log(videoAreaRef.current.id);//video

        codeReader.decodeFromVideoDevice(selectedDeviceId, videoAreaRef.current.id, (result, err) => {
            if(result){
                console.log(result);
            }
        });

    }).catch((err) => {
        console.log(err);
    }) ;
    



}