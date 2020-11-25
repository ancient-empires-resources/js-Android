/*jslint white: true, nomen: true */
(function (win) {

    'use strict';
    /*global window, document */
    /*global APP */

    win.APP.maps = win.APP.maps || {};

    win.APP.maps.skirmish_001_021 = {
        version: 1,
        "type": "skirmish",
        "size": {"width": 10, "height": 10},
        "name": "Protection of the castle",
        "name-es": "Protección del castillo",
        "name-ru": "Защита замков",
        "isOpen": true,
        "maxPlayers": 2,
        "units": [{"x": 9, "y": 9, "type": "commander", "ownerId": 1}, {
            "x": 0,
            "y": 0,
            "type": "commander",
            "ownerId": 0
        }],
        "buildings": [{"x": 4, "y": 0, "type": "farm", "state": "normal"}, {
            "x": 5,
            "y": 0,
            "type": "farm",
            "state": "normal"
        }, {"x": 4, "y": 9, "type": "farm", "state": "normal"}, {
            "x": 5,
            "y": 9,
            "type": "farm",
            "state": "normal"
        }, {"x": 7, "y": 3, "type": "farm", "state": "normal"}, {
            "x": 8,
            "y": 3,
            "type": "farm",
            "state": "normal"
        }, {"x": 1, "y": 6, "type": "farm", "state": "normal"}, {
            "x": 2,
            "y": 6,
            "type": "farm",
            "state": "normal"
        }, {"x": 3, "y": 5, "type": "farm", "state": "destroyed"}, {
            "x": 6,
            "y": 4,
            "type": "farm",
            "state": "destroyed"
        }, {"x": 2, "y": 3, "type": "castle", "state": "normal"}, {
            "x": 7,
            "y": 6,
            "type": "castle",
            "state": "normal"
        }, {"x": 0, "y": 0, "type": "castle", "state": "normal", "ownerId": 0}, {
            "x": 9,
            "y": 9,
            "type": "castle",
            "state": "normal",
            "ownerId": 1
        }],
        "terrain": {
            "x0y0": "road-1",
            "x0y1": "road-1",
            "x0y2": "water-1",
            "x0y3": "water-1",
            "x0y4": "water-1",
            "x0y5": "water-1",
            "x0y6": "water-1",
            "x0y7": "water-1",
            "x0y8": "water-1",
            "x0y9": "water-1",
            "x1y0": "terra-1",
            "x1y1": "road-1",
            "x1y2": "road-1",
            "x1y3": "road-1",
            "x1y4": "road-1",
            "x1y5": "terra-1",
            "x1y6": "terra-1",
            "x1y7": "water-1",
            "x1y8": "water-1",
            "x1y9": "water-2",
            "x2y0": "water-1",
            "x2y1": "water-1",
            "x2y2": "water-1",
            "x2y3": "road-1",
            "x2y4": "road-1",
            "x2y5": "road-1",
            "x2y6": "terra-1",
            "x2y7": "water-1",
            "x2y8": "water-1",
            "x2y9": "water-1",
            "x3y0": "water-1",
            "x3y1": "water-1",
            "x3y2": "water-1",
            "x3y3": "terra-2",
            "x3y4": "road-1",
            "x3y5": "terra-1",
            "x3y6": "terra-1",
            "x3y7": "water-1",
            "x3y8": "water-1",
            "x3y9": "water-1",
            "x4y0": "terra-1",
            "x4y1": "road-1",
            "x4y2": "road-1",
            "x4y3": "road-1",
            "x4y4": "road-1",
            "x4y5": "road-1",
            "x4y6": "terra-4",
            "x4y7": "water-1",
            "x4y8": "water-1",
            "x4y9": "terra-1",
            "x5y0": "terra-1",
            "x5y1": "water-1",
            "x5y2": "water-1",
            "x5y3": "terra-5",
            "x5y4": "road-1",
            "x5y5": "road-1",
            "x5y6": "road-1",
            "x5y7": "road-1",
            "x5y8": "road-1",
            "x5y9": "terra-1",
            "x6y0": "water-1",
            "x6y1": "water-1",
            "x6y2": "water-1",
            "x6y3": "terra-1",
            "x6y4": "terra-1",
            "x6y5": "road-1",
            "x6y6": "forest-2",
            "x6y7": "water-1",
            "x6y8": "water-1",
            "x6y9": "water-1",
            "x7y0": "water-1",
            "x7y1": "water-2",
            "x7y2": "water-1",
            "x7y3": "terra-1",
            "x7y4": "road-1",
            "x7y5": "road-1",
            "x7y6": "road-1",
            "x7y7": "water-1",
            "x7y8": "water-1",
            "x7y9": "water-1",
            "x8y0": "water-1",
            "x8y1": "water-1",
            "x8y2": "water-1",
            "x8y3": "terra-1",
            "x8y4": "terra-1",
            "x8y5": "road-1",
            "x8y6": "road-1",
            "x8y7": "road-1",
            "x8y8": "road-1",
            "x8y9": "terra-1",
            "x9y0": "water-1",
            "x9y1": "water-1",
            "x9y2": "water-1",
            "x9y3": "water-1",
            "x9y4": "water-1",
            "x9y5": "water-1",
            "x9y6": "water-1",
            "x9y7": "water-1",
            "x9y8": "road-1",
            "x9y9": "road-1"
        }
    };

}(window));