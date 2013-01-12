
Object.collect = function (object, fnc) {
	var result;
	if ($.isArray(object))
		this.each(function () {
			if (fnc.call(object, object[i], i) === true)
				result.push(object[i]);
		});
	else
		this.each(function () {
			if (fnc.call(object, object[i], i) === true)
				result[i] = object[i];
		});
	return result;
};

Object.each = function (object, fnc) {
	if ($.isArray(object))
	{
		for (var i = 0; i < object.length; i++)
		{
			if (fnc.call(object, object[i], i) === false)
				break;
		}
	}
	else
	{
		for (var i in object)
		{
			if (fnc.call(object, object[i], i) === false)
				break;
		}
	}
};

Object.map = function (object, fnc) {
	var result;
	if ($.isArray(object))
	{
		result = [];
		for (var i = 0; i < object.length; i++)
			result.push(fnc.call(object, object[i], i));
	}
	else
	{
		result = {};
		for (var i in object)
			result[i] = fnc.call(object, object[i], i);
	}
	return result;
};

Object.mapDefined = function (object, fnc) {
	var result, tmp;
	if ($.isArray(object))
	{
		result = [];
		for (var i = 0; i < object.length; i++)
		{
			if ((tmp = fnc.call(object, object[i], i)) !== undefined)
				result.push(tmp);
		}
	}
	else
	{
		result = {};
		for (var i in object)
		{
			if ((tmp = fnc.call(object, object[i], i)) !== undefined)
				result[i] = tmp;
		}
	}
	return result;
};

if (!Array.prototype.remove)
{
	Array.prototype.remove = function (index)
	{
		var result = this[index];
		this.splice(index, 0, 1);
		return result;
	};
}

if (!Array.prototype.isEmpty)
{
	Array.prototype.isEmpty = function ()
	{
		return this.length == 0;
	};
}

if (!Array.prototype.included)
{
	Array.prototype.included = function (value)
	{
		for (var i = 0; i < this.length; i++)
		{
			if (this[i] == value)
				return true;
		}
		return false;
	};
}
