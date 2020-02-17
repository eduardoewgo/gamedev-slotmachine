"use strict";
var objects;
(function (objects) {
    class Button extends createjs.Bitmap {
        constructor(btn) {
            super(btn.imagePath);
            // This will set the middle as the ref point
            if (btn.isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = btn.x;
            this.y = btn.y;
            this.on('mouseover', this.MouseOver);
            this.on('mouseout', this.MouseOut);
        }
        MouseOver() {
            this.alpha = 0.85;
        }
        MouseOut() {
            this.alpha = 1;
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map