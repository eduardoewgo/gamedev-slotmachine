module objects {
    // Button class used for clickable buttons
    export class Button extends GameObject {

        private _isEnabled = false;

        get IsEnabled(): boolean {
            return this._isEnabled;
        }

        set IsEnabled(newValue: boolean) {
            if (this._isEnabled != newValue) {
                this._isEnabled = newValue;
                if (newValue) {
                    this.alpha = 1;
                    this.addEventListener("mouseover", this.MouseOver);
                    this.addEventListener("mouseout", this.MouseOut);
                } else {
                    this.alpha = 0.3;
                    this.off("mouseover", this.MouseOver);
                    this.off("mouseout", this.MouseOut);
                }
            }
        }

        constructor(btn: { imageString: string, x: number, y: number, isCentered?: boolean }) {
            super(btn.imageString);

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

        MouseOver(): void {
            this.alpha = 0.85;
        }

        MouseOut(): void {
            this.alpha = 1;
        }

        public Start(): void {
        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }
    }
}
