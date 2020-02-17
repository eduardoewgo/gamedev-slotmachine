var objects;
(function (objects) {
    class Label extends createjs.Text {
        constructor(lbl) {
            super(lbl.labelString || 'Empty String', `${lbl.fontSize || '30px'} ${lbl.fontFamily}` || 'Consolas', lbl.fontColour || '#ffffff');
            // This will set the middle as the ref point
            if (lbl.isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
            this.x = lbl.x;
            this.y = lbl.y;
        }
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map