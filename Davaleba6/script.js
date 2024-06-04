
document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const changeColorBtn = document.getElementById('changeColorBtn');
    const colorInput = document.getElementById('colorInput');
    const calculateAverageBtn = document.getElementById('calculateAverageBtn');
    const numbersInput = document.getElementById('numbersInput');
    const averageResult = document.getElementById('averageResult');

    const validColors = ['red', 'blue', 'green', 'black', 'white'];

    openModalBtn.onclick = () => {
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    changeColorBtn.onclick = () => {
        const color = colorInput.value.trim().toLowerCase();
        if (validColors.includes(color)) {
            document.body.style.backgroundColor = color;
        } else {
            alert('Invalid color. Please enter one of the following colors: red, blue, green, black, white');
        }
    }

    calculateAverageBtn.onclick = () => {
        const numbers = numbersInput.value.split(':').map(Number);
        if (numbers.some(isNaN)) {
            alert('Please enter valid numbers separated by colons.');
        } else {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            const average = sum / numbers.length;
            averageResult.textContent = `Average: ${average}`;
        }
    }
});
