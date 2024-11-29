window.addEventListener("load", async function () {

    fpComponentsEnableLog();

    try {

        var Sylinderbutton = new FPComponents.Button_A();
        Sylinderbutton.attachToId("button-sylinder-forward");
        Sylinderbutton.text = "Sylinder forward";
        Sylinderbutton._root.style.width = "200px";
        Sylinderbutton._root.style.height = "100px";
        Sylinderbutton.onclick = async function () {
            console.log("Sylinder forward");
        };

        var Sylinderbutton2 = new FPComponents.Button_A();
        Sylinderbutton2.attachToId("button-sylinder-backward");
        Sylinderbutton2.text = "Sylinder backward";
        Sylinderbutton2._root.style.width = "200px";
        Sylinderbutton2._root.style.height = "100px";
        Sylinderbutton2.onclick = async function () {
            console.log("Sylinder backward");
        };
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});