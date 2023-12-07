import { INote } from "../../types";

const savenoteArr = localStorage.getItem('noteArr');

export function tagFn() {
    let arr = JSON.parse(savenoteArr!);
    const allTags = (arr.map((item: INote) => item.text).join(' ') + ' ' + arr.map((item: INote) => item.title).join(' ')).split(' ');
    let tagArr: string[] = [];
    allTags.forEach((word) =>
        word[0] === '#' ? tagArr.push(word) : console.log('no'));
    tagArr = tagArr.sort().filter(function (item, pos) {
        return tagArr.indexOf(item) == pos;
    });

    return tagArr
}
