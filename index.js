
/**
 * Expose `truncate`.
 */

exports = module.exports = truncate;

/**
 * Truncate the given string in less or equal length to the given characters
 * starting from left side.
 *
 * @param {String} str
 * @param {Number} chars (default 200 chars)
 * @return {Object}
 */

function truncate(str, chars, left){
  chars = chars || 200;
  if (!str || !str.length || str.length <= chars) return str;

  left = left !== false;
  var mod = false !== left ? 0 : 1;
  var end = !mod ? chars : str.length - chars;
  var new_str = str.substring(!mod ? 0 : str.length, end);
  var perfect = str[end] == ' ';

  if (!perfect) {
    new_str = new_str.replace(left ? /\s*[^\s|.]*$/ : /^[^\s|.]*\s*/, '');
  }
  return new_str;
}

/**
 * Truncate the given string in less or equal length to the given characters
 * starting from LEFT side.
 *
 * @param {String} str
 * @param {Number} chars (default 200 chars)
 * @api public
 */

exports.left = truncate;

/**
 * Truncate the given string in less or equal length to the given characters
 * starting from RIGHT side.
 *
 * @param {String} str
 * @param {Number} chars (default 200 chars)
 * @api public
 */

exports.right = function(str, chars){
  return truncate(str, chars, false);
};
