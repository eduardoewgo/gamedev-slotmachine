// Scene that contains the slotmachine game
module scenes {
    export class Play extends objects.Scene {
        private _playBackground: objects.Background;
        private _slotMachine: objects.Background;

        private _lblMoney: objects.Label;
        private _lblBet: objects.Label;
        private _lblJackpot: objects.Label;

        private _btnReset: objects.Button;
        private _btnSpin: objects.Button;
        private _btnQuit: objects.Button;

        private _playerMoney: number;
        private _playerBet: number;
        private _winnings: number;
        private _jackpot: number;
        private _spinResult: string[];
        private _grapes: number;
        private _bananas: number;
        private _oranges: number;
        private _cherries: number;
        private _bars: number;
        private _lemons: number;
        private _sevens: number;
        private _blanks: number;

        private _reelObjXLocation: number[];
        private _reels: objects.Reel[];

        constructor() {
            super();
            this.Start();
        }

        // Displays results on the reels
        private DisplayResults(): void {
            this.RemoveOldResult();
            for (let index = 0; index < this._spinResult.length; index++) {
                let result: string = this._spinResult[index];
                this._reels[index] = new objects.Reel(result, {scale: 0.75});
                this._reels[index].x = this._reelObjXLocation[index];
                this.addChild(this._reels[index]);
            }
        }

        // Removes the images from the previous spin
        private RemoveOldResult() {
            for (let index = 0; index < this._reels.length; index++) {
                this.removeChild(this._reels[index]);
            }
        }

        // Spins each reel to get the spin result
        private Reels(): string[] {
            {
                var betLine = [" ", " ", " "];
                var outCome = [0, 0, 0];

                for (var spin = 0; spin < 3; spin++) {
                    outCome[spin] = Math.floor((Math.random() * 65) + 1);
                    switch (outCome[spin]) {
                        case this.checkRange(outCome[spin], 1, 27):  // 41.5% probability
                            betLine[spin] = "blank";
                            this._blanks++;
                            break;
                        case this.checkRange(outCome[spin], 28, 37): // 15.4% probability
                            betLine[spin] = "grapes";
                            this._grapes++;
                            break;
                        case this.checkRange(outCome[spin], 38, 46): // 13.8% probability
                            betLine[spin] = "banana";
                            this._bananas++;
                            break;
                        case this.checkRange(outCome[spin], 47, 54): // 12.3% probability
                            betLine[spin] = "orange";
                            this._oranges++;
                            break;
                        case this.checkRange(outCome[spin], 55, 59): //  7.7% probability
                            betLine[spin] = "cherry";
                            this._cherries++;
                            break;
                        case this.checkRange(outCome[spin], 60, 62): //  4.6% probability
                            betLine[spin] = "bar";
                            this._bars++;
                            break;
                        case this.checkRange(outCome[spin], 63, 64): //  3.1% probability
                            betLine[spin] = "lemon";
                            this._lemons++;
                            break;
                        case this.checkRange(outCome[spin], 65, 65): //  1.5% probability
                            betLine[spin] = "seven";
                            this._sevens++;
                            break;
                    }
                }
                return betLine;
            }
        }

        /* This function calculates the player's winnings, if any */
        private DetermineWinnings() {
            if (this._blanks == 0) {
                if (this._grapes == 3) {
                    this._winnings = this._playerBet * 10;
                } else if (this._bananas == 3) {
                    this._winnings = this._playerBet * 20;
                } else if (this._oranges == 3) {
                    this._winnings = this._playerBet * 30;
                } else if (this._cherries == 3) {
                    this._winnings = this._playerBet * 40;
                } else if (this._bars == 3) {
                    this._winnings = this._playerBet * 50;
                } else if (this._lemons == 3) {
                    this._winnings = this._playerBet * 75;
                } else if (this._sevens == 3) {
                    this._winnings = this._playerBet * 100;
                } else if (this._grapes == 2) {
                    this._winnings = this._playerBet * 2;
                } else if (this._bananas == 2) {
                    this._winnings = this._playerBet * 2;
                } else if (this._oranges == 2) {
                    this._winnings = this._playerBet * 3;
                } else if (this._cherries == 2) {
                    this._winnings = this._playerBet * 4;
                } else if (this._bars == 2) {
                    this._winnings = this._playerBet * 5;
                } else if (this._lemons == 2) {
                    this._winnings = this._playerBet * 10;
                } else if (this._sevens == 2) {
                    this._winnings = this._playerBet * 20;
                } else if (this._sevens == 1) {
                    this._winnings = this._playerBet * 5;
                } else {
                    this._winnings = this._playerBet * 1;
                }
                this.showWinMessage();
            } else {
                this.showLossMessage();
            }

        }

        /* Check to see if the player won the jackpot */
        private checkJackPot() {
            /* compare two random values */
            var jackPotTry = Math.floor(Math.random() * 51 + 1);
            var jackPotWin = Math.floor(Math.random() * 51 + 1);
            if (jackPotTry == jackPotWin) {
                alert("You Won the $" + this._jackpot + " Jackpot!!");
                this._playerMoney += this._jackpot;
                this._jackpot = 1000;
            }
        }

        /* Utility function to show a win message and increase player money */
        private showWinMessage() {
            this._playerMoney += this._winnings;
            this.ResetFruitTally();
            this.checkJackPot();
        }

        /* Utility function to show a loss message and reduce player money */
        private showLossMessage() {
            this._playerMoney -= this._playerBet;
            this.ResetFruitTally();
        }

        /* Utility function to check if a value falls within a range of bounds */
        private checkRange(value, lowerBounds, upperBounds) {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            } else {
                return !value;
            }
        }

        // Event handlers
        public ResetEvent(event: createjs.MouseEvent): void {
            this.Reset();
        }

        private Quit(event: createjs.MouseEvent = null): void {
            managers.Game.currentState = config.Scene.OVER;
            this.Destroy();
        }

        private Spin(event: createjs.MouseEvent): void {
            this._spinResult = this.Reels();
            this.DisplayResults();
            this.DetermineWinnings();
        }

        // Changes to over scene if money is 0 or below
        private CheckMoney() {
            if (this._playerMoney <= 0) {
                this.Quit();
            }
        }

        // Checks and updates the bet amount
        // Hides spin button if invalid bet
        private CheckInput(): void {
            if (!isNaN(Number(managers.Game.playerBet.value))) {
                this._playerBet = parseInt(managers.Game.playerBet.value);
                if (this._playerBet <= this._playerMoney && this._playerBet > 0) {
                    if (!this._btnSpin.IsEnabled) {
                        this._btnSpin.IsEnabled = true;
                        this._btnSpin.addEventListener("click", this.Spin);
                    }
                } else {
                    this._btnSpin.IsEnabled = false;
                    this._btnSpin.off("click", this.Spin);
                }
            } else {
                this._btnSpin.IsEnabled = false;
                this._btnSpin.off("click", this.Spin);
            }
        }

        /* Utility function to reset the player stats */
        public ResetFruitTally() {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._lemons = 0;
            this._sevens = 0;
            this._blanks = 0;
        }

        public Start(): void {
            managers.Game.playerBet.value = "";
            managers.Game.playerBet.style.display = "inline";

            // Background objs
            this._playBackground = new objects.Background("gameBackground");
            this._slotMachine = new objects.Background("slotMachine", {scale: 0.75, isCentered: true, x: 320, y: 240});

            // Label objs
            this._lblJackpot = new objects.Label({
                labelString: "Jackpot:",
                fontColour: '#000000',
                x: 220,
                y: 105,
                isCentered: false
            });
            this._lblBet = new objects.Label({labelString: "Bet:", x: 210, y: 320, isCentered: false});
            this._lblMoney = new objects.Label({
                labelString: "Money:",
                fontColour: '#000000',
                x: 220,
                y: 390,
                isCentered: false
            });

            // Button objs
            this._btnQuit = new objects.Button({imageString: "quitButton", x: 510, y: 10, isCentered: false});
            this._btnReset = new objects.Button({imageString: "resetButton", x: 510, y: 100, isCentered: false});
            this._btnSpin = new objects.Button({imageString: "spinButton", x: 510, y: 250, isCentered: false});

            // Reel array. The individual reels are created after each spin
            this._reels = new Array<objects.Reel>();

            // Reel coordinates
            this._reelObjXLocation = new Array<number>();
            this._reelObjXLocation[0] = 235;
            this._reelObjXLocation[1] = 290;
            this._reelObjXLocation[2] = 340;

            // Binding event handlers to the play scene
            this.Quit = this.Quit.bind(this);
            this.ResetEvent = this.ResetEvent.bind(this);
            this.Spin = this.Spin.bind(this);
            this._btnQuit.addEventListener("click", this.Quit);
            this._btnReset.addEventListener("click", this.ResetEvent);

            this.Main();
            this.Reset();
        }

        public Main(): void {
            this.addChild(this._playBackground);
            this.addChild(this._slotMachine);

            this.addChild(this._lblBet);
            this.addChild(this._lblJackpot);
            this.addChild(this._lblMoney);

            this.addChild(this._btnQuit);
            this.addChild(this._btnReset);
            this.addChild(this._btnSpin);
        }

        public Update(): void {
            this.CheckInput();
            this._lblJackpot.text = "Jackpot: $" + this._jackpot;
            this._lblMoney.text = "Money: $" + this._playerMoney;
            this.CheckMoney();
        }

        public Reset(): void {
            this._spinResult = ["blank", "blank", "blank"];
            this.DisplayResults();
            this.ResetFruitTally();
            this._playerMoney = 1000;
            this._winnings = 0;
            this._jackpot = 5000;
            this._playerBet = 0;
        }

        public Destroy(): void {
            super.Destroy();
        }
    }
}
