/** @format */

(function () {
	'use strict';

	const $tbody = document.querySelector('[data-js="tbody"]');

	const letters = [
		['w', 'm', 'o', 's', 'q', 'u', 'i', 't', 'o', 'v'],
		['v', 'a', 'l', 'p', 'a', 'l', 'h', 'e', 't', 'a'],
		['a', 't', 'i', 'g', 'u', 'a', 'n', 'a', 'o', 'e'],
		['c', 'c', 'i', 'f', 'e', 'b', 'r', 'e', 'u', 'd'],
		['i', 'l', 'd', 'e', 'n', 'g', 'u', 'e', 'p', 'e'],
		['n', 'u', 's', 'i', 'c', 'a', 't', 'l', 'i', 's'],
		['e', 'p', 'i', 'd', 'e', 'm', 'i', 'a', 'c', 'a'],
		['n', 'p', 'a', 'l', 'c', 'o', 'a', 'h', 'a', 'e'],
		['z', 'm', 'p', 't', 'r', 'e', 's', 'j', 'd', 'l'],
		['f', 'p', 'r', 'e', 'v', 'e', 'n', 'c', 'a', 'o'],
	];

	const gameWords = [
		'DENGUE',
		'MOSQUITO',
		'AEDES',
		'PICADA',
		'VACINE',
		'EPIDEMIA',
		'PREVENCAO',
		'FEBRE',
	];

	const indexes = [
		[
			//dengue
			[4, 2],
			[4, 3],
			[4, 4],
			[4, 5],
			[4, 6],
			[4, 7],
		],
		[
			// mosquito
			[0, 1],
			[0, 2],
			[0, 3],
			[0, 4],
			[0, 5],
			[0, 6],
			[0, 7],
			[0, 8],
		],
		[
			// aedes
			[1, 9],
			[2, 9],
			[3, 9],
			[4, 9],
			[5, 9],
		],
		[
			//picada
			[4, 8],
			[5, 8],
			[6, 8],
			[7, 8],
			[8, 8],
			[9, 8],
		],
		[
			// vacine
			[1, 0],
			[2, 0],
			[3, 0],
			[4, 0],
			[5, 0],
			[6, 0],
		],
		[
			// epidemia
			[6, 0],
			[6, 1],
			[6, 2],
			[6, 3],
			[6, 4],
			[6, 5],
			[6, 6],
			[6, 7],
		],
		[
			// prevencao
			[9, 1],
			[9, 2],
			[9, 3],
			[9, 4],
			[9, 5],
			[9, 6],
			[9, 7],
			[9, 8],
			[9, 9],
		],
		[
			// febre
			[3, 3],
			[3, 4],
			[3, 5],
			[3, 6],
			[3, 7],
		],
	];

	letters.forEach(function (row, rowIndex) {
		let tr = document.createElement('tr');
		$tbody.appendChild(tr);

		row.forEach(function (letter, cellIndex) {
			let td = document.createElement('td');
			td.textContent = letter;

			// Verifica se a célula corresponde a algum índice especificado em indexes
			let isCorrect = indexes.some(function (indexList) {
				return indexList.some(function ([r, c]) {
					return r === rowIndex && c === cellIndex;
				});
			});

			// Adiciona a classe correta com base na verificação
			if (isCorrect) {
				td.classList.add('correct');
			} else {
				td.classList.add('incorrect');
			}

			// Adiciona evento de clique para cada célula
			td.addEventListener('click', function (event) {
				const td = event.target;

				// Adiciona a classe que exibe a cor ao clicar
				td.classList.toggle('showColor');
			});

			tr.appendChild(td);
		});
	});

	// Função de clique para resetar a cor da célula
	function resetColor(event) {
		const td = event.target;
		if (td.classList.contains('correct')) {
			td.classList.remove('correct');
			td.classList.add('green');
		} else if (td.classList.contains('incorrect')) {
			td.classList.remove('incorrect');
			td.classList.add('red');
		}
	}

	// Adiciona evento de clique para cada célula
	const $tds = document.querySelectorAll('td');
	$tds.forEach(function (td) {
		td.addEventListener('click', resetColor);
	});
})();

// COMO ESTA ANTES --- funcionando execeto em mobile erro de permissão.
/* (function () {
	'use strict';

	// const $form = document.querySelector('[data-js="form"]');
	// const $search = document.querySelector('[data-js="search"]');
	const $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name) {
		if (gameWords.indexOf(name) > -1) {
			let i = gameWords.indexOf(name);
			return indexes[i];
		}

		$search.value = '';
		return false;
	}

	function selectTd(line, column) {
		let tr = $tbody.children[line];
		let td = tr.children[column];
		td.classList.add('color');
		$search.value = '';
	}

	const letters = [
		['w', 'm', 'o', 's', 'q', 'u', 'i', 't', 'o', 'v'],
		['v', 'a', 'l', 'p', 'a', 'l', 'h', 'e', 't', 'a'],
		['a', 't', 'i', 'g', 'u', 'a', 'n', 'a', 'o', 'e'],
		['c', 'c', 'i', 'f', 'e', 'b', 'r', 'e', 'u', 'd'],
		['i', 'l', 'd', 'e', 'n', 'g', 'u', 'e', 'p', 'e'],
		['n', 'u', 's', 'i', 'c', 'a', 't', 'l', 'i', 's'],
		['e', 'p', 'i', 'd', 'e', 'm', 'i', 'a', 'c', 'a'],
		['n', 'p', 'a', 'l', 'c', 'o', 'a', 'h', 'a', 'e'],
		['z', 'm', 'p', 't', 'r', 'e', 's', 'j', 'd', 'l'],
		['f', 'p', 'r', 'e', 'v', 'e', 'n', 'c', 'a', 'o'],
	];

	const lines = [];

	letters.map(function (item, index) {
		lines[index] = document.querySelector('[data-js="line' + index + '"]');
	});

	letters.forEach(function (item, index) {
		letters[index].forEach(function (item) {
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	const indexes = [
		[
			//dengue
			[4, 2],
			[4, 3],
			[4, 4],
			[4, 5],
			[4, 6],
			[4, 7],
		],
		[
			// mosquito
			[0, 1],
			[0, 2],
			[0, 3],
			[0, 4],
			[0, 5],
			[0, 6],
			[0, 7],
			[0, 8],
		],
		[
			// aedes
			[1, 9],
			[2, 9],
			[3, 9],
			[4, 9],
			[5, 9],
		],
		[
			//picada
			[4, 8],
			[5, 8],
			[6, 8],
			[7, 8],
			[8, 8],
			[9, 8],
		],
		[
			// vacine
			[1, 0],
			[2, 0],
			[3, 0],
			[4, 0],
			[5, 0],
			[6, 0],
		],
		[
			// epidemia
			[6, 0],
			[6, 1],
			[6, 2],
			[6, 3],
			[6, 4],
			[6, 5],
			[6, 6],
			[6, 7],
		],
		[
			// prevencao
			[9, 1],
			[9, 2],
			[9, 3],
			[9, 4],
			[9, 5],
			[9, 6],
			[9, 7],
			[9, 8],
			[9, 9],
		],
		[
			// febre
			[3, 3],
			[3, 4],
			[3, 5],
			[3, 6],
			[3, 7],
		],
	];
	const gameWords = [
		'dengue',
		'mosquito',
		'aedes',
		'picada',
		'vacine',
		'epidemia',
		'prevencao',
		'febre',
	];

	// $form.addEventListener(
	// 	'submit',
	// 	function (event) {
	// 		event.preventDefault();
	// 		let valueSearch = $search.value;
	// 		let getIndexes = getIndex(valueSearch);
	// 		for (let i = 0; i < getIndexes.length; i++) {
	// 			selectTd(getIndexes[i][0], getIndexes[i][1]);
	// 		}
	// 	},
	// 	false
	// );
})();
 */

// cores funiconando

/* letters.forEach(function (row, rowIndex) {
	let tr = document.createElement('tr');
	$tbody.appendChild(tr);

	row.forEach(function (letter, cellIndex) {
		let td = document.createElement('td');
		td.textContent = letter;

		// Verifica se a célula corresponde a algum índice especificado em indexes
		let isCorrect = indexes.some(function (indexList) {
			return indexList.some(function ([r, c]) {
				return r === rowIndex && c === cellIndex;
			});
		});

		// Adiciona a classe correta com base na verificação
		if (isCorrect) {
			td.classList.add('correct');
		} else {
			td.classList.add('incorrect');
		}

		// Adiciona evento de clique para cada célula
		td.addEventListener('click', function (event) {
			const td = event.target;

			// Adiciona a classe que exibe a cor ao clicar
			td.classList.toggle('showColor');
		});

		tr.appendChild(td);
	});
});

// Função de clique para resetar a cor da célula
function resetColor(event) {
	const td = event.target;
	td.classList.remove('correct');
	td.classList.remove('incorrect');
}

// Adiciona evento de clique para cada célula
const $tds = document.querySelectorAll('td');
$tds.forEach(function (td) {
	td.addEventListener('click', resetColor);
}); */
