// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.HandHistory = (function(superClass) {
    extend(HandHistory, superClass);

    function HandHistory() {
      return HandHistory.__super__.constructor.apply(this, arguments);
    }

    HandHistory.prototype.model = HandHistoryEntry;

    return HandHistory;

  })(Backbone.Collection);

}).call(this);

//# sourceMappingURL=HandHistory.js.map