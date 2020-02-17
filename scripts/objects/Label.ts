module objects {
    export class Label extends createjs.Text {
        constructor(lbl: { labelString?: string; fontSize?: string; fontFamily?: string; fontColour?: string; x: number; y: number; isCentered?: boolean; }) {
            super(lbl.labelString || 'Empty String', `${lbl.fontSize || '18px'} ${lbl.fontFamily}` || 'Consolas', lbl.fontColour || '#ffffff');

            // This will set the middle as the ref point
            if (lbl.isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }

            this.x = lbl.x;
            this.y = lbl.y;
        }
    }
}
