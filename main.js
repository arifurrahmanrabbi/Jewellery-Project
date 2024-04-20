$(document).ready(function () {
	$('#addBtn').on("click", function () {
		$("#addBtn").hide();
		$("#saveBtn").show();
		let newRow = `
		<tr>
			<td class="text-center"><input type="text" id="nameField"></td>
			<td class="text-center"><input type="text" id="priceField"></td>
			<td class="text-center"><input type="text" id="discountField"></td>
			<td class="col-remove"><button type="button" class="btn btn-danger">Remove</button></td>
		</tr>`;
		$('tbody').append(newRow);
	});

	$('tbody').on("click", '.btn-danger', function () {
		$(this).parent('td').parent('tr').remove();
		$("#saveBtn").hide();
		$("#addBtn").show();
	});

	$(".btn-success").on("click", function () {
		$("#saveBtn").hide();
		$("#addBtn").show();
		$("#nameField").parent("td").html($("#nameField").val());
		$("#priceField").parent("td").html($("#priceField").val());
		$("#discountField").parent("td").html($("#discountField").val());
	});
});