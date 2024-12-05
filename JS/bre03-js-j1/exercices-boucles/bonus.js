document.addEventListener('DOMContentLoaded', () => {
    
    let numbers = [-23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28];

    function selectionSort(number) {

        for (let i = 0; i < number.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < number.length; j++) {
                if (number[j] < number[minIndex]) {
                    minIndex = j;
                }
            }
            let temp = number[i];
            number[i] = number[minIndex];
            number[minIndex] = temp;
        }

        return number;
    }

    let sortedNumbers = selectionSort(numbers);
    console.log(sortedNumbers);

});