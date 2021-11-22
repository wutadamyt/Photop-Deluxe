var storage = window.localStorage;
if (storage.getItem("photop-theme-color") != null) {
    ThemeColor = storage.getItem("photop-theme-color");
} else {
    ThemeColor = "#5ab7fa";
}
var ogRole = LoginUserRole;
function ChangeTheme() {
    ShowPopUp("Change Theme", "What do you want to do with the theme?", [["Choose color", ThemeColor, "ChooseTheme"],["Default", "#5ab7fa", "SetDefaultTheme"],["Bootop", "#eb6123", "SetBootopTheme"],["OG", "#a587ff", "SetOGTheme"],["My Themes", ThemeColor, "MyThemes"],["Back", "gray", "PhotopDeluxe"]]);
}
function ChooseTheme() {
    var x = prompt("Enter the new theme color.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color.", [["Okay", ThemeColor, "ChangeTheme"]]);
    } else {
        ThemeColor = x;
        storage.setItem("photop-theme-color", ThemeColor);
        ShowPopUp("Theme Color Updated", "The theme color was updated. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
    }
    updateSvgButtons();
}
function SetDefaultTheme() {
    ThemeColor = "#5ab7fa";
    storage.setItem("photop-theme-color", ThemeColor);
    updateSvgButtons();
    ShowPopUp("Theme Color Reset", "The theme color was reset. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
}
function SetBootopTheme() {
    ThemeColor = "#eb6123";
    storage.setItem("photop-theme-color", ThemeColor);
    updateSvgButtons();
    ShowPopUp("Bootop Theme Applied", "The Bootop theme was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
}
function SetOGTheme() {
    ThemeColor = "#a587ff";
    storage.setItem("photop-theme-color", ThemeColor);
    updateSvgButtons();
    ShowPopUp("OG Theme Applied", "The OG theme was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
}
function MyThemes() {
    ShowPopUp("Saved Themes", "Here are the themes you've saved. You can save up to 5.", [["1", storage.getItem("photop-theme-1"), "Theme1"],["2", storage.getItem("photop-theme-2"), "Theme2"],["3", storage.getItem("photop-theme-3"), "Theme3"],["4", storage.getItem("photop-theme-4"), "Theme4"],["5", storage.getItem("photop-theme-5"), "Theme5"],["Back", "gray", "ChangeTheme"]]);
}
function Theme1() {
    if (storage.getItem("photop-theme-1") == null || storage.getItem("photop-theme-1") == "null") {
        ShowPopUp("Unused Theme Slot", "This theme slot isn't used. Would you like to choose a theme for this slot?", [["Choose Color", ThemeColor, "ChooseTheme1"],["Back", "gray", "MyThemes"]]);
    } else {
        ShowPopUp("Theme Slot 1", "Current color in slot: <b>" + storage.getItem("photop-theme-1") + "</b>.", [["Use Theme", storage.getItem("photop-theme-1"), "SetTheme1"],["Choose New Color", ThemeColor, "ChooseTheme1"],["Delete", "tomato", "DeleteTheme1"],["Back", "gray", "MyThemes"]]);
    }
}
function ChooseTheme1() {
    var x = prompt("Enter the new theme color for slot 1.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color in slot 1.", [["Okay", ThemeColor, "Theme1"]]);
    } else {
        storage.setItem("photop-theme-1", x);
        ShowPopUp("Theme 1 Updated", "The theme color in slot <b>1</b> was updated.", [["Okay", ThemeColor, "Theme1"]]);
    }
}
function SetTheme1() {
    storage.setItem("photop-theme-color", storage.getItem("photop-theme-1"));
    ThemeColor = storage.getItem("photop-theme-1");
    updateSvgButtons();
    ShowPopUp("Theme 1 Applied", "The theme color in slot 1 was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]])
}
function DeleteTheme1() {
    ShowPopUp("Delete Theme 1?", "Are you sure you want to delete the theme color in slot 1? You won't be able to undo this action.", [["Yes", "tomato", "Del1"],["No", "gray", "Theme1"]]);
}
function Del1() {
    storage.setItem("photop-theme-1", null);
    ShowPopUp("Theme Deleted", "Theme 1 was deleted.", [["Okay", ThemeColor, "MyThemes"]]);
}
function Theme2() {
    if (storage.getItem("photop-theme-2") == null || storage.getItem("photop-theme-2") == "null") {
        ShowPopUp("Unused Theme Slot", "This theme slot isn't used. Would you like to choose a theme for this slot?", [["Choose Color", ThemeColor, "ChooseTheme2"],["Back", "gray", "MyThemes"]]);
    } else {
        ShowPopUp("Theme Slot 2", "Current color in slot: <b>" + storage.getItem("photop-theme-2") + "</b>.", [["Use Theme", storage.getItem("photop-theme-2"), "SetTheme2"],["Choose New Color", ThemeColor, "ChooseTheme2"],["Delete", "tomato", "DeleteTheme2"],["Back", "gray", "MyThemes"]]);
    }
}
function ChooseTheme2() {
    var x = prompt("Enter the new theme color for slot 2.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color in slot 2.", [["Okay", ThemeColor, "Theme2"]]);
    } else {
        storage.setItem("photop-theme-2", x);
        ShowPopUp("Theme 2 Updated", "The theme color in slot <b>2</b> was updated.", [["Okay", ThemeColor, "Theme2"]]);
    }
}
function SetTheme2() {
    storage.setItem("photop-theme-color", storage.getItem("photop-theme-2"));
    ThemeColor = storage.getItem("photop-theme-2");
    updateSvgButtons();
    ShowPopUp("Theme 2 Applied", "The theme color in slot 2 was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]])
}
function DeleteTheme2() {
    ShowPopUp("Delete Theme 2?", "Are you sure you want to delete the theme color in slot 2? You won't be able to undo this action.", [["Yes", "tomato", "Del2"],["No", "gray", "Theme2"]]);
}
function Del2() {
    storage.setItem("photop-theme-2", null);
    ShowPopUp("Theme Deleted", "Theme 2 was deleted.", [["Okay", ThemeColor, "MyThemes"]]);
}
function Theme3() {
    if (storage.getItem("photop-theme-3") == null || storage.getItem("photop-theme-3") == "null") {
        ShowPopUp("Unused Theme Slot", "This theme slot isn't used. Would you like to choose a theme for this slot?", [["Choose Color", ThemeColor, "ChooseTheme3"],["Back", "gray", "MyThemes"]]);
    } else {
        ShowPopUp("Theme Slot 3", "Current color in slot: <b>" + storage.getItem("photop-theme-3") + "</b>.", [["Use Theme", storage.getItem("photop-theme-3"), "SetTheme3"],["Choose New Color", ThemeColor, "ChooseTheme3"],["Delete", "tomato", "DeleteTheme3"],["Back", "gray", "MyThemes"]]);
    }
}
function ChooseTheme3() {
    var x = prompt("Enter the new theme color for slot 3.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color in slot 3.", [["Okay", ThemeColor, "Theme3"]]);
    } else {
        storage.setItem("photop-theme-3", x);
        ShowPopUp("Theme 3 Updated", "The theme color in slot <b>3</b> was updated.", [["Okay", ThemeColor, "Theme3"]]);
    }
}
function SetTheme3() {
    storage.setItem("photop-theme-color", storage.getItem("photop-theme-3"));
    ThemeColor = storage.getItem("photop-theme-3");
    updateSvgButtons();
    ShowPopUp("Theme 3 Applied", "The theme color in slot 3 was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]])
}
function DeleteTheme3() {
    ShowPopUp("Delete Theme 3?", "Are you sure you want to delete the theme color in slot 3? You won't be able to undo this action.", [["Yes", "tomato", "Del3"],["No", "gray", "Theme3"]]);
}
function Del3() {
    storage.setItem("photop-theme-3", null);
    ShowPopUp("Theme Deleted", "Theme 3 was deleted.", [["Okay", ThemeColor, "MyThemes"]]);
}
function Theme4() {
    if (storage.getItem("photop-theme-4") == null || storage.getItem("photop-theme-4") == "null") {
        ShowPopUp("Unused Theme Slot", "This theme slot isn't used. Would you like to choose a theme for this slot?", [["Choose Color", ThemeColor, "ChooseTheme4"],["Back", "gray", "MyThemes"]]);
    } else {
        ShowPopUp("Theme Slot 4", "Current color in slot: <b>" + storage.getItem("photop-theme-4") + "</b>.", [["Use Theme", storage.getItem("photop-theme-4"), "SetTheme4"],["Choose New Color", ThemeColor, "ChooseTheme4"],["Delete", "tomato", "DeleteTheme4"],["Back", "gray", "MyThemes"]]);
    }
}
function ChooseTheme4() {
    var x = prompt("Enter the new theme color for slot 4.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color in slot 4.", [["Okay", ThemeColor, "Theme4"]]);
    } else {
        storage.setItem("photop-theme-4", x);
        ShowPopUp("Theme 4 Updated", "The theme color in slot <b>4</b> was updated.", [["Okay", ThemeColor, "Theme4"]]);
    }
}
function SetTheme4() {
    storage.setItem("photop-theme-color", storage.getItem("photop-theme-4"));
    ThemeColor = storage.getItem("photop-theme-4");
    updateSvgButtons();
    ShowPopUp("Theme 4 Applied", "The theme color in slot 4 was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]])
}
function DeleteTheme4() {
    ShowPopUp("Delete Theme 4?", "Are you sure you want to delete the theme color in slot 4? You won't be able to undo this action.", [["Yes", "tomato", "Del4"],["No", "gray", "Theme4"]]);
}
function Del4() {
    storage.setItem("photop-theme-4", null);
    ShowPopUp("Theme Deleted", "Theme 4 was deleted.", [["Okay", ThemeColor, "MyThemes"]]);
}
function Theme5() {
    if (storage.getItem("photop-theme-5") == null || storage.getItem("photop-theme-5") == "null") {
        ShowPopUp("Unused Theme Slot", "This theme slot isn't used. Would you like to choose a theme for this slot?", [["Choose Color", ThemeColor, "ChooseTheme5"],["Back", "gray", "MyThemes"]]);
    } else {
        ShowPopUp("Theme Slot 5", "Current color in slot: <b>" + storage.getItem("photop-theme-5") + "</b>.", [["Use Theme", storage.getItem("photop-theme-5"), "SetTheme5"],["Choose New Color", ThemeColor, "ChooseTheme5"],["Delete", "tomato", "DeleteTheme5"],["Back", "gray", "MyThemes"]]);
    }
}
function ChooseTheme5() {
    var x = prompt("Enter the new theme color for slot 5.");
    if (x == null) {
        ShowPopUp("Cancelled", "You didn't change the theme color in slot 5.", [["Okay", ThemeColor, "Theme5"]]);
    } else {
        storage.setItem("photop-theme-5", x);
        ShowPopUp("Theme 5 Updated", "The theme color in slot <b>5</b> was updated.", [["Okay", ThemeColor, "Theme5"]]);
    }
}
function SetTheme5() {
    storage.setItem("photop-theme-color", storage.getItem("photop-theme-5"));
    ThemeColor = storage.getItem("photop-theme-5");
    updateSvgButtons();
    ShowPopUp("Theme 5 Applied", "The theme color in slot 5 was applied. It will take effect the next time you reload.", [["Okay", ThemeColor, "PhotopDeluxe"]])
}
function DeleteTheme5() {
    ShowPopUp("Delete Theme 5?", "Are you sure you want to delete the theme color in slot 5? You won't be able to undo this action.", [["Yes", "tomato", "Del5"],["No", "gray", "Theme5"]]);
}
function Del5() {
    storage.setItem("photop-theme-5", null);
    ShowPopUp("Theme Deleted", "Theme 5 was deleted.", [["Okay", ThemeColor, "MyThemes"]]);
}
function getRoleColor(color) {
	switch (color) {
		case "Owner":
			return "#ffca28";
		case "Moderator":
			return "#2f7889";
		case "Contributor":
			return "#92cedd";
		case "Developer":
			return "#76ff03";
		case "Partner":
			return "#546e7a";
		case "Verified":
			return "#f44336";
		case "Tester":
			return "#00bfa5";
		default:
			return ThemeColor;
	}
}
function VisualRole() {
    ShowPopUp("Set Visual Role", "What visual role do you want? This won't actually give you permission to use any moderation tools, and any attempt to use said tools will result in you being logged out.", [["Owner", "#ffca28", "SetOwnerRole"],["Moderator", "#2f7889", "SetModeratorRole"],["Back", "gray", "PhotopDeluxe"]]);
}
function SetOwnerRole() {
    LoginUserRole = "Owner";
    ShowPopUp("Owner Role Set", "Your role was set to <b>Owner</b>. Keep in mind that this does not let you use any Owner permissions.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
}
function SetModeratorRole() {
    LoginUserRole = "Moderator";
    ShowPopUp("Moderator Role Set", "Your role was set to <b>Moderator</b>. Keep in mind that this does not let you use any Moderator permissions.", [["Okay", ThemeColor, "PhotopDeluxe"]]);
}
function PhotopDeluxe() {
    ShowPopUp("Photop Deluxe", "Welcome to the Deluxe menu. What do you want to do?", [["Change Theme", ThemeColor, "ChangeTheme"],["Set Visual Role", ThemeColor, "VisualRole"],["Close", "gray", null]]);
}
CreateSideButton("SidebarDeluxeButton", "Deluxe", "Access Deluxe menu.", '<svg style="position: relative; height: 100%; width: 100%; cursor: pointer; " id="DeluxeButtonSvg" viewBox="0 0 513.607 513.607"><g style="" id="DeluxeButtonG" fill="' + ThemeColor + '" stroke="#ffffff" stroke-width="0"><path style="" id="Svg" d="m503.384 243.685c-30.059-12.05-58.533-34.623-82.345-65.281-24.287-31.271-43.862-71.117-56.609-115.233l-14.588-50.485c-1.854-6.418-7.729-10.836-14.41-10.836s-12.556 4.418-14.41 10.836l-14.587 50.484c-12.747 44.116-32.322 83.964-56.609 115.233-23.812 30.658-52.286 53.231-82.346 65.281-5.61 2.249-9.322 7.645-9.417 13.688-.095 6.044 3.446 11.554 8.983 13.977l4.663 2.041c59.676 26.122 108.444 90.453 133.8 176.5l15.534 52.718c1.88 6.38 7.737 10.76 14.389 10.76s12.508-4.38 14.389-10.76l15.535-52.718c25.355-86.047 74.124-150.378 133.801-176.5l4.662-2.041c5.536-2.424 9.077-7.934 8.982-13.977s-3.806-11.438-9.417-13.687zm-166.805 197.724-1.146 3.891-1.146-3.891c-24.688-83.781-70.572-149.266-127.875-183.753 24.507-14.749 47.336-35.395 67.106-60.851 26.598-34.244 47.946-77.574 61.737-125.308l.178-.612.177.612c13.791 47.733 35.14 91.063 61.737 125.308 19.771 25.456 42.6 46.102 67.106 60.851-57.302 34.488-103.186 99.972-127.874 183.753z"></path><path style="" id="Svg" d="m19.57 149.497 2.338 1.022c27.903 12.214 50.843 42.754 62.935 83.788l7.791 26.441c1.88 6.381 7.737 10.761 14.389 10.761 6.65 0 12.508-4.38 14.389-10.76l7.792-26.441c12.092-41.035 35.031-71.575 62.934-83.788l2.339-1.023c5.537-2.423 9.079-7.933 8.984-13.977-.094-6.043-3.807-11.439-9.417-13.688-28.709-11.509-53.118-43.536-65.294-85.675l-7.316-25.321c-1.856-6.418-7.731-10.836-14.412-10.836s-12.557 4.419-14.411 10.837l-7.314 25.32c-12.176 42.139-36.585 74.166-65.294 85.675-5.61 2.249-9.322 7.646-9.417 13.688-.095 6.044 3.447 11.554 8.984 13.977zm87.452-84.254c12.055 30.262 29.807 54.618 51.29 70.577-21.479 16.062-39.275 40.582-51.29 70.846-12.014-30.264-29.81-54.783-51.289-70.846 21.483-15.959 39.234-40.315 51.289-70.577z"></path><path style="" id="Svg" d="m134.704 400.672c-18.679-7.488-34.656-28.66-42.74-56.636l-5.089-17.617c-1.854-6.418-7.73-10.837-14.411-10.837-6.68 0-12.556 4.418-14.41 10.836l-5.091 17.618c-8.083 27.976-24.061 49.147-42.739 56.636-5.61 2.249-9.323 7.646-9.417 13.688-.095 6.044 3.447 11.554 8.985 13.977l1.625.711c17.908 7.84 33.324 28.552 41.237 55.404l5.421 18.396c1.881 6.38 7.737 10.76 14.389 10.76s12.508-4.38 14.389-10.76l5.421-18.396c7.912-26.853 23.328-47.563 41.235-55.402l1.627-.712c5.538-2.423 9.08-7.933 8.985-13.977-.094-6.044-3.807-11.44-9.417-13.689zm-62.241 51.912c-7.429-15.379-17.101-28.297-28.376-37.932 11.279-9.58 20.937-22.428 28.376-37.795 7.439 15.367 17.097 28.215 28.376 37.795-11.277 9.634-20.947 22.551-28.376 37.932z"></path></g></svg>');
document.getElementById("SidebarDeluxeButton").addEventListener("click", PhotopDeluxe);
updateSvgButtons();
function updateSvgButton(name, elements) {
    for (var i = 0; i < document.querySelectorAll("#" + name + " " + elements).length; i++) {
        document.querySelectorAll("#" + name + " " + elements)[i].style.stroke = ThemeColor;
    }
}
function updateSvgButtons() {
    updateSvgButton("RefreshHomeButtonIcon", "svg g g path");
    updateSvgButton("PostHomeButtonIcon", "svg path");
    updateSvgButton("YourProfileButtonIcon", "svg g path");
    updateSvgButton("YourProfileButtonIcon", "svg g circle");
    updateSvgButton("SettingsButtonIcon", "svg path");
    updateSvgButton("LogoutButtonIcon", "svg path");
    document.getElementById("DeluxeButtonSvg").innerHTML = '<g style="" id="DeluxeButtonG" fill="' + ThemeColor + '" stroke="#ffffff" stroke-width="0"><path style="" id="Svg" d="m503.384 243.685c-30.059-12.05-58.533-34.623-82.345-65.281-24.287-31.271-43.862-71.117-56.609-115.233l-14.588-50.485c-1.854-6.418-7.729-10.836-14.41-10.836s-12.556 4.418-14.41 10.836l-14.587 50.484c-12.747 44.116-32.322 83.964-56.609 115.233-23.812 30.658-52.286 53.231-82.346 65.281-5.61 2.249-9.322 7.645-9.417 13.688-.095 6.044 3.446 11.554 8.983 13.977l4.663 2.041c59.676 26.122 108.444 90.453 133.8 176.5l15.534 52.718c1.88 6.38 7.737 10.76 14.389 10.76s12.508-4.38 14.389-10.76l15.535-52.718c25.355-86.047 74.124-150.378 133.801-176.5l4.662-2.041c5.536-2.424 9.077-7.934 8.982-13.977s-3.806-11.438-9.417-13.687zm-166.805 197.724-1.146 3.891-1.146-3.891c-24.688-83.781-70.572-149.266-127.875-183.753 24.507-14.749 47.336-35.395 67.106-60.851 26.598-34.244 47.946-77.574 61.737-125.308l.178-.612.177.612c13.791 47.733 35.14 91.063 61.737 125.308 19.771 25.456 42.6 46.102 67.106 60.851-57.302 34.488-103.186 99.972-127.874 183.753z"></path><path style="" id="Svg" d="m19.57 149.497 2.338 1.022c27.903 12.214 50.843 42.754 62.935 83.788l7.791 26.441c1.88 6.381 7.737 10.761 14.389 10.761 6.65 0 12.508-4.38 14.389-10.76l7.792-26.441c12.092-41.035 35.031-71.575 62.934-83.788l2.339-1.023c5.537-2.423 9.079-7.933 8.984-13.977-.094-6.043-3.807-11.439-9.417-13.688-28.709-11.509-53.118-43.536-65.294-85.675l-7.316-25.321c-1.856-6.418-7.731-10.836-14.412-10.836s-12.557 4.419-14.411 10.837l-7.314 25.32c-12.176 42.139-36.585 74.166-65.294 85.675-5.61 2.249-9.322 7.646-9.417 13.688-.095 6.044 3.447 11.554 8.984 13.977zm87.452-84.254c12.055 30.262 29.807 54.618 51.29 70.577-21.479 16.062-39.275 40.582-51.29 70.846-12.014-30.264-29.81-54.783-51.289-70.846 21.483-15.959 39.234-40.315 51.289-70.577z"></path><path style="" id="Svg" d="m134.704 400.672c-18.679-7.488-34.656-28.66-42.74-56.636l-5.089-17.617c-1.854-6.418-7.73-10.837-14.411-10.837-6.68 0-12.556 4.418-14.41 10.836l-5.091 17.618c-8.083 27.976-24.061 49.147-42.739 56.636-5.61 2.249-9.323 7.646-9.417 13.688-.095 6.044 3.447 11.554 8.985 13.977l1.625.711c17.908 7.84 33.324 28.552 41.237 55.404l5.421 18.396c1.881 6.38 7.737 10.76 14.389 10.76s12.508-4.38 14.389-10.76l5.421-18.396c7.912-26.853 23.328-47.563 41.235-55.402l1.627-.712c5.538-2.423 9.08-7.933 8.985-13.977-.094-6.044-3.807-11.44-9.417-13.689zm-62.241 51.912c-7.429-15.379-17.101-28.297-28.376-37.932 11.279-9.58 20.937-22.428 28.376-37.795 7.439 15.367 17.097 28.215 28.376 37.795-11.277 9.634-20.947 22.551-28.376 37.932z"></path></g>';
    document.querySelector("#SettingsButtonIcon svg path").style.fill = ThemeColor;
    document.querySelector("#CreateImageButtonG").style.fill = ThemeColor;
    document.querySelector("#EmojiButtonG").style.fill = ThemeColor;
    document.querySelector("#ConfigurePostButtonG").style.fill = ThemeColor;
    document.querySelector("#CreatePostButton").style.backgroundColor = ThemeColor;
    document.querySelector("#ExotekLogoDisplay svg rect").style.fill = ThemeColor;
    document.querySelectorAll("#ExotekLogoDisplay svg path")[1].style.fill = ThemeColor;
}