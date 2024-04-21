$(document).ready(function () {
	let API_URL = "https://api.apispreadsheets.com/data/XlySJ1fRcrvaXkfA/";
	let ID = 1;
	$('#addBtn').on("click", function () {
		$("#addBtn").hide();
		$("#saveBtn").show();
		let newRow = `
		<tr>
			<td class="text-center" id="idField">${ID}</td>
			<td class="text-center"><input type="text" id="nameField"></td>
			<td class="text-center"><input type="text" id="priceField"></td>
			<td class="text-center"><input type="text" id="discountField"></td>
			<td class="col-remove"><button type="button" class="btn btn-danger">Remove</button></td>
		</tr>`;
		$('tbody').append(newRow);
	});

	$('tbody').on("click", '.btn-danger', function () {
		let id = $(this).parent("td").parent("tr").children("td:first")[0].innerHTML;
		let query = `?query=delete from XlySJ1fRcrvaXkfA where ID="${id}"`;
		console.log(API_URL + query);
		$.get(API_URL + query).done(function (data) {
			console.log(data);
		});
		$(this).parent('td').parent('tr').remove();
		$("#saveBtn").hide();
		$("#addBtn").show();
	});

	$(".btn-success").on("click", function () {
		$("#saveBtn").hide();
		$("#addBtn").show();
		let data = {
			ID: $("#idField")[0].innerHTML,
			Name: $("#nameField").val(),
			Price: $("#priceField").val(),
			Discount: $("#discountField").val()
		};
		$.post(API_URL, JSON.stringify(data)).done(function () {
			$("#idField").html($("#idField")[0].innerHTML);
			$("#nameField").parent("td").html($("#nameField").val());
			$("#priceField").parent("td").html($("#priceField").val());
			$("#discountField").parent("td").html($("#discountField").val());
			ID++;
		});
	});

	$.get(API_URL).done(function (data) {
		const yourData = data.data;
		if (yourData.length > 0) {
			for (let i = 0; i < yourData.length; i++) {
				let newRow = `
				<tr>
					<td class="text-center">${yourData[i].ID}</td>
					<td class="text-center">${yourData[i].Name}</td>
					<td class="text-center">${yourData[i].Price}</td>
					<td class="text-center">${yourData[i].Discount}</td>
					<td class="col-remove"><button type="button" class="btn btn-danger">Remove</button></td>
				</tr>`;
				$("tbody").append(newRow);
			}
			ID = parseInt(yourData[yourData.length - 1].ID) + 1;
		}
	});


});