// Define variables to store the selected chair elements
let selectedSeatType = 'seat1';
let selectedBackType = 'back1';
let selectedLegType = 'leg1';
let rotationAngleX = 0;
let thickness = 1;
let backColor = [1.,0.4,1.];
let seatColor = [0.6,0.6,1.];
let legColor = [1.,1.,1.];
// Event listeners for radio button changes
document.getElementById('seat1').addEventListener('change', function () {
    if (this.checked) {
        selectedSeatType = 'seat1';
    }
});

document.getElementById('seat2').addEventListener('change', function () {
    if (this.checked) {
        selectedSeatType = 'seat2';
    }
});

document.getElementById('seat3').addEventListener('change', function () {
    if (this.checked) {
        selectedSeatType = 'seat3';
    }
});

document.getElementById('back1').addEventListener('change', function () {
    if (this.checked) {
        selectedBackType = 'back1';
    }
});

document.getElementById('back2').addEventListener('change', function () {
    if (this.checked) {
        selectedBackType = 'back2';
    }
});

document.getElementById('back3').addEventListener('change', function () {
    if (this.checked) {
        selectedBackType = 'back3';
    }
});

document.getElementById('leg1').addEventListener('change', function () {
    if (this.checked) {
        selectedLegType = 'leg1';
    }
});

document.getElementById('leg2').addEventListener('change', function () {
    if (this.checked) {
        selectedLegType = 'leg2';
    }
});

document.getElementById('leg3').addEventListener('change', function () {
    if (this.checked) {
        selectedLegType = 'leg3';
    }
});

document.getElementById('thicknessSlider').addEventListener('input', () => {
    thickness = thicknessSlider.value;
});

document.getElementById('rotationSlider').addEventListener('input', () => {
    rotationAngleX = rotationSlider.value;
    rotationValue = document.getElementById('rotationValue');
    rotationValue.textContent = rotationAngleX;
});

document.getElementById('backColorPicker').addEventListener('change', function(event) {
    const color = event.target.value; // Get the color value
    backColor = hexToRgb(color);
    
});

document.getElementById('seatColorPicker').addEventListener('change', function(event) {
    const color = event.target.value; // Get the color value
    seatColor = hexToRgb(color);
    
});

document.getElementById('legColorPicker').addEventListener('change', function(event) {
    const color = event.target.value; // Get the color value
    legColor = hexToRgb(color);
});

// function to convert hex to RGB
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    // parse the hex values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r / 255, g / 255, b / 255];
}