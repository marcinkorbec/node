const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'megak_course',
	decimalNumbers: true,
	namedPlaceholders: true,
	bigNumberStrings: false,
});

(async () => {
	//1.
	const [courses] = await pool.execute('SELECT * FROM `courses`');
	console.log(courses);

	//2.
	const [studentsAndCourses] = await pool.execute('SELECT `students`.`id`, `students`.`Name`, `students`.`Surname`, `courses`.`Nazwa Kursu` FROM `students` JOIN `students_courses` ON `students`.`id` = `students_courses`.`studentId` JOIN `courses` ON `students_courses`.`courseName` = `courses`.`Nazwa Kursu` WHERE `students`.`age` >= 18' );
	console.log(studentsAndCourses);

	//3.
	const {affectedRows: deletedStudentsUnderGivenAge} = (await pool.execute('DELETE FROM `students` WHERE `age` <:age', {age: 18}))[0];
	console.log(deletedStudentsUnderGivenAge);

	//4.
	pool.execute('INSERT INTO `students`(`Name`, `Surname`, `Age`), VALUES(:firstName, :lastName, :age,) ', {firstName: 'Jasia', Surname: 'Korbecka', age: 62})

	await pool.end();

})();