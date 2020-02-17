module objects {
    export class Reel extends objects.GameObject {
        constructor(imageString: string, options?: { scale?: number }) {
            super(imageString);

            if (options?.scale) {
                this.scaleX = options.scale;
                this.scaleY = options.scale;
            }

            this.Start();
        }

        public Start(): void {
            this.y = 205;
        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }


    }
}
