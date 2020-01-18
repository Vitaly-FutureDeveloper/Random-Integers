//**************************************************************//
//В JavaScript - полностью отсуствуют генераторы случайных чисел...
//Эту недоработку пора исправить парочкой алгоритмов
//***************************************************************//

//Простой генератор от 0 до <максимального значения от пользователя>
function rand(max){
	return Math.floor(Math.random() * Math.floor(max));
}

//Иногда, нужно сгенерировать от минимального, вот он:
//Генератор от минимального, до максимального
function mt_rand(min, max){
	if( min == 0 ){
		return Math.floor(Math.random() * Math.floor(max));
	}
	else {
		var randTemp = Math.floor(Math.random() * Math.floor(max));
		if( randTemp > min )
			return randTemp;
		else
			return rand(min, max);
	}
}
