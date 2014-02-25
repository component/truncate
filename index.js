
/**
 * Expose `truncate`.
 */

exports = module.exports = truncate;

/**
 * Truncate the given string in less or equal length to the given characters
 * starting from LEFT side.
 *
 * @param {String} str
 * @param {Number} chars (default 200 chars)
 * @param {String} suffix string to add to summary
 * @return {Object}
 */

function truncate(str, chars, suffix, left){
  suffix = 'string' == typeof chars ? chars : suffix;
  chars = 'number' == typeof chars ? chars : 200;

  suffix = suffix || '';
  if (!str || !str.length || str.length <= chars) return str;

  left = left !== false;
  var mod = left ? 0 : 1;
  var end = mod ? str.length - chars : chars;
  var new_str = str.substring(mod ? str.length : 0, end);
  var perfect = left
    ? str[end] == ' '
    : (str[end - 1] == ' ');

  if (!perfect) {
    new_str = new_str.replace(left
      ? /\s*[^\s|.]*$/
      : /^[^\s|.]*\s*/, '');
  }
  return left ? new_str + suffix : suffix + new_str;
}

/**
 * See <truncate>
 */

exports.left = truncate;

/**
 * Truncate the given string in less or equal length to the given characters
 * starting from RIGHT side.
 *
 * @param {String} str
 * @param {Number} chars (default 200 chars)
 * @param {String} prefix string prefix to add to summary
 * @api public
 */

exports.right = function(str, chars, prefix){
  return truncate(str, chars, prefix, false);
};
