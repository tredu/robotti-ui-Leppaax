window.addEventListener("load", async function () {

    fpComponentsEnableLog();

    try {

        var radio1 = new FPComponents.Radio_A();
        radio1.desc = "Automatic"
        radio1.attachToId("radio1-arm-mode");

        var radio2 = new FPComponents.Radio_A();
        radio2.desc = "Manual";
        radio1.checked = true;
        radio2.attachToId("radio2-arm-mode");

        radio1.onclick = () => {
            radio2.checked = false;
        }

        radio2.onclick = () => {
            radio1.checked = false;
        }
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});