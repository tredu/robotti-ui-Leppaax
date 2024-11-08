window.addEventListener("load", async function () {

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
        button1._root.style.width = "100px";
        button1._root.style.height = "100px";
        button1._root.style.display = "flex";
        button1._root.style.alignItems = "center";
        button1._root.style.justifyContent = "center";
        button1._root.style.border= "1px solid black";

        var button2 = new FPComponents.Button_A();
        button2.text = "Stop";
        button2.attachToId("Arm-auto-stop");
        button2._root.style.backgroundColor = "#dc3545";
        button2._root.style.color = "#ffffff";
        button2._root.style.borderRadius = "100px";
        button2._root.style.width = "100px";
        button2._root.style.height = "100px";
        button2._root.style.display = "flex";
        button2._root.style.alignItems = "center";
        button2._root.style.justifyContent = "center";
        button2._root.style.border= "1px solid black";

        function toggleButtons() {
            if (radio1.checked) {
                button1._root.style.display = "flex";
                button2._root.style.display = "flex";
            } else {
                button1._root.style.display = "none";
                button2._root.style.display = "none";
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
