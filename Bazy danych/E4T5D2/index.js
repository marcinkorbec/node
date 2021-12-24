

(async() => {
	const foundTodo = await TodoRepository.findAll();
	foundTodo.title = 'Pójść zrobić kupę'
	console.log(foundTodo)

	await pool.end();
})();