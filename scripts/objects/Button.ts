module objects {
    export class Button extends createjs.Bitmap {
        constructor(btn: { imagePath: string, x: number, y: number, isCentered?: boolean }) {
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

        MouseOver(): void {
            this.alpha = 0.85;
        }

        MouseOut(): void {
            this.alpha = 1;
        }
    }
}
