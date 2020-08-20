    let actual = 'actual/{z}/{x}/{y}.png';
    let stamen = 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png';


    //  .. CartoDB Positron
    var cartodb = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        minZoom: 0,
        maxZoom: 6
    });

    //  .. OSM Toner
    var toner = L.tileLayer(stamen, {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
        minZoom: 0,
        maxZoom: 6
    });

    var lyr = L.tileLayer('analysis/{z}/{x}/{y}.png', {
        tms: true,
        opacity: 0.7,
        attribution: 'Original Data by <a href="http://www.lightpollution.it/worldatlas/pages/fig1.htm">Istituto di Scienza e Tecnologia dell\'Inquinamento Luminoso</a>',
        minZoom: 0,
        maxZoom: 6
    });
    var lyrr = L.tileLayer(actual, {
        tms: true,
        opacity: 0.8,
        attribution: '2016 Nasa EarthObservation Data ', //atribution needed
        minZoom: 0,
        maxZoom: 6
    });
    //49.9287352793907075, 26.579578699554787
    // Map
    let map = L.map('mapid', {
        center: [9.1058489, 76.5513027],
        zoom: 6,
        minZoom: 0,
        maxZoom: 6,
        layers: [toner] //this is it
    });
    // console.log(map);
    var basemaps = {
        "CartoDB Positron": cartodb,
        "Stamen Toner": toner
    }
    var overlaymaps = {
        "Layer": lyr,
        "actual": lyrr
    }

    // Title
    var title = L.control();
    title.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'ctl title');
        this.update();
        return this._div;
    };
    title.update = function (props) {
        this._div.innerHTML = "final.tif";
    };
    //title.addTo(map);

    // Note
    var src = '';
    var title = L.control({
        position: 'bottomleft'
    });
    title.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'ctl src');
        this.update();
        return this._div;
    };
    title.update = function (props) {
        this._div.innerHTML = src;
    };
    //title.addTo(map);


    // Add base layers
    L.control.layers(basemaps, overlaymaps, {
        collapsed: false
    }).addTo(map);

    // Fit to overlay bounds (SW and NE points with (lat, lon))
    map.fitBounds([[-66.0451423404802, 180.0], [75.90261289926161, -126.84084260089043]]);

    function setmap(map) {
        if (Object.keys(map._layers).includes(lyrr._leaflet_id.toString())) {
            map.removeLayer(lyrr);
        } else {
            map.addLayer(lyrr);
        }
    }

    function setmap2(map) {
        if (Object.keys(map._layers).includes(toner._leaflet_id.toString())) {
            map.removeLayer(toner);
        } else {
            map.addLayer(toner);
        }
    }
    // console.log(map._layers);
    function setmap3(map) {
        if (Object.keys(map._layers).includes(lyr._leaflet_id.toString())) {
            map.removeLayer(lyr);
            console.log("add");
        } else {
            map.addLayer(lyr);
            console.log("remove");
        }
    }
