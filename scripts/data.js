var boards = [
	{
		id:0,
		name: 'CBSE',
		thumbnail: '',
		grades: [0,1,2,3,4,5,6,7,8,9]
	},
	{
		id:1,
		name: 'HSC',
		thumbnail: '',
		grades: [10,11]
	},
	{
		id:2,
		name: 'SSC',
		thumbnail: '',
		grades: [0,1,2,3,4,5,6,7,8,9]
	},
	{
		id:3,
		name: 'ICSE',
		thumbnail: '',
		grades: [0,1,2,3,4,5,6,7,8,9]
	}
],

grades = [
	{
		id:0,
		name: "First Grade",
		number: 1,
		subjects: [5,6,7]
	},
	{
		id:1,
		name: "Second Grade",
		number: 2,
		subjects: [8,9,10]
	},
	{
		id:2,
		name: "Third Grade",
		number: 3,
		subjects: [11,12,13,14]
	},
	{
		id:3,
		name: "Fourth Grade",
		number: 4,
		subjects: [15,16,17,18]
	},
	{
		id:4,
		name: "Fifth Grade",
		number: 5,
		subjects: [19,20,21,22]
	},
	{
		id:5,
		name: "Sixth Grade",
		number: 6,
		subjects: [23,24,25,26,27]
	},
	{
		id:6,
		name: "Seventh Grade",
		number: 7,
		subjects: [28,29,30,31,32]
	},
	{
		id:7,
		name: "Eight Grade",
		number: 8,
		subjects: [33,34,35,36,37]
	},
	{
		id:8,
		name: "Ninth Grade",
		number: 9,
		subjects: [38,39,40,41,42]
	},
	{
		id:9,
		name: "Tenth Grade",
		number: 10,
		subjects: [43,44,45,46,47]
	},
	{
		id:10,
		name: "Eleventh Grade",
		number: 11,
		subjects: [1,3]
	},
	{
		id:12,
		name: "Twelfth Grade",
		number: 12,
		subjects: [1,3]
	},
	{
		id:13,
		name: "Ninth Grade",
		number: 9,
		subjects: [1,3]
	},
	{
		id:14,
		name: "Tenth Grade",
		number: 10,
		subjects: [1,3]
	},
	{
		id:15,
		name: "Eleventh Grade",
		number: 11,
		subjects: [1,3]
	},
	{
		id:16,
		name: "Twelfth Grade",
		number: 12,
		subjects: [1,3]
	}
],

subjects = [
	{
		id:0,
		name: 'English',
		desc: '',
		resources: [0,1]
	},
	{
		id:1,
		name: 'Maths',
		desc: '',
		resources: [2,6,7]
	},
	{
		id:2,
		name: 'History',
		desc: '',
		resources: []
	},
	{
		id:3,
		name: 'Science',
		desc: '',
		resources: [3,4,5]
	},
	{
		id:4,
		name: 'Geography',
		desc: '',
		resources: []
	},
	{
		id:5,
		name: 'Math',
		desc: 'CBSE grade 1 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:6,
		name: 'English',
		desc: 'CBSE grade 1 English',
		resources: []
	},
	{
		id:7,
		name: 'Hindi',
		desc: 'CBSE grade 1 Hindi',
		resources: []
	},
	{
		id:8,
		name: 'Math',
		desc: 'CBSE grade 2 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:9,
		name: 'English',
		desc: 'CBSE grade 2 English',
		resources: []
	},
	{
		id:10,
		name: 'Hindi',
		desc: 'CBSE grade 2 Hindi',
		resources: []
	},
	{
		id:11,
		name: 'Math',
		desc: 'CBSE grade 3 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:12,
		name: 'English',
		desc: 'CBSE grade 3 English',
		resources: []
	},
	{
		id:13,
		name: 'Hindi',
		desc: 'CBSE grade 3 Hindi',
		resources: []
	},
	{
		id:14,
		name: 'Environmental Studies',
		desc: 'CBSE grade 3 Hindi',
		resources: []
	},
	{
		id:15,
		name: 'Math',
		desc: 'CBSE grade 4 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:16,
		name: 'English',
		desc: 'CBSE grade 4 English',
		resources: []
	},
	{
		id:17,
		name: 'Hindi',
		desc: 'CBSE grade 4 Hindi',
		resources: []
	},
	{
		id:18,
		name: 'Environmental Studies',
		desc: 'CBSE grade 4 Hindi',
		resources: []
	},
	{
		id:19,
		name: 'Math',
		desc: 'CBSE grade 5 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:20,
		name: 'English',
		desc: 'CBSE grade 5 English',
		resources: []
	},
	{
		id:21,
		name: 'Hindi',
		desc: 'CBSE grade 5 Hindi',
		resources: []
	},
	{
		id:22,
		name: 'Environmental Studies',
		desc: 'CBSE grade 5 Hindi',
		resources: []
	},
	{
		id:23,
		name: 'Math',
		desc: 'CBSE grade 6 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:24,
		name: 'English',
		desc: 'CBSE grade 6 English',
		resources: []
	},
	{
		id:25,
		name: 'Hindi',
		desc: 'CBSE grade 6 Hindi',
		resources: []
	},
	{
		id:26,
		name: 'Science',
		desc: 'CBSE grade 6 Science',
		resources: []
	},
	{
		id:27,
		name: 'Social Studies',
		desc: 'CBSE grade 6 Social Studies',
		resources: []
	},
	{
		id:28,
		name: 'Math',
		desc: 'CBSE grade 7 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:29,
		name: 'English',
		desc: 'CBSE grade 7 English',
		resources: []
	},
	{
		id:30,
		name: 'Hindi',
		desc: 'CBSE grade 7 Hindi',
		resources: []
	},
	{
		id:31,
		name: 'Science',
		desc: 'CBSE grade 7 Science',
		resources: []
	},
	{
		id:32,
		name: 'Social Studies',
		desc: 'CBSE grade 7 Social Studies',
		resources: []
	},
	{
		id:33,
		name: 'Math',
		desc: 'CBSE grade 8 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:34,
		name: 'English',
		desc: 'CBSE grade 8 English',
		resources: []
	},
	{
		id:35,
		name: 'Hindi',
		desc: 'CBSE grade 8 Hindi',
		resources: []
	},
	{
		id:36,
		name: 'Science',
		desc: 'CBSE grade 8 Science',
		resources: []
	},
	{
		id:37,
		name: 'Social Studies',
		desc: 'CBSE grade 8 Social Studies',
		resources: []
	},
	{
		id:38,
		name: 'Math',
		desc: 'CBSE grade 9 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:39,
		name: 'English',
		desc: 'CBSE grade 9 English',
		resources: []
	},
	{
		id:40,
		name: 'Hindi',
		desc: 'CBSE grade 9 Hindi',
		resources: []
	},
	{
		id:41,
		name: 'Science',
		desc: 'CBSE grade 9 Science',
		resources: []
	},
	{
		id:42,
		name: 'Social Studies',
		desc: 'CBSE grade 9 Social Studies',
		resources: []
	},
	{
		id:43,
		name: 'Math',
		desc: 'CBSE grade 9 Math',
		resources: [8,9,10,11,12,13,14,15,16,17,18,19,20,21]
	},
	{
		id:44,
		name: 'English',
		desc: 'CBSE grade 9 English',
		resources: []
	},
	{
		id:45,
		name: 'Hindi',
		desc: 'CBSE grade 9 Hindi',
		resources: []
	},
	{
		id:46,
		name: 'Science',
		desc: 'CBSE grade 9 Science',
		resources: []
	},
	{
		id:47,
		name: 'Social Studies',
		desc: 'CBSE grade 9 Social Studies',
		resources: []
	}
],

resources = [
	{
		id:0,
		name: 'Nouns',
		thumbnail: '',
		url: 'http://www.edufind.com/english-grammar/nouns/',
		type: 'text',
		active: true
	},
	{
		id:1,
		name: 'Verbs',
		thumbnail: '',
		url: 'http://www.edufind.com/english-grammar/verbs/',
		type: 'text',
		active: true
	},
	{
		id:2,
		name: 'Linear equations and inequalities',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/algebra-basics/core-algebra-linear-equations-inequalities',
		type: 'video',
		active: true
	},
	{
		id:3,
		name: 'One Dimensional Motion',
		thumbnail: '',
		url: 'https://www.khanacademy.org/science/physics/one-dimensional-motion',
		type: 'video',
		active: true
	},
	{
		id:4,
		name: 'Two Dimensional Motion',
		thumbnail: '',
		url: 'https://www.khanacademy.org/science/physics/two-dimensional-motion',
		type: 'video',
		active: true
	},
	{
		id:5,
		name: 'Forces and Newton\'s laws of motion',
		thumbnail: '',
		url: 'https://www.khanacademy.org/science/physics/forces-newtons-laws',
		type: 'video',
		active: true
	},
	{
		id:6,
		name: 'Graphing lines and slope',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/algebra-basics/core-algebra-graphing-lines-slope',
		type: 'video',
		active: true
	},
	{
		id:7,
		name: 'Probability',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:8,
		name: 'Shapes and Space',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:9,
		name: 'Numbers from One to Nine',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:10,
		name: 'Numbers from Ten to Twenty',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:11,
		name: 'Numbers from Twenty - one to Fifty',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:12,
		name: 'Numbers Fifty to Ninety - nine',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:13,
		name: 'Numbers',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:14,
		name: 'Addition',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:15,
		name: 'Subtraction',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:16,
		name: 'Telling Time',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:17,
		name: 'Days, Weeks and Months',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:18,
		name: 'Patterns',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:19,
		name: 'Money',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:20,
		name: 'Measurement',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	},
	{
		id:21,
		name: 'Data Handling',
		thumbnail: '',
		url: 'https://www.khanacademy.org/math/',
		type: 'video',
		active: true
	}
];
