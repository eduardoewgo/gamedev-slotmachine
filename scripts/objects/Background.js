var objects;
(function (objects) {
    class Background extends objects.GameObject {
        constructor(imageString, options) {
            super(imageString);
            if (options) {
                if (options.isCentered) {
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height * 0.5;
                }
                if (options.scale) {
                    this.scaleX = options.scale;
                    this.scaleY = options.scale;
                }
                if (options.x && options.y) {
                    this.x = options.x;
                    this.y = options.y;
                }
            }
        }
        Start() {
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=Background.js.map