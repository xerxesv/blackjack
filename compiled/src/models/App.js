// Generated by CoffeeScript 1.10.0
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      this.set('game', new Game());
      this.set('gameCount', 0);
      this.set('money', 500);
      this.set('currentBet', 0);
      this.set('history', new HandHistory());
      (this.get('game')).on('playerWin', this.playerWin, this);
      return (this.get('game')).on('playerLose', this.playerLose, this);
    };

    App.prototype.playerWin = function() {
      this.set('money', (this.get('money')) + (this.get('currentBet')));
      this.trigger('playerWin', this);
      return this.resetGame();
    };

    App.prototype.playerLose = function() {
      this.set('money', (this.get('money')) - (this.get('currentBet')));
      return this.resetGame();
    };

    App.prototype.resetGame = function() {
      var hands;
      hands = (this.get('game')).hands();
      (this.get('history')).unshift(hands);
      this.set('game', new Game());
      (this.get('game')).on('playerWin', this.playerWin, this);
      (this.get('game')).on('playerLose', this.playerLose, this);
      return this.set('gameCount', (this.get('gameCount')) + 1);
    };

    App.prototype.bet = function(amount) {
      return this.set('currentBet', +amount);
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.js.map
