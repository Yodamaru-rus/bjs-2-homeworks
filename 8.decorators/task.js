//Задача № 1
function cachingDecoratorNew(func) {
	const cache ={};
	const keysOrder = [];

	return (...args) =>{
		const hash = md5([...args]);
		if(hash in cache){
			return "Из кеша: " + cache[hash];
		}

		const result = func(...args);

		if(keysOrder.length>=5){
			const oldestKey = keysOrder.shift();
			delete cache[oldestKey];	
		}
		cache[hash] = result;
		keysOrder.push(hash);
		return "Вычисляем: " + result;
	};
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args){	
		wrapper.allCount ++;

		if(timeoutId){
			console.log("Удалим текущий таймаут");
			clearTimeout(timeoutId);
		}else{
			func(...args);
			wrapper.count++;
		}

		console.log("Создаем новый таймаут");
		timeoutId = setTimeout(()=> {
			timeoutId = null;
			func(...args);
			console.log("Вызвали колбек");
		},delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}
