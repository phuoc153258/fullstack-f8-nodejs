const formHandleCompletedLesson = document.querySelector(
    '#form-handle-completed-lesson',
);
const inputFormIsCompleted = document.querySelector('#is-completed-js');
const inputFormIdLesson = document.querySelector('#id-lesson-js');
const inputFormIdChapter = document.querySelector('#id-chapter-js');
const inputFormIdCourse = document.querySelector('#id-course-js');
const stopForm = document.querySelectorAll('#stop-propagation-lesson');
const inputFormIndexVideo = document.querySelector('#index-video-js');
const formHandleIndexVideo = document.querySelector('#form-handle-index-video');
const inputFormIdCourseIndexVideo = document.querySelector(
    '#idcourse-handle-index-js',
);

function handleCompletedLesson(isComplete, idLesson, idChapter, idCourse) {
    event.preventDefault();
    inputFormIsCompleted.value = isComplete;
    inputFormIdLesson.value = idLesson;
    inputFormIdChapter.value = idChapter;
    inputFormIdCourse.value = idCourse;
    formHandleCompletedLesson.submit();
}

for (let index = 0; index < stopForm.length; index++) {
    stopForm[index].addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

function updateIdxVideo(num, idCourse) {
    inputFormIndexVideo.value = num;
    inputFormIdCourseIndexVideo.value = idCourse;

    formHandleIndexVideo.submit();
}
