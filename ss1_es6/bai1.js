let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

// Yêu cầu 1:
courses.filter(course => course.rating >= 4)
    .forEach(course => console.log(course.title));


// Yêu cầu 2:
let list2 = courses.filter(course => course.rating < 4);
console.log(list2)


// Yêu cầu 3:
let mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

let mergedCourses = mergeArrays(courses, addedCourses);
console.log(mergedCourses);