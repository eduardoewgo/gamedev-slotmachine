var objects;
(function (objects) {
    class Reel extends objects.GameObject {
        constructor(imageString, options) {
            var _a;
            super(imageString);
            if ((_a = options) === null || _a === void 0 ? void 0 : _a.scale) {
                this.scaleX = options.scale;
                this.scaleY = options.scale;
            }
            this.Start();
        }
        Start() {
            this.y = 205;
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
        }
    }
    objects.Reel = Reel;
})(objects || (objects = {}));
//# sourceMappingURL=Reel.js.map