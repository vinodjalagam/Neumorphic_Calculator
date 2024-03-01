const themeToggle = document.getElementById('themetoggle');

const storetheme = localStorage.getItem('theme');
if (storetheme == 'dark') {
    document.documentElement.style.setProperty('--bg-color', ' #040D12')
    document.documentElement.style.setProperty('--text-color', ' #93B1A6')
    document.documentElement.style.setProperty('--keypad-bg-colo', ' #040D12')
    document.documentElement.style.setProperty('--keypad-bag-color2', ' #183D3D')
    themeToggle.checked = true
}
else {
    document.documentElement.style.setProperty('--bg-color', ' #F1EAFF')
    document.documentElement.style.setProperty('--text-color', ' #c363f0')
    document.documentElement.style.setProperty('--keypad-bg-colo', ' #F1EAFF')
    document.documentElement.style.setProperty('--keypad-bag-color2', ' #b883e6')
}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.style.setProperty('--bg-color', ' #040D12')
        document.documentElement.style.setProperty('--text-color', ' #93B1A6')
        document.documentElement.style.setProperty('--keypad-bg-colo', ' #040D12')
        document.documentElement.style.setProperty('--keypad-bag-color2', ' #183D3D')
        localStorage.setItem('theme', 'dark')
    }
    else {
        document.documentElement.style.setProperty('--bg-color', ' #F1EAFF')
        document.documentElement.style.setProperty('--text-color', ' #c363f0')
        document.documentElement.style.setProperty('--keypad-bg-colo', ' #F1EAFF')
        document.documentElement.style.setProperty('--keypad-bag-color2', ' #b883e6')
        localStorage.setItem('theme', 'light')
    }
});

let result = document.getElementById('result');
function appendToResult(value) {
    result.value += value
}
function backspace() {
    if (result.value == 'Error') {
        result.value = ''
    }
    result.value = result.value.slice(0, -1);
}
function clearResult() {
    result.value = '';
}

function calculate(){
    try{
        if(result.value==''){
            result.value = '0';
        }
        result.value = eval(result.value)
    }
    catch(e){
        result.value = 'Error'
    }
}