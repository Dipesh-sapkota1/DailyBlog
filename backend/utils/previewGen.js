

const cutParagraph = (paragraph) => {
    console.log(paragraph);
    const halfwayPoint = Math.floor(paragraph.length / 2);
    const newParagraph = paragraph.substring(0, halfwayPoint);
    return newParagraph;
}


export default cutParagraph;