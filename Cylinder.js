window.addEventListener("load", async function () {

    let CylinderOut = false;

    fpComponentsEnableLog();

    try {

        // Buttons from FPComponents library
        // Napit FPComponents kirjastosta

        var Cylinderbutton = new FPComponents.Button_A();
        Cylinderbutton.attachToId("button-cylinder-forward");
        Cylinderbutton.text = "Cylinder forward";
        Cylinderbutton._root.style.width = "200px";
        Cylinderbutton._root.style.height = "100px";
        Cylinderbutton.onclick = async function () {
            console.log("Cylinder forward");
        };

        Cylinderbutton.onclick = () => {
            PutCylinderOut();
        }

        var Cylinderbutton2 = new FPComponents.Button_A();
        Cylinderbutton2.attachToId("button-cylinder-backward");
        Cylinderbutton2.text = "Cylinder backward";
        Cylinderbutton2._root.style.width = "200px";
        Cylinderbutton2._root.style.height = "100px";
        Cylinderbutton2.onclick = async function () {
            console.log("Cylinder backward");
        };

        Cylinderbutton2.onclick = () => {
            PutCylinderIn();
        }

        
        // Functions for updating RAPID code variables
        // Funktiot RAPID koodiin muuttujien päivittämiseen

        async function PutCylinderOut() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/CylinderOut/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=true"
                });
                if (response.ok) {
                    CylinderOut = true;
                    console.log("Cylinder Out: " + CylinderOut);
                } else {
                    throw new Error("failed to put cylinder out");
                }
            } catch (error) {
                console.error("Error putting cylinder out:", error);
            }
        }

        async function PutCylinderIn() {
            try {
                const response = await fetch("https://192.168.125.1:443/rw/rapid/symbol/RAPID/T_ROB1/MainModule/CylinderOut/data", {
                    method: "POST",
                    headers: {
                        "Authorization": "Basic " + btoa("Default User:robotics"),
                        "Content-Type": "application/x-www-form-urlencoded;v=2.0",
                        "Accept": "application/hal+json;v=2.0",
                    },
                    body: "value=false"
                });
                if (response.ok) {
                    CylinderOut = false;
                    console.log("Cylinder Out: " + CylinderOut);
                } else {
                    throw new Error("failed to put cylinder in");
                }
            } catch (error) {
                console.error("Error putting cylinder in:", error);
            }
        }
        

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});