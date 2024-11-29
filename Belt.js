window.addEventListener("load", async function () {

    fpComponentsEnableLog();

    RobotBeltForward = false;
    RobotBeltBackward = false;
    RobotBeltSpeed = 0;

    try {

        var ControlmodeButton = new FPComponents.Button_A();
        ControlmodeButton.attachToId("button-belt-forward");
        ControlmodeButton.text = "Belt forward";
        ControlmodeButton._root.style.width = "200px";
        ControlmodeButton._root.style.height = "100px";
        ControlmodeButton.onclick = async function () {
            console.log("Belt forward");
        };

        var ControlmodeButton2 = new FPComponents.Button_A();
        ControlmodeButton2.attachToId("button-belt-backward");
        ControlmodeButton2.text = "Belt backward";
        ControlmodeButton2._root.style.width = "200px";
        ControlmodeButton2._root.style.height = "100px";
        ControlmodeButton2.onclick = async function () {
            console.log("Belt backward");
        };

        var BeltSpeedSlider = new FPComponents.Slider_A();
        BeltSpeedSlider.min = 0;
        BeltSpeedSlider.max = 100;
        BeltSpeedSlider.value = RobotBeltSpeed;
        BeltSpeedSlider.tickStep = 5;
        BeltSpeedSlider.displayTicks = true;
        BeltSpeedSlider.enabled = true;
        BeltSpeedSlider.label = "Belt Speed:";
        BeltSpeedSlider.unit = " %";
        BeltSpeedSlider.displayLabel = true;
        BeltSpeedSlider.displayValue = true;
        BeltSpeedSlider.width = 400;
        BeltSpeedSlider.height = 50;
        BeltSpeedSlider.numberOfDecimals = 0;
        BeltSpeedSlider.attachToId("slide-belt-speed");
        BeltSpeedSlider.ondrag = function(value){
            console.log("Slider thumb draged");
        }
        BeltSpeedSlider.onrelease = function(value){
            console.log("Slider thumb released");
        }
        
        function RobotBeltForward(){
            
        }

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});