const formHandleCompletedLesson = document.querySelector('#form-handle-completed-lesson')
const inputFormIsCompleted = document.querySelector('#is-completed-js')
const inputFormIdLesson = document.querySelector('#id-lesson-js')
const inputFormIdChapter = document.querySelector('#id-chapter-js')
const inputFormIdCourse = document.querySelector('#id-course-js')

function handleCompletedLesson(isComplete, idLesson, idChapter, idCourse){
    event.preventDefault()
    inputFormIsCompleted.value = isComplete
    inputFormIdLesson.value = idLesson
    inputFormIdChapter.value = idChapter
    inputFormIdCourse.value = idCourse
    formHandleCompletedLesson.submit()
}