window.addEventListener("load", async function () {
    fpComponentsEnableLog();

    try {
        var Menu = new FPComponents.Hamburgermenu_A();
        Menu.addView("Arm", "Arm-main-controlbox", "App_Default_100.png", false);
        Menu.addView("Belt", "Belt-main-controlbox", "App_Default_100.png", true);
        Menu.addView("Sylinder", "Sylinder-main-controlbox", "App_Default_100.png", false);
        Menu.attachToId("Burgermenu");

        Menu.onViewChange = function (newView) {
            updateVisibleView(newView);
        };

        function updateVisibleView(activeView) {
            const views = ["Belt-main-controlbox", "Arm-main-controlbox", "Sylinder-main-controlbox"];
            views.forEach(view => {
                const element = document.querySelector(`.${view}`);
                if (view === activeView) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
            });
        }

    } catch (e) {
        var err = JSON.stringify(e);
        console.log(err);
        console.log(e);
        FPComponents.Popup_A.message("Something went wrong", "Application might not work as intended");
    }
});
