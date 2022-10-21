// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
    let res = {};
    list.forEach(developer => res[developer.language] = (res[developer.language] || 0) + 1);
    return res;
}

module.exports = countLanguages;
