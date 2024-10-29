window.addEventListener("load", async function () {

    fpComponentsEnableLog();

    try {

        var ControlmodeButton = new FPComponents.Button_A();
        ControlmodeButton.attachToId("button-belt-forward");
        ControlmodeButton.text = "Belt forward";
        ControlmodeButton.onclick = async function () {
            console.log("Belt forward");
        };

        var ControlmodeButton = new FPComponents.Button_A();
        ControlmodeButton.attachToId("button-belt-backward");
        ControlmodeButton.text = "Belt backward";
        ControlmodeButton.onclick = async function () {
            console.log("Belt backward");
        };

        var BeltSpeedSlider = new FPComponents.Slider_A();
        BeltSpeedSlider.min = 0;
        BeltSpeedSlider.max = 100;
        BeltSpeedSlider.value = 0;
        BeltSpeedSlider.tickStep = 5;
        BeltSpeedSlider.displayTicks = true;
        BeltSpeedSlider.enabled = true;
        BeltSpeedSlider.label = "Belt Speed:";
        BeltSpeedSlider.unit = " %";
        BeltSpeedSlider.displayLabel = true;
        BeltSpeedSlider.displayValue = true;
        BeltSpeedSlider.width = 200;
        BeltSpeedSlider.numberOfDecimals = 0;
        BeltSpeedSlider.attachToId("slide-belt-speed");
        BeltSpeedSlider.ondrag = function(value){
            console.log("Slider thumb draged");
        }
        BeltSpeedSlider.onrelease = function(value){
            console.log("Slider thumb released");
        }
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});