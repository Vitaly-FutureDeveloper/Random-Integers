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
//Генератор выше - немного неудачный, поскольку с 
//большими числами будет много итераций (рекурсий)...
//Пока ни найдёт среднее число <от> и <до>

//Удачный генератор. Можно использовать везде и любых чисел.
function mt_rand_plus(min, max){
	if( max > min ){
		var arifm = max - min;
			arifm = Math.floor(Math.random() * Math.floor(arifm));
		return min + arifm;
	} else {
		console.log("Ошибка в указании данных для генератора случайных чисел");
		return false;
	}
}