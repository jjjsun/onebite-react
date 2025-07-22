//Quiz 1
function printMovieReview({title, releaseYear, reviewers}){
    console.log("출력 결과 :");
    console.log(`제목 : ${title}`)
    console.log(`개봉 : ${releaseYear}`);
    const [firstReviewer = "리뷰어 미정"] = reviewers;
    console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}
printMovieReview({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
});

printMovieReview({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
});

//Quiz 2
function printAvgScore(students){
    for (let name in students){
        let sum = 0;
        const {scores} = students[name];

        for(let score of scores){
            sum += score;
        }
        const avg = sum / scores.length;
        console.log(`${name}: ${avg}`);
    }
};

printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50]},
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50]},
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50]},
});