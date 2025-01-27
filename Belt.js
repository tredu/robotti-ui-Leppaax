window.addEventListener("load", async function () {

    let BeltForward = false;
    let BeltBackward = false;

    fpComponentsEnableLog();

    try {

        var ControlmodeButton = new FPComponents.Button_A();
        ControlmodeButton.attachToId("button-belt-forward");
        ControlmodeButton.text = "Belt forward";
        ControlmodeButton._root.style.width = "200px";
        ControlmodeButton._root.style.height = "100px";

        ControlmodeButton._root.onmousedown = async function () {
            RunBeltForward();
            console.log("Belt forward");
        };

        ControlmodeButton._root.onmouseup = async function () {
            StopBeltForward();
            console.log("Belt stopped");
        }

        var ControlmodeButton2 = new FPComponents.Button_A();
        ControlmodeButton2.attachToId("button-belt-backward");
        ControlmodeButton2.text = "Belt backward";
        ControlmodeButton2._root.style.width = "200px";
        ControlmodeButton2._root.style.height = "100px";

        ControlmodeButton2._root.onmousedown = async function () {
            RunBeltBackward();
        }

        ControlmodeButton2._root.onmouseup = async function () {
            StopBeltBackward();
        }

        // var BeltSpeedSlider = new FPComponents.Slider_A();
        // BeltSpeedSlider.min = 0;
        // BeltSpeedSlider.max = 100;
        // BeltSpeedSlider.value = RobotBeltSpeed;
        // BeltSpeedSlider.tickStep = 5;
        // BeltSpeedSlider.displayTicks = true;
        // BeltSpeedSlider.enabled = true;
        // BeltSpeedSlider.label = "Belt Speed:";
        // BeltSpeedSlider.unit = " %";
        // BeltSpeedSlider.displayLabel = true;
        // BeltSpeedSlider.displayValue = true;
        // BeltSpeedSlider.width = 400;
        // BeltSpeedSlider.height = 50;
        // BeltSpeedSlider.numberOfDecimals = 0;
        // BeltSpeedSlider.attachToId("slide-belt-speed");
        // BeltSpeedSlider.ondrag = function(value){
        //     console.log("Slider thumb draged");
        // }
        // BeltSpeedSlider.onrelease = function(value){
        //     console.log("Slider thumb released");
        // }

        async function RunBeltForward() {
            try {
                const response = await fetch("https://https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/BeltForward/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=true"
                });

                if (response.ok) {
                    BeltForward = true;
                    console.log("Belt Forward: " + BeltForward);
                } else {
                    throw new Error("failed to run belt forward");
                }
            } catch (error) {
                console.error("Error running belt forward:", error);
            }
        }

        async function StopBeltForward() {
            try {
                const response = await fetch("https://https://https://https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/BeltForward/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=false"
                });

                if (response.ok) {
                    BeltForward = false;
                    console.log("Belt Forward: " + BeltForward);
                } else {
                    throw new Error("failed to stop belt forward");
                }
            } catch (error) {
                console.error("Error stopping belt forward:", error);
            }
        }

        async function RunBeltBackward() {
            try {
                const response = await fetch("https://https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/BeltBackward/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=true"
                });

                if (response.ok) {
                    BeltBackward = true;
                    console.log("Belt Backward: " + BeltBackward);
                } else {
                    throw new Error("failed to run belt backward");
                }
            } catch (error) {
                console.error("Error running belt backward:", error);
            }
        }

        async function StopBeltBackward() {
            try {
                const response = await fetch("https://https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/BeltBackward/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=false"
                });

                if (response.ok) {
                    BeltBackward = false;
                    console.log("Belt Backward: " + BeltBackward);
                } else {
                    throw new Error("failed to stop belt backward");
                }
            } catch (error) {
                console.error("Error stopping belt backward:", error);
            }
        }

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});