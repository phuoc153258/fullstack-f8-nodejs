function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}
function getTotalLengthLesson(courses) {
    let countLesson = 0;
    for (let index = 0; index < courses.length; ++index) {
        countLesson += courses[index].lesson.length;
    }
    return countLesson;
}

function sum(a, b) {
    return a + b;
}

function isTypeHome(course, type) {
    for (let index = 0; index < course.role.length; index++) {
        if (course.role[index] == type)
            return `<div class="section-item">
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
            </div>`;
    }
}

function getLengthObject(arr) {
    return arr.length;
}

function getLengthChapterLesson(course) {
    return course.length;
}

function numberToTime(num) {
    let seconds = num % 60;
    let minutes = Math.floor(num / 60);
    let hours = Math.floor(minutes / 60);
    if (hours != 0) {
        minutes = minutes - hours * 60;
        return `${addLeadingZeros(hours, 2)}:${addLeadingZeros(
            minutes,
            2,
        )}:${addLeadingZeros(seconds, 2)}`;
    }
    return `${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
}

function timeToNumber(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function convertTime(num) {
    let minutes = Math.floor(num / 60);
    let hours = Math.floor(minutes / 60);
    return `${addLeadingZeros(hours, 2)} giờ ${addLeadingZeros(
        minutes,
        2,
    )} phút`;
}

function getTotalVideoLength(arr) {
    let countVideoLength = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let idx = 0; idx < arr[index].lesson.length; idx++) {
            countVideoLength += arr[index].lesson[idx].videoLength;
        }
    }
    let minutes = Math.floor(countVideoLength / 60);
    let hours = Math.floor(minutes / 60);
    if (hours != 0) {
        minutes = minutes - hours * 60;
    }
    return `${addLeadingZeros(hours, 2)} giờ ${addLeadingZeros(
        minutes,
        2,
    )} phút`;
}

function calcLessonCouseCompleted(courseArr, userArr, courseId) {
    let countLesson = 0;
    for (let index = 0; index < courseArr.length; ++index) {
        countLesson += courseArr[index].lesson.length;
    }
    let countLessonUser = 0;
    for (let index = 0; index < userArr.length; ++index) {
        if (userArr[index].idCourse == courseId) {
            countLessonUser += userArr[index].lessonCompleted.length;
        }
    }
    return `${countLessonUser}/${countLesson}`;
}

function calcPercentCouseCompleted(courseArr, userArr, courseId) {
    let countLesson = 0;
    if(!userArr) return 0
    for (let index = 0; index < courseArr.length; ++index) {
        countLesson += courseArr[index].lesson.length;
    }
    let countLessonUser = 0;
    for (let index = 0; index < userArr.length; ++index) {
        if (userArr[index].idCourse == courseId) {
            countLessonUser += userArr[index].lessonCompleted.length;
        }
    }
    return Math.floor((countLessonUser / countLesson) * 100);
}

function getLessonCompletedInChapter(detailCourses, idCourse, idChapter) {
    let countLesson = 0;
    for (let index = 0; index < detailCourses.length; index++) {
        if (detailCourses[index].idCourse == idCourse) {
            for (
                let i = 0;
                i < detailCourses[index].lessonCompleted.length;
                i++
            ) {
                if (
                    detailCourses[index].lessonCompleted[i].idChapter ==
                    idChapter
                )
                    countLesson++;
            }
        }
    }
    return countLesson;
}

function getTotalTimeLengthChapter(chapter) {
    let countVideoLength = 0;
    for (let index = 0; index < chapter.length; index++) {
        countVideoLength += chapter[index].videoLength;
    }
    let seconds = countVideoLength % 60;
    let minutes = Math.floor(countVideoLength / 60);
    let hours = Math.floor(minutes / 60);
    if (hours != 0) {
        minutes = minutes - hours * 60;
        return `${addLeadingZeros(hours, 2)}:${addLeadingZeros(
            minutes,
            2,
        )}:${addLeadingZeros(seconds, 2)}`;
    }
    return `${addLeadingZeros(minutes, 2)}:${addLeadingZeros(seconds, 2)}`;
}

function checkLessonCompleted(
    idLesson,
    userCourses,
    idCourse,
    idChapter,
    idUser,
) {
    let isCompleted = false;
    for (let index = 0; index < userCourses.length; index++) {
        if (userCourses[index].idCourse == idCourse) {
            for (
                let i = 0;
                i < userCourses[index].lessonCompleted.length;
                i++
            ) {
                if (
                    userCourses[index].lessonCompleted[i].idLesson == idLesson
                ) {
                    isCompleted = true;
                }
            }
        }
    }
    if (isCompleted)
        return `<i class="fa-solid fa-circle-check completed-lesson"></i>`;
    else
        return `<a href="#" onclick="handleCompletedLesson(false,'${idLesson}','${idChapter}','${idCourse}')"><i class="fa-solid fa-circle-check"></i></a>`;
}

function renderVideoId(user, course) {
    let idx = 0;
    for (let index = 0; index < user.detailCourses.length; index++) {
        if (user.detailCourses[index].idCourse == course._id) {
            for (let i = 0; i < course.courseContent.length; i++) {
                for (
                    let j = 0;
                    j < course.courseContent[i].lesson.length;
                    j++
                ) {
                    if (idx == user.detailCourses[index].indexVideo) {
                        return course.courseContent[i].lesson[j].videoId;
                    } else idx++;
                }
            }
        }
    }
}

function renderCourseName(user, course) {
    let idx = 0;
    for (let index = 0; index < user.detailCourses.length; index++) {
        if (user.detailCourses[index].idCourse == course._id) {
            for (let i = 0; i < course.courseContent.length; i++) {
                for (
                    let j = 0;
                    j < course.courseContent[i].lesson.length;
                    j++
                ) {
                    if (idx == user.detailCourses[index].indexVideo) {
                        return course.courseContent[i].lesson[j].name;
                    } else idx++;
                }
            }
        }
    }
}

function renderDescribeLesson(user, course) {
    let idx = 0;
    for (let index = 0; index < user.detailCourses.length; index++) {
        if (user.detailCourses[index].idCourse == course._id) {
            for (let i = 0; i < course.courseContent.length; i++) {
                for (
                    let j = 0;
                    j < course.courseContent[i].lesson.length;
                    j++
                ) {
                    if (idx == user.detailCourses[index].indexVideo) {
                        return course.courseContent[i].lesson[j].describeLesson;
                    } else idx++;
                }
            }
        }
    }
}

function renderIdxVideo(idVideo, courseContent) {
    let idx = 0;
    for (let index = 0; index < courseContent.length; index++) {
        for (let i = 0; i < courseContent[index].lesson.length; i++) {
            if (courseContent[index].lesson[i].id == idVideo) {
                return idx;
            } else idx++;
        }
    }
    return 0;
}

function renderIdxVideoList(idVideo, courseContent) {
    let idx = 1;
    for (let index = 0; index < courseContent.length; index++) {
        for (let i = 0; i < courseContent[index].lesson.length; i++) {
            if (courseContent[index].lesson[i].id == idVideo) {
                return idx;
            } else idx++;
        }
    }
    return 0;
}

function isRegisterCourse(detailCourses, idCourse) {
    const isExist = detailCourses.find((course) => course.idCourse == idCourse);
    if (!isExist) return false;
    return true;
}

function handlePreButton(idCourse, user) {
    let course = user.detailCourses.find((x) => x.idCourse == idCourse);
    if (course.indexVideo > 0)
        return `class="actionBar-btn-next" onclick="updateIdxVideo(${
            course.indexVideo - 1
        }, '${idCourse}')" `;
    else return 'class="actionBar-btn-pre cursor-progress" disabled';
}

function handleNextButton(course, user) {
    let courseUser = user.detailCourses.find((x) => x.idCourse == course._id);
    if (courseUser.indexVideo < getTotalLengthLesson(course.courseContent) - 1)
        return `class="actionBar-btn-next" onclick="updateIdxVideo(${
            courseUser.indexVideo + 1
        }, '${course._id}')"`;
    else return 'class="actionBar-btn-pre cursor-progress" disabled';
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

function addSlugUser(a, b) {
    return a + b;
}

function handleProgressCourses(courses,userCourse,type){
    let str = ``
    for (const course of courses) {
        if(course.role.includes(type)) {
                str = str + `
                <div class="learningPath-progress-item" onclick="goDetailCourses('${course.slug}')">
                    <span class="chart" data-percent="${calcPercentCouseCompleted(course.courseContent, userCourse.detailCourses, course._id)}">
                        <img src="/${course.icon}" alt="" class="chart-item learningPath-progress-item-icon">
                    </span>
                </div>`
        }
    }
    return str
}

module.exports = {
    addLeadingZeros,
    getTotalLengthLesson,
    sum,
    isTypeHome,
    getLengthObject,
    getLengthChapterLesson,
    numberToTime,
    timeToNumber,
    convertTime,
    getTotalVideoLength,
    calcLessonCouseCompleted,
    calcPercentCouseCompleted,
    getLessonCompletedInChapter,
    getTotalTimeLengthChapter,
    checkLessonCompleted,
    renderVideoId,
    renderCourseName,
    renderDescribeLesson,
    renderIdxVideo,
    renderIdxVideoList,
    isRegisterCourse,
    handlePreButton,
    handleNextButton,
    formatDate,
    addSlugUser,
    handleProgressCourses
};
