const courseItems = document.querySelectorAll('.courses-content-heading');
const courseDetails = document.querySelectorAll('.courses-content-details');
const openAll = document.querySelector('.courses-sub-openAll');

for (let index = 0; index < courseItems.length; ++index) {
    courseItems[index].addEventListener('click', function () {
        let isHave = document
            .getElementById('item' + index)
            .classList.contains('d-none');
        if (isHave)
            document.getElementById('item' + index).classList.remove('d-none');
        else document.getElementById('item' + index).classList.add('d-none');
    });
}

openAll.addEventListener('click', function (e) {
    e.preventDefault();
    if (openAll.classList.contains('openAll')) {
        openAll.classList.remove('openAll');
        for (let index = 0; index < courseDetails.length; index++) {
            courseDetails[index].classList.add('d-none');
        }
    } else {
        openAll.classList.add('openAll');
        for (let index = 0; index < courseDetails.length; index++) {
            courseDetails[index].classList.remove('d-none');
        }
    }
});
