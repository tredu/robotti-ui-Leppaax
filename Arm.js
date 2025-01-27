window.addEventListener("load", async function () {

    let AutomaticMode = false;
    let AutomaticModeOn = false;

    fpComponentsEnableLog();

    try {
        var radio1 = new FPComponents.Radio_A();
        radio1.desc = "Automatic";
        radio1.attachToId("radio1-arm-mode");
        radio1.checked = true;

        var radio2 = new FPComponents.Radio_A();
        radio2.desc = "Manual";
        radio2.attachToId("radio2-arm-mode");

        radio1.onclick = () => {
            radio2.checked = false;
            toggleButtons();
        };

        radio2.onclick = () => {
            radio1.checked = false;
            toggleButtons();
        };

        var button1 = new FPComponents.Button_A();
        button1.text = "Start";
        button1.attachToId("Arm-auto-start");
        button1._root.style.backgroundColor = "#28c76f";
        button1._root.style.color = "#ffffff";
        button1._root.style.borderRadius = "100px";
        button1._root.style.width = "150px";
        button1._root.style.height = "150px";
        button1._root.style.display = "flex";
        button1._root.style.alignItems = "center";
        button1._root.style.justifyContent = "center";
        button1._root.style.border = "1px solid black";

        button1.onclick = () => {
            startAutomaticMode();
        };

        var button2 = new FPComponents.Button_A();
        button2.text = "Stop";
        button2.attachToId("Arm-auto-stop");
        button2._root.style.backgroundColor = "#dc3545";
        button2._root.style.color = "#ffffff";
        button2._root.style.borderRadius = "100px";
        button2._root.style.width = "150px";
        button2._root.style.height = "150px";
        button2._root.style.display = "flex";
        button2._root.style.alignItems = "center";
        button2._root.style.justifyContent = "center";
        button2._root.style.border = "1px solid black";

        button2.onclick = () => {
            stopAutomaticMode();
        };

        function toggleButtons() {
            if (radio1.checked) {
                button1._root.style.display = "flex";
                button2._root.style.display = "flex";
                AutomaticMode = true;
                console.log("Robot Arm Automatic Mode: " + AutomaticMode);
            } else {
                button1._root.style.display = "none";
                button2._root.style.display = "none";
                AutomaticMode = false;
                console.log("Robot Arm Automatic Mode: " + AutomaticMode);
                stopAutomaticMode();
            }

            toggleAutomaticMode();
        }

        async function toggleAutomaticMode() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/AutomaticMode/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: `value=${AutomaticMode}`
                });

                if (response.ok) {
                    console.log("AutomaticMode updated to: " + AutomaticMode);
                } else {
                    throw new Error("Failed to update AutomaticMode");
                }
            } catch (error) {
                console.error("Error updating AutomaticMode:", error);
            }
        }

        async function startAutomaticMode() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/AutomaticModeOn/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=true"
                });

                if (response.ok) {
                    AutomaticModeOn = true;
                    console.log("Robot Arm Automatic Mode Started: " + AutomaticModeOn);
                } else {
                    throw new Error("Failed to start automatic mode");
                }
            } catch (error) {
                console.error("Error starting automatic mode:", error);
            }
        }

        async function stopAutomaticMode() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/AutomaticModeOn/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=false"
                });

                if (response.ok) {
                    AutomaticModeOn = false;
                    console.log("Robot Arm Automatic Mode Stopped: " + AutomaticModeOn);
                } else {
                    throw new Error("Failed to stop automatic mode");
                }
            } catch (error) {
                console.error("Error stopping automatic mode:", error);
            }
        }
        

        toggleButtons();

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});
