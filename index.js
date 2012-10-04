
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
  var cutted = cut(str, chars, left);
  if (!cutted[1]) {
    cutted[0] = cutted[0].replace(left ? /\s*[^\s|.]*$/ : /^[^\s|.]*\s*/, '');
  }
  return cutted[0];
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

/**
 * Cut the given string from left or right side
 *
 * @param {String} string
 * @param {Number} chars
 * @param {Boolen} left (default true)
 * @return {Array}
 * @api private
 */

function cut(str, chars, left){
  var mod = false !== left ? 0 : 1;
  var end = !mod ? chars : str.length - chars;
  return [str.substring(!mod ? 0 : str.length, end), str[end] == ' '];
}
