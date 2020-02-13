import $ from 'jquery';

class AnchorScroll {
  constructor(...args) {
    this[`_constructor${args.length}`](...args);
  }

  _constructor1(options) {
    this._constructor2($('html, body'), options);
  }

  _constructor2($element, options) {
    this.$element = $element;
    this.options = options;
  }

  execute() {
    const scrollTop = this._getTarget().offset().top;
    const { duration, complete } = this.options;
    this.$element.animate({ scrollTop }, { duration, complete });
  }

  _getTarget() {
    const { target } = this.options;
    return target instanceof $ ? target : $(target);
  }
}

$.extend({
  anchorScroll(options) {
    new AnchorScroll(options).execute();
  },
});