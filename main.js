$(document).ready(function () {
	let rowCount = 0;
	$('#addBtn').on("click", function () {
		rowCount++;
		let newRow = `
		<tr class="new-row">
			<td><input type="text" id="nameField"></td>
			<td><input type="text" id="priceField"></td>
			<td><input type="text" id="discountField"></td>
			<td class="col-remove"><button type="button" class="btn btn-danger">Remove</button></td>
		</tr>`;
		$('tbody').append(newRow);
	});

	$('tbody').on("click", '.btn-danger', function () {
		$(this).parent('td').parent('tr').remove();
	});

	$(".btn-success").on("click", function () {
		let name = $("#nameField").val();
		let price = $("#priceField").val();
		let discount = $("#discountField").val();
		$(".new-row").remove();
		let newRow = `
		<tr>
			<td class="text-center">${name}</td>
			<td class="text-center">${price}</td>
			<td class="text-center">${discount}</td>
			<td class="col-remove"><button type="button" class="btn btn-danger">Remove</button></td>
		</tr>`;
		$('tbody').append(newRow);
	});
});