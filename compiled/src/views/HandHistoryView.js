// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.HandHistoryView = (function(superClass) {
    extend(HandHistoryView, superClass);

    function HandHistoryView() {
      return HandHistoryView.__super__.constructor.apply(this, arguments);
    }

    HandHistoryView.prototype.tagName = 'table';

    HandHistoryView.prototype.className = 'history';

    HandHistoryView.prototype.initialize = function() {
      this.render();
      return this.collection.on("add", this.render, this);
    };

    HandHistoryView.prototype.render = function() {
      var node;
      this.$el.empty();
      node = this.collection.map(function(model) {
        return (new HandHistoryEntryView({
          model: model
        })).$el;
      });
      return this.$el.append(node);
    };

    return HandHistoryView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=HandHistoryView.js.map
