
//= require overrides.js

var z = 0;

/**
 * @namespace
 */
var Dom = {
	/**
	 * Create the HTMLElement from the params.
	 * 
	 * @public
	 * @returns {HTMLElement} DOM with the settings passed.
	 * 
	 * @since 0.1
	 * @version 0.1
	 */
	create: function (tag, options, content)
	{
		if (tag && (typeof tag !== 'string'))
		{
			options = tag;
			content = options.content;
			tag = options.tag;
			delete options.content;
			delete options.tag;
		} else if (options && !content && ((options.dom === true)
			|| (typeof object !== 'string')))
		{
			content = options;
			options = null;
		}
		var result = document.createElement(tag), $result = $(result);

		if (options)
			this.apply($result, options);

		if (content instanceof Array)
		{
			for (var i = 0; i < content.length; i++)
			{
				if (content[i])
					this._append($result, content[i])
			}
		}
		else if (content)
			this._append($result, content);
		return result;
	},

	apply: function ($dom, options)
	{
		// Data
		if (options.className)
		{
			$dom.addClass((options.className instanceof Array)?options.className.join(' '):options.className);
			delete options.className;
		}
		// Data
		if (options.data)
		{
			$dom.data(options.data);
			delete options.data;
		}
		// Css
		if (options.style)
		{
			$dom.css(options.style);
			delete options.style;
		}
		// Events
		if (options.on)
		{
			$dom.on(options.on);
			delete options.on;
		}
		// Attributes
		$dom.attr(options);
		return $dom;
	},

	/**
	 * Method helper to aid the {@link create} method to append data into DOM
	 * created.
	 * 
	 * This append both strings, jQuery and DOM contents to a DOM and use 
	 * jQuery.append for this.
	 * 
	 * @protected
	 */
	_append: function ($result, content)
	{
		if (
			(typeof content == 'string') || (content instanceof jQuery)
			|| (content.appendChild && content.tagName))
			$result.append(content);
		else
			$result.append(this.create(content));
	}
};
