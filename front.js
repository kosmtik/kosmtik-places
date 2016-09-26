L.K.Map.addInitHook(function () {
    this.whenReady(function () {
        var container = L.DomUtil.create('div', 'map-places-container'),
            title = L.DomUtil.create('h3', '', container),
            list = L.DomUtil.create('div', '', container),
            self = this;
        title.innerHTML = 'Places';
        var renderPlaces = function () {
            list.innerHTML = '';
            var places = L.K.Config.project.places || [];
            for (var i = 0; i < places.length; i++) {
                renderPlace(places[i]);
            }
        };
        this.sidebar.addTab({
            label: 'Places',
            className: 'places',
            content: container,
            callback: renderPlaces
        });
        var renderPlace = function (place) {
            var el = L.DomUtil.create('div', 'one-place', list),
                name = L.DomUtil.create('h4', '', el), comment;
            name.textContent = place.place_name;
            if (place.comment) {
                comment = L.DomUtil.create('div', '', el);
                comment.textContent = place.comment;
            }
            L.DomEvent.on(el, 'click', function () {
                self.setView(place.center, place.zoom || self.getZoom());
            });
        };
        this.sidebar.rebuild();
        var commandCallback = function () {
            this.sidebar.open('.places');
            renderPlaces();
        };
        this.commands.add({
            keyCode: L.K.Keys.D,
            ctrlKey: true,
            altKey: true,
            callback: commandCallback,
            context: this,
            name: 'Places: show'
        });
    });
});
