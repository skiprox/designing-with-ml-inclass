'use strict';

let positionDict = {};

class App {
	constructor() {
		this.application = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight
		});
		this.setup();
		this.setupDict();
	}
	setup() {
		document.body.appendChild(this.application.view);
	}
	setupDict() {
		for (let i = 0; i < positions.length; i++) {
			let filename = positions[i].filename.replace(/\//g, '_');
			let name = filename.replace('.jpg', '');
			positionDict[name] = positions[i];
			this.application.loader.add(name, './resized/' + filename);
		}
	}
}

const app = new App();

let loaderFunction = (loader, resources) => {
	for (let key in resources) {
		let imageSprite = new PIXI.Sprite(resources[key].texture);
		let clusterPos = positionDict[key];

		imageSprite.anchor.x = 0.5;
		imageSprite.anchor.y = 0.5;
		imageSprite.x = clusterPos[0] * app.application.renderer.width;
		imageSprite.y = clusterPos[1] * app.application.renderer.height;

		app.application.stage.addChild(imageSprite);
	}
}

app.application.loader.load(loaderFunction);
