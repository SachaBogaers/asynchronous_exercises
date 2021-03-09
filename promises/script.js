const testNum = num => {
	return new Promise((resolve, reject) => {
		if (num > 10) {
			resolve(`${num} is greater than 10`)
		} else {
			reject(`${num} is less than 10`)
		}
	})
}


testNum(8)
	.then(result => console.log(result))
	.catch(error => console.log(error));

testNum(20)
	.then(result => console.log(result))
	.catch(error => console.log(error));


const makeAllCaps = array => {
	return new Promise((resolve, reject) => {
		const isString = currentItem => {
			const type = typeof currentItem
			if (type === "string") {
				return true;
			} else {
				return false;
			}
		};
		if (array.every(isString)) {
			resolve(array.map(x => x.toUpperCase()))
		} else {
			reject('Error! Not a string!')
		}
	})
};



const sortWords = words => {
	return new Promise((resolve, reject) => {
		if (words) {
			resolve(words.sort());
		} else {
			reject('strings only!')
		}
	})
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

console.log(makeAllCaps(arrayOfWords));

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
	.then(sortWords(arrayOfWords))
	.then(result => console.log(result))
	.catch(error => console.log(error));

makeAllCaps(complicatedArray)
	.then(sortWords(arrayOfWords))
	.then(result => console.log(result))
	.catch(error => console.log(error));