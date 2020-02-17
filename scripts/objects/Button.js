var objects;
(function (objects) {
    // Button class used for clickable buttons
    class Button extends objects.GameObject {
        constructor(btn) {
            super(btn.imageString);
            this._isEnabled = false;
            // This will set the middle as the ref point
            if (btn.isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = btn.x;
            this.y = btn.y;
            this.MouseOut = this.MouseOut.bind(this);
            this.MouseOver = this.MouseOver.bind(this);
            this.IsEnabled = true;
        }
        get IsEnabled() {
            return this._isEnabled;
        }
        set IsEnabled(newValue) {
            if (this._isEnabled != newValue) {
                this._isEnabled = newValue;
                if (newValue) {
                    this.alpha = 1;
                    this.addEventListener("mouseover", this.MouseOver);
                    this.addEventListener("mouseout", this.MouseOut);
                }
                else {
                    this.alpha = 0.65;
                    this.off("mouseover", this.MouseOver);
                    this.off("mouseout", this.MouseOut);
                }
            }
        }
        MouseOver() {
            this.alpha = 0.90;
        }
        MouseOut() {
            this.alpha = 1;
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
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map