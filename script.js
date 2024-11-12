function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        Swal.fire({
            title: "<strong>Warning!</strong>",
            icon: "info",
            html: `
                Masukin Dulu  <b>List Kamu</b> bang!
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> faham king?!
            `,
            confirmButtonAriaLabel: "Thumbs up, got it!",
            cancelButtonText: `
                <i class="fa fa-thumbs-down"></i> Cancel
            `,
            cancelButtonAriaLabel: "Cancel"
        });
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(cancelButton);
    taskList.appendChild(listItem);
    taskInput.value = ""; 
    
    Swal.fire({
        position: "center",  
        icon: "success",
        title: "nicee kingggggg",
        showConfirmButton: false,
        timer: 1500
    });
}

function changeBgColor() {
    const bgColor = document.getElementById('bgColor').value;
    document.body.style.background = bgColor;
}

function changeFontSize(size) {
    document.documentElement.style.fontSize = size + 'px';
    document.getElementById('fontSizeValue').textContent = size + 'px';
}

function toggleDarkMode() {
    const container = document.querySelector('.container');
    container.classList.toggle('dark-mode');
}

function changeFontStyle() {
    const fontStyle = document.getElementById('fontStyle').value;
    document.body.style.fontFamily = fontStyle;
}
