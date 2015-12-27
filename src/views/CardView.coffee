class window.CardView extends Backbone.View
  className: 'card'

  template: _.template '<%= rankName %> of <%= suitName %>'

  initialize: -> @render()

  render: ->
    srcstr = "url('img/cards/#{@model.get 'rankName'}-#{@model.get 'suitName'}.png')"
    @$el.children().detach()
    # @$el.html @template @model.attributes
    @$el.addClass 'covered' unless @model.get 'revealed'
    @$el.css 'background-image', srcstr.toLowerCase() if @model.get 'revealed'

