module objects {
    export class Background extends objects.GameObject {
        constructor(imageString: string, options?: { scale?: number, isCentered?: boolean, x?: number, y?: number }) {
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
