function openTab(event, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

    // Active the tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (!tabcontent[i].className.includes(tabName)) {
            if (!tabcontent[i].className.includes("hidden")) {
                document.getElementsByClassName(tabcontent[i].className)[0].className += " hidden"
            }
            continue;
        }
        document.getElementsByClassName(tabcontent[i].className)[0].className = tabcontent[i].className.replace(" hidden", "");
    }

}