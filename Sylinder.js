window.addEventListener("load", async function () {

    let SylinderOut = false;

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

        Sylinderbutton.onclick = () => {
            PutSylinderOut();
        }

        var Sylinderbutton2 = new FPComponents.Button_A();
        Sylinderbutton2.attachToId("button-sylinder-backward");
        Sylinderbutton2.text = "Sylinder backward";
        Sylinderbutton2._root.style.width = "200px";
        Sylinderbutton2._root.style.height = "100px";
        Sylinderbutton2.onclick = async function () {
            console.log("Sylinder backward");
        };

        Sylinderbutton2.onclick = () => {
            PutSylinderIn();
        }

        async function PutSylinderOut() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/SylinderOut/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=true"
                });
                if (response.ok) {
                    SylinderOut = true;
                    console.log("Sylinder Out: " + SylinderOut);
                } else {
                    throw new Error("failed to put sylinder out");
                }
            } catch (error) {
                console.error("Error putting sylinder out:", error);
            }
        }

        async function PutSylinderIn() {
            try {
                const response = await fetch("https://192https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/SylinderOut/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=false"
                });
                if (response.ok) {
                    SylinderOut = false;
                    console.log("Sylinder Out: " + SylinderOut);
                } else {
                    throw new Error("failed to put sylinder in");
                }
            } catch (error) {
                console.error("Error putting sylinder in:", error);
            }
        }
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});