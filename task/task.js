/* global $ */

const input = $("[name='todo']");
$('#add-todo-form').on('submit', function(e) {
	e.preventDefault();

	const entryVal = input.val();

	$('#todo-list').append(
		`<li class="todo-item">${entryVal}<span class="close">&times;</span></li>`,
	);
});

$('#todo-list').on('click', '.close', { selector: 'li' }, deleteClosestElem);

function deleteClosestElem(e) {
	$(this)
		.closest(e.data.selector)
		.remove();
}
