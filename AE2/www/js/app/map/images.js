/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global console, alert, window, document */
	/*global */

	win.APP.allImagesCache = {};

	win.APP.allImages = ['img/bg/bg-1.png', 'img/help/attack-icon.png', 'img/help/attack.png', 'img/help/finger-on-red-square.png', 'img/help/fix-building-icon.png', 'img/help/occupy-building-icon.png', 'img/help/raise.png', 'img/help/select-unit.png', 'img/help/tap-finger.png', 'img/other/logo.png', 'img/story/story-1-1.png', 'img/story/story-1-2.png', 'img/story/story-1-3.png', 'img/story/story-4-1.png', 'img/story/story-8-1.png', 'img/story/story-8-2.png', 'i/big-terrain/bridge-1.png', 'i/big-terrain/bridge-2.png', 'i/big-terrain/building-1.png', 'i/big-terrain/building-2.png', 'i/big-terrain/forest-1.png', 'i/big-terrain/forest-2.png', 'i/big-terrain/hill-1.png', 'i/big-terrain/hill-2.png', 'i/big-terrain/road.png', 'i/big-terrain/stone-1.png', 'i/big-terrain/stone-2.png', 'i/big-terrain/terra.png', 'i/big-terrain/water.png', 'i/big-terrain/_archer_arrow_00.png', 'i/big-terrain/_archer_arrow_01.png', 'i/big-terrain/_crater.png', 'i/face/demon-lord.png', 'i/face/galamar.png', 'i/face/saeth.png', 'i/face/soldier.png', 'i/face/tamplier.png', 'i/face/valadorn.png', 'i/fonts/numbers-1-0.png', 'i/fonts/numbers-1-1.png', 'i/fonts/numbers-1-2.png', 'i/fonts/numbers-1-3.png', 'i/fonts/numbers-1-4.png', 'i/fonts/numbers-1-5.png', 'i/fonts/numbers-1-6.png', 'i/fonts/numbers-1-7.png', 'i/fonts/numbers-1-8.png', 'i/fonts/numbers-1-9.png', 'i/fonts/numbers-1-def.png', 'i/fonts/numbers-1-minus.png', 'i/fonts/numbers-1-plus.png', 'i/fonts/numbers-1-space.png', 'i/fonts/numbers-2-0.png', 'i/fonts/numbers-2-1.png', 'i/fonts/numbers-2-2.png', 'i/fonts/numbers-2-3.png', 'i/fonts/numbers-2-4.png', 'i/fonts/numbers-2-5.png', 'i/fonts/numbers-2-6.png', 'i/fonts/numbers-2-7.png', 'i/fonts/numbers-2-8.png', 'i/fonts/numbers-2-9.png', 'i/fonts/numbers-2-icon-money.png', 'i/fonts/numbers-2-icon-unit.png', 'i/fonts/numbers-2-minus.png', 'i/fonts/numbers-2-plus.png', 'i/fonts/numbers-2-slash.png', 'i/fonts/numbers-2-space.png', 'i/unit/attack-action.png', 'i/unit/grave.png', 'i/unit/smoke-2.png', 'i/unit/under-poison.png', 'i/unit/under-wisp-aura.png', 'i/unit/unit-archer-black.png', 'i/unit/unit-archer-blue.png', 'i/unit/unit-archer-gray.png', 'i/unit/unit-archer-green.png', 'i/unit/unit-archer-red.png', 'i/unit/unit-catapult-black.png', 'i/unit/unit-catapult-blue.png', 'i/unit/unit-catapult-gray.png', 'i/unit/unit-catapult-green.png', 'i/unit/unit-catapult-red.png', 'i/unit/unit-crystal-black.png', 'i/unit/unit-crystal-blue.png', 'i/unit/unit-crystal-gray.png', 'i/unit/unit-crystal-green.png', 'i/unit/unit-crystal-red.png', 'i/unit/unit-demon-lord-black.png', 'i/unit/unit-demon-lord-blue.png', 'i/unit/unit-demon-lord-gray.png', 'i/unit/unit-demon-lord-green.png', 'i/unit/unit-demon-lord-red.png', 'i/unit/unit-dire-wolf-black.png', 'i/unit/unit-dire-wolf-blue.png', 'i/unit/unit-dire-wolf-gray.png', 'i/unit/unit-dire-wolf-green.png', 'i/unit/unit-dire-wolf-red.png', 'i/unit/unit-dragon-black.png', 'i/unit/unit-dragon-blue.png', 'i/unit/unit-dragon-gray.png', 'i/unit/unit-dragon-green.png', 'i/unit/unit-dragon-red.png', 'i/unit/unit-elemental-black.png', 'i/unit/unit-elemental-blue.png', 'i/unit/unit-elemental-gray.png', 'i/unit/unit-elemental-green.png', 'i/unit/unit-elemental-red.png', 'i/unit/unit-galamar-black.png', 'i/unit/unit-galamar-blue.png', 'i/unit/unit-galamar-gray.png', 'i/unit/unit-galamar-green.png', 'i/unit/unit-galamar-red.png', 'i/unit/unit-golem-black.png', 'i/unit/unit-golem-blue.png', 'i/unit/unit-golem-gray.png', 'i/unit/unit-golem-green.png', 'i/unit/unit-golem-red.png', 'i/unit/unit-saeth-black.png', 'i/unit/unit-saeth-blue.png', 'i/unit/unit-saeth-gray.png', 'i/unit/unit-saeth-green.png', 'i/unit/unit-saeth-red.png', 'i/unit/unit-skeleton-black.png', 'i/unit/unit-skeleton-blue.png', 'i/unit/unit-skeleton-gray.png', 'i/unit/unit-skeleton-green.png', 'i/unit/unit-skeleton-red.png', 'i/unit/unit-soldier-black.png', 'i/unit/unit-soldier-blue.png', 'i/unit/unit-soldier-gray.png', 'i/unit/unit-soldier-green.png', 'i/unit/unit-soldier-red.png', 'i/unit/unit-sorceress-black.png', 'i/unit/unit-sorceress-blue.png', 'i/unit/unit-sorceress-gray.png', 'i/unit/unit-sorceress-green.png', 'i/unit/unit-sorceress-red.png', 'i/unit/unit-valadorn-black.png', 'i/unit/unit-valadorn-blue.png', 'i/unit/unit-valadorn-gray.png', 'i/unit/unit-valadorn-green.png', 'i/unit/unit-valadorn-red.png', 'i/unit/unit-wisp-black.png', 'i/unit/unit-wisp-blue.png', 'i/unit/unit-wisp-gray.png', 'i/unit/unit-wisp-green.png', 'i/unit/unit-wisp-red.png', 'i/ux/available-attack.png', 'i/ux/available-path-with-attack.png', 'i/ux/available-path.png', 'i/ux/confirm-attack.png', 'i/ux/confirm-move.png', 'i/ux/fix-building.png', 'i/ux/level-up.png', 'i/ux/occupy-building.png', 'i/ux/open-store.png', 'i/ux/select-mark.png', 'i/ux/unit-under-attack.png', 'i/ui/border-1.png', 'i/ui/border-2.png', 'i/ui/cross-icon.png', 'i/ui/icon-unit-fast-info-attack.png', 'i/ui/icon-unit-fast-info-defence.png', 'i/ui/icon-unit-fast-info-level.png', 'i/ui/icon-unit-info-attack.png', 'i/ui/icon-unit-info-defence.png', 'i/ui/icon-unit-info-move.png', 'i/ui/map-preview.png', 'i/ui/menu-icons.png', 'i/ui/team-color-icons.png', 'i/ui/map-editor/building.png', 'i/ui/map-editor/clean.png', 'i/ui/map-editor/eraser.png', 'i/ui/map-editor/delete.png', 'i/ui/map-editor/exit.png', 'i/ui/map-editor/open.png', 'i/ui/map-editor/replace.png', 'i/ui/map-editor/save.png', 'i/ui/map-editor/terrain.png', 'i/ui/map-editor/unit.png', 'i/map/building/castle-black.png', 'i/map/building/castle-blue.png', 'i/map/building/castle-gray.png', 'i/map/building/castle-green.png', 'i/map/building/castle-red.png', 'i/map/building/farm-black.png', 'i/map/building/farm-blue.png', 'i/map/building/farm-destroyed.png', 'i/map/building/farm-gray.png', 'i/map/building/farm-green.png', 'i/map/building/farm-red.png', 'i/map/building/smoke.png', 'i/map/building/temple.png', 'i/map/building/well.png', 'i/map/terra/angle/road-1-s.png', 'i/map/terra/angle/road-1.png', 'i/map/terra/angle/road-2.png', 'i/map/terra/angle/road-3-s.png', 'i/map/terra/angle/road-3.png', 'i/map/terra/angle/road-4.png', 'i/map/terra/angle/road-6.png', 'i/map/terra/angle/road-7-s.png', 'i/map/terra/angle/road-7.png', 'i/map/terra/angle/road-8.png', 'i/map/terra/angle/road-9-s.png', 'i/map/terra/angle/road-9.png', 'i/map/terra/angle/water-1-s.png', 'i/map/terra/angle/water-1.png', 'i/map/terra/angle/water-2.png', 'i/map/terra/angle/water-3-s.png', 'i/map/terra/angle/water-3.png', 'i/map/terra/angle/water-4.png', 'i/map/terra/angle/water-6.png', 'i/map/terra/angle/water-7-s.png', 'i/map/terra/angle/water-7.png', 'i/map/terra/angle/water-8.png', 'i/map/terra/angle/water-9-s.png', 'i/map/terra/angle/water-9.png', 'i/map/terra/building/castle-black.png', 'i/map/terra/building/castle-blue.png', 'i/map/terra/building/castle-gray.png', 'i/map/terra/building/castle-green.png', 'i/map/terra/building/castle-red.png', 'i/map/terra/building/farm-black.png', 'i/map/terra/building/farm-blue.png', 'i/map/terra/building/farm-destroyed.png', 'i/map/terra/building/farm-gray.png', 'i/map/terra/building/farm-green.png', 'i/map/terra/building/farm-red.png', 'i/map/terra/building/smoke.png', 'i/map/terra/building/temple.png', 'i/map/terra/building/well.png', 'i/map/terra/terra/bridge-1.png', 'i/map/terra/terra/bridge-2.png', 'i/map/terra/terra/forest-1.png', 'i/map/terra/terra/forest-2.png', 'i/map/terra/terra/hill-1.png', 'i/map/terra/terra/road-1.png', 'i/map/terra/terra/stone-1.png', 'i/map/terra/terra/stone-2.png', 'i/map/terra/terra/terra-1.png', 'i/map/terra/terra/terra-2.png', 'i/map/terra/terra/terra-3.png', 'i/map/terra/terra/terra-4.png', 'i/map/terra/terra/terra-5.png', 'i/map/terra/terra/water-1.png', 'i/map/terra/terra/water-2.png', 'i/map/terra/terra/water-3.png', 'i/map/terra/terra-css/bridge-1.png', 'i/map/terra/terra-css/bridge-2.png', 'i/map/terra/terra-css/forest-1.png', 'i/map/terra/terra-css/forest-2.png', 'i/map/terra/terra-css/hill-1.png', 'i/map/terra/terra-css/road-1.png', 'i/map/terra/terra-css/stone-1.png', 'i/map/terra/terra-css/stone-2.png', 'i/map/terra/terra-css/terra-1.png', 'i/map/terra/terra-css/terra-2.png', 'i/map/terra/terra-css/terra-3.png', 'i/map/terra/terra-css/terra-4.png', 'i/map/terra/terra-css/terra-5.png', 'i/map/terra/terra-css/water-1.png', 'i/map/terra/terra-css/water-2.png', 'i/map/terra/terra-css/water-3.png'];

}(window));
