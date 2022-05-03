const trackItems = document.querySelectorAll('.learn-track-item-heading');
const stepListItems = document.querySelectorAll('.learn-track-stepList');

for (let index = 0; index < trackItems.length; ++index) {
    trackItems[index].addEventListener('click', function () {
        let isHave = document
            .getElementById('item' + index)
            .classList.contains('d-none');
        if (isHave) {
            document.getElementById('item' + index).classList.remove('d-none');
            document.getElementById('icon' + index).classList.add('rotate180');
        } else {
            document.getElementById('item' + index).classList.add('d-none');
            document.getElementById('icon' + index).classList.remove('rotate180');
        }
    });
}

// openAll.addEventListener('click', function (e){
//     e.preventDefault()
//     if(openAll.classList.contains('openAll')){
//         openAll.classList.remove('openAll')
//         for (let index = 0; index < courseDetails.length; index++) {
//             courseDetails[index].classList.add('d-none')
//         }
//     } else {
//         openAll.classList.add('openAll')
//         for (let index = 0; index < courseDetails.length; index++) {
//             courseDetails[index].classList.remove('d-none')
//         }
//     }
// })
