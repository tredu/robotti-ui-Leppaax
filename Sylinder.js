window.addEventListener("load", async function () {

    fpComponentsEnableLog();

    try {

        var Sylinderbutton = new FPComponents.Button_A();
        Sylinderbutton.attachToId("button-sylinder-forward");
        Sylinderbutton.text = "Sylinder forward";
        Sylinderbutton.onclick = async function () {
            console.log("Sylinder forward");
        };

        var Sylinderbutton = new FPComponents.Button_A();
        Sylinderbutton.attachToId("button-sylinder-backward");
        Sylinderbutton.text = "Sylinder backward";
        Sylinderbutton.onclick = async function () {
            console.log("Sylinder backward");
        };
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});