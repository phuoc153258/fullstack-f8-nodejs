function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

module.exports = {

    sum(a, b) {
        return a + b;
    },
    isTypeHome(course, type) {
        for (let index = 0; index < course.role.length; index++) {
            if (course.role[index] == type) return `<div class="section-item">
                    <form action="/courses/${course.slug}" method="GET">
                        <a title="Kiến Thức Nhập Môn IT" href="#" class="section-img"
                            style="background-image: url('${course.image}');">
                                <button class="section-watch">Xem Khoá học</button>
                        </a>

                    <div class="section-name">${course.name}</div>
                    <div class="section-count">
                        <i class="fa-solid fa-users"></i>
                        <span>${course.totalStudent}</span>
                    </div>
                </form>
                </div>`
        }
    },
    getLengthObject(arr) {
        return arr.length
    },    
    getLengthChapterLesson(course) {
        return course.length
    },
    getTotalLengthLesson(courses) {
        let countLesson = 0;
        for (let index = 0; index < courses.length; ++index) {
            countLesson += courses[index].lesson.length
        }
        return countLesson
    },
    numberToTime(num){ 
        let seconds = num % 60;
        let minutes = Math.floor(num / 60);
        let hours = Math.floor(minutes / 60);
        if(hours!=0) {
            minutes = minutes - hours*60 
            return `${addLeadingZeros(hours, 2)}:${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
        } 
        return `${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
    },
    timeToNumber(hours,minutes,seconds){
        return hours*3600 + minutes*60 + seconds
    },
    convertTime(num){
        let minutes = Math.floor(num / 60);
        let hours = Math.floor(minutes / 60);
        return `${addLeadingZeros(hours, 2)} giờ ${addLeadingZeros(minutes, 2)} phút`;
    },
    getTotalVideoLength(arr){
        let countVideoLength = 0
        for (let index = 0; index < arr.length; index++) {
            for (let idx = 0; idx < arr[index].lesson.length; idx++) {
                countVideoLength+= arr[index].lesson[idx].videoLength
            }
        }
        let minutes = Math.floor(countVideoLength / 60);
        let hours = Math.floor(minutes / 60);
        if(hours!=0) {
            minutes = minutes - hours*60
        } 
        return `${addLeadingZeros(hours, 2)} giờ ${addLeadingZeros(minutes, 2)} phút`;
    },
    calcLessonCouseCompleted(courseArr, userArr, courseId){
        let countLesson = 0;
        for (let index = 0; index < courseArr.length; ++index) {
            countLesson += courseArr[index].lesson.length
        }
        let countLessonUser = 0
        for (let index = 0; index < userArr.length; ++index) {
            if(userArr[index].idCourse == courseId) {
                countLessonUser += userArr[index].lessonCompleted.length
            }
        }
        return `${countLessonUser}/${countLesson}` 
    },
    calcPercentCouseCompleted(courseArr, userArr, courseId){
        let countLesson = 0;
        for (let index = 0; index < courseArr.length; ++index) {
            countLesson += courseArr[index].lesson.length
        }
        let countLessonUser = 0
        for (let index = 0; index < userArr.length; ++index) {
            if(userArr[index].idCourse == courseId) {
                countLessonUser += userArr[index].lessonCompleted.length
            }
        }
        return Math.floor(countLessonUser / countLesson * 100);
    },
    getLessonCompletedInChapter(detailCourses, idCourse, idChapter){
        let countLesson = 0;
        for (let index = 0; index < detailCourses.length; index++) {
            if(detailCourses[index].idCourse == idCourse){
                for (let i = 0; i < detailCourses[index].lessonCompleted.length; i++) {
                    if(detailCourses[index].lessonCompleted[i].idChapter == idChapter)
                    countLesson++
                }
            }
        }
        return countLesson
    },
    getTotalTimeLengthChapter(chapter){
        let countVideoLength = 0
        for (let index = 0; index < chapter.length; index++) {
            countVideoLength += chapter[index].videoLength
        }
        let seconds = countVideoLength % 60;
        let minutes = Math.floor(countVideoLength / 60);
        let hours = Math.floor(minutes / 60);
        if(hours!=0) {
            minutes = minutes - hours*60 
            return `${addLeadingZeros(hours, 2)}:${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
        } 
        return `${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
    },
    checkLessonCompleted(idLesson, userCourses, idCourse, idChapter, idUser){
        let isCompleted = false
        for (let index = 0; index < userCourses.length; index++) {
            if(userCourses[index].idCourse == idCourse){
                for (let i = 0; i < userCourses[index].lessonCompleted.length; i++) {
                    if(userCourses[index].lessonCompleted[i].idLesson == idLesson){
                        isCompleted = true
                    }
                }
            }
        }
        if(isCompleted) return `<i class="fa-solid fa-circle-check completed-lesson"></i>`
        else return `<a href="#" onclick="handleCompletedLesson(false,'${idLesson}','${idChapter}','${idCourse}')"><i class="fa-solid fa-circle-check"></i></a>`
    },
    renderVideoId(user,course){
        let idx = 0;
        for (let index = 0; index < user.detailCourses.length; index++) {
            if(user.detailCourses[index].idCourse == course._id){
                for (let i = 0; i < course.courseContent.length; i++) {
                    for (let j = 0; j < course.courseContent[i].lesson.length; j++) {
                        if(idx == user.detailCourses[index].indexVideo){
                            return course.courseContent[i].lesson[j].videoId
                        } 
                        else idx++
                    }
                }
            }
        }
    },
    renderCourseName(user,course){
        let idx = 0;
        for (let index = 0; index < user.detailCourses.length; index++) {
            if(user.detailCourses[index].idCourse == course._id){
                for (let i = 0; i < course.courseContent.length; i++) {
                    for (let j = 0; j < course.courseContent[i].lesson.length; j++) {
                        if(idx == user.detailCourses[index].indexVideo){
                            return course.courseContent[i].lesson[j].name
                        } 
                        else idx++
                    }
                }
            }
        }
    },
    renderDescribeLesson(user,course){
        let idx = 0;
        for (let index = 0; index < user.detailCourses.length; index++) {
            if(user.detailCourses[index].idCourse == course._id){
                for (let i = 0; i < course.courseContent.length; i++) {
                    for (let j = 0; j < course.courseContent[i].lesson.length; j++) {
                        if(idx == user.detailCourses[index].indexVideo){
                            return course.courseContent[i].lesson[j].describeLesson
                        } 
                        else idx++
                    }
                }
            }
        }
    },
    renderIdxVideo(idVideo, courseContent){
        let idx = 0;
        for (let index = 0; index < courseContent.length; index++) {
            for (let i = 0; i < courseContent[index].lesson.length; i++) {
                if(courseContent[index].lesson[i].id == idVideo) {
                    return idx
                }
                else idx++
            }
        }
        return 0
    },
    renderIdxVideoList(idVideo, courseContent){
        let idx = 1;
        for (let index = 0; index < courseContent.length; index++) {
            for (let i = 0; i < courseContent[index].lesson.length; i++) {
                if(courseContent[index].lesson[i].id == idVideo) {
                    return idx
                }
                else idx++
            }
        }
        return 0
    }
};