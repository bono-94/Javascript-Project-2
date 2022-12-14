/*List of all global and constant variables that are used across functions*/
const screenInsertLifecoin = document.getElementById('insert-lifecoin');
const placeLifecoinBackground = document.getElementById('insert-lifecoin-background');
const placeLifecoin = document.getElementById('insert-lifecoin-image');
const placeLifecoinImage = document.getElementById('insert-lifecoin-image-animation');
const userWins = 0;
const userLoss = 0;
const robotWins = 0;
const robotLoss = 0;
var audioInsert = document.getElementById("audio-insert");
var audioRocks = document.getElementById("audio-insert-rocks");
var audioWelcome = document.getElementById("audio-welcome");
var audioNewGame = document.getElementById("audio-select");
var audioError = document.getElementById("audio-error");
var audioBetSplash = document.getElementById("audio-button-splash");
var userRandomBalance = Math.floor(Math.random() * 21042004) + 2;
var robotRandomBalance = Math.floor(Math.random() * 21042004) + 2;
var userTotalBets = 0;
var userLastBet = 0;
var vaultReward = 0;
var robotLastBet = 0;
let earningsResultsWin = vaultReward + userRandomBalance;

/* INTRODUCTION */

/*This function starts animated process with sound effects after pressing the INSERT button on pre-created HTML file
- inserts a coin image to the correct slot
- plays sound of retro coin including earth shaking effect*/
function insertLifecoinAnimation () {
    
    audioInsert.volume = 0.5;
    audioInsert.play();
    placeLifecoinBackground.innerHTML =`
    <div id="insert-lifecoin-image">
        <img id="insert-lifecoin-image-animation" src="./assets/media/images/lifecoin-coin.png" alt="Floating lifecoin on the landing game screen">
    </div>
    `;
    audioRocks.volume = 0.5;
    audioRocks.play();
}  

/*This function removes entire pre-structured HTML code and sends user to the next function*/
function gameIntroTransfer () {
    
    screenInsertLifecoin.remove (); 
    screenGameIntroCreate ();
}

/*This function inserts new HTML code in the empty console and plays brand intro video that is skippable*/
function screenGameIntroCreate () {
 
    document.body.innerHTML =`
    <section id="game-intro">
        <div>
            <video src="./assets/media/video/intro.mp4" id="intro-video" autoplay onended="welcomeScreenTransfer()"></video>
        </div>
        <div id="skip-button">
            <button id="skip-intro" onclick="welcomeScreenTransfer()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("intro-video").volume = 0.2; 
}

/*This function removes entire intro video's HTML code and sends user to the next function*/
function welcomeScreenTransfer () {
    
    document.getElementById("game-intro").remove (); 
    welcomeScreenCreate ();
}

/*This function creates Welcome Screen, a landing page where user is introduced to game characters
- when user has landed, retro gaming melody plays on loop which is muteable by mute button
- there is an anchor image of development company logo that leads to external page
- start button plays retro sound effect before proceeding further*/
function welcomeScreenCreate () {

    document.body.innerHTML = `
    <section id="home-screen-game">
        <div id="start-mute">
            <button id="mute-start" onclick="startMusicStop()">
                <i class="fa-solid fa-volume-xmark"></i>
            </button>
        </div>
        <div id="home-screen-title">
            <h2>
                Welcome to the Bigger Fish game!
            </h2>
        </div>
        <div id="avatars">
            <div id="sharky">
                <img id="sharky-logo" src="./assets/media/images/sharky.png" alt="Sharky, the main game character">
            </div>
            <div id="robot">
                <img id="robot-logo" src="./assets/media/images/robot-icon.png" alt="Robot, the main game opponent">
            </div>
        </div>
        <div id="home-screen-tag">
            <h2>
                "There is always a bigger fish."
            </h2>
        </div>
        <div id="start-button">
            <button class="bttn-zero" id="start" onclick="gameLoadingOneTransfer()">
                <i class="fa-regular fa-circle-play"></i>
                START GAME
            </button>
        </div>
        <audio id="audio-newgame" onended="screenGameLoadingCreate()">
            <source src="./assets/media/audio/start.mp3" type="audio/mpeg">
        </audio>
        <div id="partners">
            <div id="partners-text">
                <h3>
                    Game by:
                </h3>
            </div>
            <a href="https://bono-94.github.io/Project-1-Code-Institute-HTML-CSS/" target="_blank" rel="noopener">
                <img id="lifecoin-logo" src="./assets/media/images/coin-logo-2d-slim.png" alt="Lifecoin logo representing development and ownership organization">
            </a>
        </div>
        <audio id="audio-welcome" autoplay loop>
            <source src="./assets/media/audio/welcome-music.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-welcome").volume = 0.2;
}

/*This function mutes Welcome Screen background melody after pressed mute button*/
function startMusicStop () {
    
    document.getElementById("audio-welcome").volume = 0.0;
}

/*This function plays retro sound effect that indicates the new game start*/
function gameLoadingOneTransfer () {
    
    document.getElementById("audio-newgame").volume = 0.4;
    document.getElementById("audio-newgame").play();
}

/*This function removes everythong from the Welcome Screen and inserts code with a skippable loading video*/
function screenGameLoadingCreate () {

    document.getElementById("home-screen-game").remove ();
    document.body.innerHTML = `
    <section id="game-outro-one">
        <div>
            <video id="video-loading" src="./assets/media/video/loading.mp4" autoplay onended="newGameScreenTransfer()"></video>
        </div>
        <div class="skip-load-button">
            <button class="skip-loading" onclick="newGameScreenTransfer()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("video-loading").volume = 0.1; 
}

/*This function removes entire loading screen video's HTML code and sends user to the next function*/
function newGameScreenTransfer () {
    document.getElementById("game-outro-one").remove (); 
    screenNewGameCreate ();
}

/* NEW GAME BOARD */

/*This function creates new Game Board by insterting new HTML code
- first alert from the website is raised reporting to user that the new game balance has been generated
- followed by sound effect of cash register
- user can now see the entire Game Board*/
function screenNewGameCreate () {

    document.body.innerHTML = `
    <section id="game">
        <div class="game-area">
            <div class="game-tracking">
                <div id="user-profile">
                    <div id="user-image">
                        <i class="fa-solid fa-head-side-virus"></i>
                    </div>
                    <div class="past-score-area" id="past-score-box-h">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-hw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-hl">
                                0
                            </span>
                        </p>
                    </div>
                </div>
                <div id="pc-profile">
                    <div id="pc-image">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="past-score-area" id="past-score-box-r">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-rw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-rl">
                                0
                            </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div class="game-board">
                <div id="balance-tracker">
                    <div id="virtual-balance">
                        <p class="virtual-balance">
                            <i class="fa-solid fa-coins"></i>
                            My Balance:
                        </p>
                        <p id="balance-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="total-bet">
                        <p class="total-bet">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            My Bets:
                        </p>
                        <p id="bet-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-user">
                        <p class="last-bet-user">
                            <i class="fa-solid fa-user"></i>
                            Last Bet:
                        </p>
                        <p id="bet-user-total">
                            $0
                        </p>
                    </div>
                </div>
                <div id="last-bets">
                    <div id="treasure-value">
                        <p class="treasure-value">
                            <i class="fa-solid fa-vault"></i>
                            Vault Reward:
                        </p>
                        <p id="treasure-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-robot">
                        <p class="last-bet-robot">
                            <i class="fa-solid fa-laptop-code"></i>
                            Last Bet:
                        </p>
                        <p id="bet-robot-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="robot-balance">
                        <p class="robot-balance">
                            <i class="fa-solid fa-coins"></i>
                            AI Balance:
                        </p>
                        <p id="robot-balance-total">
                            [UNDISCLOSED]
                        </p>
                    </div>
                </div>
            </div>
            <div class="contols-area-right">
                <button class="bttn-second" onclick="userChoicePrawnValidator()" id="bttn-one" data-choice="0">
                    Prawn ($1)
                </button>
                <button class="bttn-second" onclick="userChoiceCrabValidator()" id="bttn-two" data-choice="1">
                    Crab ($10)
                </button>
                <button class="bttn-second" onclick="userChoiceTurtleValidator()" id="bttn-three" data-choice="2">
                    Turtle ($50)
                </button>
                <button class="bttn-second" onclick="userChoiceOctopusValidator()" id="bttn-four" data-choice="3">
                    Octopus ($100) 
                </button>
                <button class="bttn-second" onclick="userChoiceSquidValidator()" id="bttn-five" data-choice="4">
                    Squid ($500)
                </button>
                <button class="bttn-second" onclick="userChoiceLobsterValidator()" id="bttn-six" data-choice="5">
                    Lobster ($1k)
                </button>
                <button class="bttn-second" onclick="userChoiceTunaValidator()" id="bttn-seven" data-choice="6">
                    Tuna ($10k)
                </button>
                <button class="bttn-second" onclick="userChoiceDolphinValidator()" id="bttn-eight" data-choice="7">
                    Dolphin ($100k)
                </button>
                <button class="bttn-second" onclick="userChoiceWhaleValidator()" id="bttn-nine" data-choice="8">
                    Whale ($1M)
                </button>
                <button class="bttn-second" onclick="userChoiceDragonValidator()" id="bttn-ten" data-choice="9">
                    Dragon ($10M)
                </button>
            </div>           
            <div class="controls-area-bottom">
                <button class="bttn-first" onclick="userFolded()" id="fold">
                    <i class="fa-solid fa-sack-xmark"></i>
                    FOLD
                </button>
            </div>
        </div>
        <audio id="audio-error">
            <source src="./assets/media/audio/error.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-button-splash">
            <source src="./assets/media/audio/splash-button.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-cashout">
            <source src="./assets/media/audio/cashier.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-calculating">
            <source src="./assets/media/audio/calculating.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-cashout").play();
    document.getElementById("audio-cashout").volume = 0.5;
    alert ("Congratulations! Your lifecoin has yielded a new game balance.");
    newGameSetupScores();
}

/*This function resets the user and robot(AI) score back to zero being a new game, not next game*/
function newGameSetupScores () {

    document.getElementById("past-score-counter-hw").innerHTML = userWins;
    document.getElementById("past-score-counter-hl").innerHTML = userLoss;
    document.getElementById("past-score-counter-rw").innerHTML = robotWins;
    document.getElementById("past-score-counter-rl").innerHTML = robotLoss; 
    newGameSetupBalances(); 
}

/*This function updates user's randomly generated balance and displays it on the game board
- user can now interact with the buttons and place bets*/
function newGameSetupBalances () {

    let userBalanceDisplayed = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = userRandomBalance;
}

/*This function validates first betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoicePrawnValidator () {
    if (1 < userRandomBalance) {
        userChoicePrawnPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoicePrawnPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1;
    userTotalBets += 1;
    userLastBet = 1;
    vaultReward += 1;
    choicesUpdaters();
}

/*This function validates second betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceCrabValidator () {
    
    if (10 < userRandomBalance) {
        userChoiceCrabPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceCrabPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10;
    userTotalBets += 10;
    userLastBet = 10;
    vaultReward += 10;
    choicesUpdaters();
}

/*This function validates third betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceTurtleValidator () {
    
    if (50 < userRandomBalance) {
        userChoiceTurtlePush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceTurtlePush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 50;
    userTotalBets += 50;
    userLastBet = 50;
    vaultReward += 50;
    choicesUpdaters();
}

/*This function validates fourth betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceOctopusValidator () {
    
    if (100 < userRandomBalance) {
        userChoiceOctopusPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceOctopusPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 100;
    userTotalBets += 100;
    userLastBet = 100;
    vaultReward += 100;
    choicesUpdaters();
}

/*This function validates fifth betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceSquidValidator () {
    
    if (500 < userRandomBalance) {
        userChoiceSquidPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceSquidPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 500;
    userTotalBets += 500;
    userLastBet = 500;
    vaultReward += 500;
    choicesUpdaters();
}

/*This function validates sixth betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceLobsterValidator () {
    
    if (1000 < userRandomBalance) {
        userChoiceLobsterPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceLobsterPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1000;
    userTotalBets += 1000;
    userLastBet = 1000;
    vaultReward += 1000;
    choicesUpdaters();
}

/*This function validates seventh betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceTunaValidator () {
    
    if (10000 < userRandomBalance) {
        userChoiceTunaPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceTunaPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10000;
    userTotalBets += 10000;
    userLastBet = 10000;
    vaultReward += 10000;
    choicesUpdaters();
}

/*This function validates eight betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceDolphinValidator () {
    
    if (100000 < userRandomBalance) {
        userChoiceDolphinPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceDolphinPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 100000;
    userTotalBets += 100000;
    userLastBet = 100000;
    vaultReward += 100000;
    choicesUpdaters();
}

/*This function validates ninth betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceWhaleValidator () {
    
    if (1000000 < userRandomBalance) {
        userChoiceWhalePush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceWhalePush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 1000000;
    userTotalBets += 1000000;
    userLastBet = 1000000;
    vaultReward += 1000000;
    choicesUpdaters();
}

/*This function validates tenth betting option if it is above the user's remaining balance
- if betting amount is smaller than the balance, user is sent to the next stage
- if betting amount is larger than the balance, website throws alert with sound effect that smaller amount needs to be chosen*/
function userChoiceDragonValidator () {
    
    if (10000000 < userRandomBalance) {
        userChoiceDragonPush();
    } else {
        document.getElementById("audio-error").play();
        document.getElementById("audio-error").volume = 0.2;
        alert ("Low balance! Please select a smaller amount.");
    }
}

/*This function calculates all relevant values on the tracking side of the Game Board with appropriate button value
- splashing sound effect informs the user that bet has been successfuly sent
- user is sent to the function that updates the new calculated values to the screen*/
function userChoiceDragonPush () {

    document.getElementById("audio-button-splash").play();
    document.getElementById("audio-button-splash").volume = 0.5;
    userRandomBalance -= 10000000;
    userTotalBets += 10000000;
    userLastBet = 10000000;
    vaultReward += 10000000;
    choicesUpdaters();
}

/*This function updates all calculated increases and decreases on the tracking board based on user's betting choice
- user's balance, total bets, last bet, total reward are changed on the Game Board
- function checks balance of both user and robot(AI) 
- if user's balance is less than 2$, they are sent to the Losing Screen
- if robot's(AI) balance is less than 2$, user is sent to the Winning Screen
- if both balances are above 2$, function initiates robot's response to user's bet*/
function choicesUpdaters () {

    let userBalanceDisplayedUpdater = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = "$" + userRandomBalance;
    let userTotalBetseDisplayed = document.getElementById('bet-total');
    document.getElementById('bet-total').innerHTML = "$" + userTotalBets;
    let userLastBetDisplayed = document.getElementById('bet-user-total');
    document.getElementById('bet-user-total').innerHTML = "$" + userLastBet;
    let vaultRewardDisplayed = document.getElementById('treasure-total');
    document.getElementById('treasure-total').innerHTML = "$" + vaultReward;
    let robotLastBetDisplayed = document.getElementById('bet-robot-total');
    document.getElementById('bet-robot-total').innerHTML = "$" + robotLastBet;
    if (robotRandomBalance < 2) {
        alert("Robot does not have enough balance to continue the game.");
        screenWinningTransfer();
    } else if (userRandomBalance < 2) {
        alert("You do not have enough balance to continue the game.");
        screenLosingTransfer();
    } else {
        initiateRobotResponse(); 
    }
}

/*This function intiates robot(AI) to generate a random betting choice as a response to user's input
- first it generates random number above robot's current balance
- random number is then filtered and matched with the closest 10 values that user can also only choose from
- each matched value initiates relevant calculating function*/
function initiateRobotResponse () {

    var robotRandomBet = Math.floor(Math.random() * robotRandomBalance) + 1; 
    if (robotRandomBet > robotRandomBalance) {
        var robotRandomBet = Math.floor(Math.random() * robotRandomBalance) + 1; 
    } else {
        if (0 < robotRandomBet && robotRandomBet < 10) {
            prawnRobotBet ();
        } else if (robotRandomBet < 50) {
            crabRobotBet ();
        } else if (robotRandomBet < 100) {
            turtleRobotBet ();
        } else if (robotRandomBet < 500) {
            octopusRobotBet ();
        } else if (robotRandomBet < 1000) {
            squidRobotBet ();
        } else if (robotRandomBet < 10000) {
            lobsterRobotBet ();
        } else if (robotRandomBet < 100000) {
            tunaRobotBet ();
        } else if (robotRandomBet < 1000000) {
            dolphinRobotBet ();
        } else if (robotRandomBet < 5000000) {
            whaleRobotBet ();
        } else if (robotRandomBet < 10000000) {
            dragonRobotBet ();
        }
    }
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function prawnRobotBet () {

    robotRandomBalance -= 1;
    robotLastBet = 1;
    vaultReward += 1;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function crabRobotBet () {

    robotRandomBalance -= 10;
    robotLastBet = 10;
    vaultReward += 10;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function turtleRobotBet () {

    robotRandomBalance -= 50;
    robotLastBet = 50;
    vaultReward += 50;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function octopusRobotBet () {

    robotRandomBalance -= 100;
    robotLastBet = 100;
    vaultReward += 100;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function squidRobotBet () {

    robotRandomBalance -= 500;
    robotLastBet = 500;
    vaultReward += 500;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function lobsterRobotBet () {

    robotRandomBalance -= 1000;
    robotLastBet = 1000;
    vaultReward += 1000;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function tunaRobotBet () {

    robotRandomBalance -= 10000;
    robotLastBet = 10000;
    vaultReward += 10000;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function dolphinRobotBet () {

    robotRandomBalance -= 100000;
    robotLastBet = 100000;
    vaultReward += 100000;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function whaleRobotBet () {

    robotRandomBalance -= 1000000;
    robotLastBet = 1000000;
    vaultReward += 1000000;
    choicesUpdatersRobot();
}

/*This function calculates new values for aspects relevant to robot's totals
- robot's undisclosed total balance is decreased and total vault reward increased by the robot's betting choice value
- robot's last bet tracker is replaced by the same value chosen
- initiates robot's values updating function*/
function dragonRobotBet () {

    robotRandomBalance -= 10000000;
    robotLastBet = 10000000;
    vaultReward += 10000000;
    choicesUpdatersRobot();
}

/*This function updates all new calculated relevant robot's values to the tracking board
- ending of entire robot betting processes is indicated by retro calculation sound effect*/
function choicesUpdatersRobot () {

    document.getElementById("audio-calculating").play();
    document.getElementById("audio-calculating").volume = 0.1;
    let vaultRewardDisplayed = document.getElementById('treasure-total');
    document.getElementById('treasure-total').innerHTML = "$" + vaultReward;
    let robotLastBetDisplayed = document.getElementById('bet-robot-total');
    document.getElementById('bet-robot-total').innerHTML = "$" + robotLastBet;
}

/*When user folds and decides to escape with remaining balance, alert in thrown and user transferred to the Folded Screen*/
function userFolded () {

    alert("You have decided to swim away with your remaining balance.");
    screenFoldedTransfer();
}

/*This function removes entire game board's HTML code and sends user to the Winning Screen*/
function screenWinningTransfer () {

    document.getElementById("game").remove();
    screenWinningCreate();
}

/*This function removes entire game board's HTML code and sends user to the Losing Screen*/
function screenLosingTransfer () {

    document.getElementById("game").remove();
    screenLosingCreate();
}

/*This function removes entire game board's HTML code and sends user to the Folded Screen*/
function screenFoldedTransfer () {

    document.getElementById("game").remove();
    screenFoldedCreate();
}

/*RESULTS SCREENS*/

/*This function creates Winning Screen by insterting new HTML code
- user is presented with winning outcome followed by appropriate short sound effect
- user is presented with a winning amount, new balance including winning amount and winning score icrease
- user can press a button to start a next game*/
function screenWinningCreate () {

    document.body.innerHTML = `
    <section id="winning-screen">
        <div id="winning-screen-title">
            <h2 class="game-results-screen-h-two">
                YOU WON!
                <i class="fa-solid fa-trophy"></i>
            </h2>
        </div>
        <div id="winning-screen-image">
            <img class="results-covers" id="winning-cover" src="./assets/media/images/treasure-small.jpg" alt="Image of treasure chest full of coins">
        </div>
        <div class="results-text" id="winning-screen-text">
            <h3>
                Congratulations! You were the bigger fish this time.
            </h3>
        </div>
        <div class="results-results" id="winning-screen-results">
            <p>
                - You won a treasure chest in value of <span id="treasure-results-w">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-w">$0</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-w">[0]</span> : <span id="loss-score-results-w">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="winning-screen-button">
            <button onclick="screenGameLoadingTwoNextGameTransferW()">
                <i class="fa-regular fa-circle-play"></i>
                Next Game
            </button>
        </div>
        <audio id="audio-win">
            <source src="./assets/media/audio/win.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-win").volume = 0.2;
    document.getElementById("audio-win").play();
    winScreenResultsPush();
}

/*This function calculates and updates winning scores*/
function winScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let earningsResultsWin = vaultReward + userRandomBalance;
    let resultTreasure = document.getElementById('treasure-results-w');
    document.getElementById('treasure-results-w').innerHTML = "$" + vaultReward;
    let resultBalance = document.getElementById('balance-results-w');
    document.getElementById('balance-results-w').innerHTML = "$" + earningsResultsWin;
    let resultWins = document.getElementById('win-score-results-w');
    document.getElementById('win-score-results-w').innerHTML = "[" + newWins + "]";
    let resultLoss = document.getElementById('loss-score-results-w');
    document.getElementById('loss-score-results-w').innerHTML = "[" + userLoss + "]";
}

/*This function creates Losing Screen by insterting new HTML code
- user is presented with losing outcome followed by appropriate short sound effect
- user is presented with a losing amount, no balance and losing score icrease
- user can press a button to start a new game*/
function screenLosingCreate () {

    document.body.innerHTML = `
    <section id="losing-screen">
        <div id="losing-screen-title">
            <h2 class="game-results-screen-h-two">
                GAME OVER!
                <i class="fa-solid fa-skull-crossbones"></i>
            </h2>
        </div>
        <div class="result-covers-box" id="losing-screen-image">
            <img class="results-covers" id="losing-cover" src="./assets/media/images/broke-small.jpg" alt="Image of person emptying out their pockets with small change representing no funds to proceed">
        </div>
        <div class="results-text" id="losing-screen-text">
            <h3>
                Unfortunately, you were the smaller fish this time.
            </h3>
        </div>
        <div class="results-results" id="losing-screen-results">
            <p>
                - You lost a treasure chest in value of <span id="treasure-results-l">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-l">$0</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-l">[0]</span> : <span id="loss-score-results-l">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="losing-screen-button">
            <button onclick="screenGameLoadingTwoNextGameTransferL()">
                <i class="fa-solid fa-rotate-left"></i>
                New Game
            </button>
        </div>
        <audio id="audio-loss">
            <source src="./assets/media/audio/losing.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-loss").volume = 0.2;
    document.getElementById("audio-loss").play();
    lossScreenResultsPush();
}

/*This function calculates and updates losing scores*/
function lossScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let resultTreasureLoss = document.getElementById('treasure-results-l');
    document.getElementById('treasure-results-l').innerHTML = "$" + vaultReward;
    let resultBalanceLoss = document.getElementById('balance-results-l');
    document.getElementById('balance-results-l').innerHTML = "$0";
    let resultWinsLoss = document.getElementById('win-score-results-l');
    document.getElementById('win-score-results-l').innerHTML = "[" + userWins + "]";
    let resultLossLoss = document.getElementById('loss-score-results-l');
    document.getElementById('loss-score-results-l').innerHTML = "[" + newLoss + "]";
}

/*This function creates Folded Screen by insterting new HTML code
- user is presented with losing outcome followed by appropriate short sound effect
- user is presented with a lost amount, remaining not betted balance and losing score icrease
- user can press buttons to either start a new game or next game*/
function screenFoldedCreate () {

    document.body.innerHTML = `
    <section id="folded-screen">
        <div id="folded-screen-title">
            <h2 class="game-results-screen-h-two">
                TRY AGAIN!
                <i class="fa-solid fa-dice"></i>
            </h2>
        </div>
        <div class="result-covers-box" id="folded-screen-image">
            <img class="results-covers" id="folded-cover" src="./assets/media/images/orca-small.jpg" alt="Image of orca approaching surface, represents another opportunity for one of the largest fish to hunt again">
        </div>
        <div class="results-text" id="folded-screen-text">
            <h3>
                Luckily, you were a decent size of a fish. Enough to escape!
            </h3>
        </div>
        <div class="results-results" id="folded-screen-results">
            <p>
                - You lost a treasure chest in value of <span id="treasure-results-f">$0</span>.
            </p>
            <p>
                - Your available balance is now: <span id="balance-results-f">0$</span>.
            </p>
            <p>
                - Your current score is now: Wins <span id="win-score-results-f">[0]</span> : <span id="loss-score-results-f">[0]</span> Losses.
            </p>
        </div>
        <div class="results-button" id="folded-screen-button">
            <button id="results-f-next-game" onclick="screenGameLoadingTwoNextGameTransferF()">
                <i class="fa-regular fa-circle-play"></i>
                Next Game
            </button>
            <button id="results-f-new-game" onclick="screenGameLoadingTwoNewGameTransferF()">
                <i class="fa-solid fa-rotate-left"></i>
                New Game
            </button>
        </div>
        <audio id="audio-fold">
            <source src="./assets/media/audio/folded.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-fold").volume = 0.2;
    document.getElementById("audio-fold").play();
    foldScreenResultsPush();
}

/*This function calculates and updates folded scores*/
function foldScreenResultsPush () {

    var newLoss = userLoss + 1;
    var newWins = userWins + 1;
    let resultTreasureFold = document.getElementById('treasure-results-f');
    document.getElementById('treasure-results-f').innerHTML = "$" + vaultReward;
    let resultBalanceLoss = document.getElementById('balance-results-f');
    document.getElementById('balance-results-f').innerHTML = "$" + userRandomBalance;
    let resultWinsLoss = document.getElementById('win-score-results-f');
    document.getElementById('win-score-results-f').innerHTML = "[" + userWins + "]";
    let resultLossLoss = document.getElementById('loss-score-results-f');
    document.getElementById('loss-score-results-f').innerHTML = "[" + newLoss + "]";
}

/*This function removes entire Winning Screen's HTML code and sends user to the next game function*/
function screenGameLoadingTwoNextGameTransferW () {

    document.getElementById("winning-screen").remove();
    screenLoadingTwoWinsNextCreate();  
}

/*This function removes entire Losing Screen's HTML code and sends user to the new game function*/
function screenGameLoadingTwoNextGameTransferL () {
    
    document.getElementById("losing-screen").remove();
    screenLoadingTwoLossNewCreate();  
}

/*This function removes entire Folded Screen's HTML code and sends user to the next game function*/
function screenGameLoadingTwoNextGameTransferF () {

    document.getElementById("folded-screen").remove();
    screenLoadingTwoFoldNexCreate();  
}

/*This function removes entire Folded Screen's HTML code and sends user to the new game function*/
function screenGameLoadingTwoNewGameTransferF () {
    
    document.getElementById("folded-screen").remove();
    screenLoadingTwoFoldNewCreate();  
}

/*This function inserts new HTML code for the second skippable loading screen before transferring to the next game phase*/
function screenLoadingTwoWinsNextCreate () {

    document.body.innerHTML = `
    <section id="game-outro-two">
        <div>
            <video id="video-loading-two" src="./assets/media/video/loading.mp4" autoplay onended="nextGameTransferWon()"></video>
        </div>
        <div class="skip-load-button">
            <button class="skip-loading" onclick="nextGameTransferWon()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("video-loading-two").volume = 0.1;
}  

/*This function inserts new HTML code for the second skippable loading screen before reloading the window and bringing user to the home page*/
function screenLoadingTwoLossNewCreate () {

    document.body.innerHTML = `
    <section id="game-outro-three">
        <div>
            <video id="video-loading-three" src="./assets/media/video/loading.mp4" autoplay onended="window.location.reload()"></video>
        </div>
        <div class="skip-load-button">
            <button class="skip-loading" onclick="window.location.reload()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("video-loading-three").volume = 0.1;
}

/*This function inserts new HTML code for the second skippable loading screen before transferring to the next game phase*/
function screenLoadingTwoFoldNexCreate () {

    document.body.innerHTML = `
    <section id="game-outro-four">
        <div>
            <video id="video-loading-four" src="./assets/media/video/loading.mp4" autoplay onended="nextGameTransferFold()"></video>
        </div>
        <div class="skip-load-button">
            <button class="skip-loading" onclick="nextGameTransferFold()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("video-loading-four").volume = 0.1;
}


/*This function inserts new HTML code for the second skippable loading screen before reloading the window and bringing user to the home page*/
function screenLoadingTwoFoldNewCreate () {

    document.body.innerHTML = `
    <section id="game-outro-five">
        <div>
            <video id="video-loading-five" src="./assets/media/video/loading.mp4" autoplay onended="window.location.reload()"></video>
        </div>
        <div class="skip-load-button">
            <button class="skip-loading" onclick="window.location.reload()">
                <i class="fa-solid fa-forward"></i>
                SKIP
            </button>
        </div>
    </section>
    `;
    document.getElementById("video-loading-five").volume = 0.1;
}

/*This function removes entire second loading screen video's HTML code and sends user to the next game function*/
function nextGameTransferWon () {

    document.getElementById("game-outro-two").remove();
    screenNextGameCreate();
}

/*This function removes entire second loading screen video's HTML code and sends user to the next game function*/
function nextGameTransferFold () {

    document.getElementById("game-outro-four").remove();
    screenNextGameCreate();
}

/*NEXT GAME BOARD*/

/*This function creates next Game Board by insterting new HTML code
- first alert from the website is raised reporting to user that the new game balance has been generated
- followed by sound effect of cash register
- user can now see the entire Game Board*/
function screenNextGameCreate () {

    document.body.innerHTML = `
    <section id="game">
        <div class="game-area">
            <div class="game-tracking">
                <div id="user-profile">
                    <div id="user-image">
                        <i class="fa-solid fa-head-side-virus"></i>
                    </div>
                    <div class="past-score-area" id="past-score-box-h">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-hw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-hl">
                                0
                            </span>
                        </p>
                    </div>
                </div>
                <div id="pc-profile">
                    <div id="pc-image">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                    <div class="past-score-area" id="past-score-box-r">
                        <p class="past-score-box">
                            Win:
                            <span id="past-score-counter-rw">
                                0
                            </span>
                        </p>
                        <p class="past-score-box">
                            Loss:
                            <span id="past-score-counter-rl">
                                0
                            </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div class="game-board">
                <div id="balance-tracker">
                    <div id="virtual-balance">
                        <p class="virtual-balance">
                            <i class="fa-solid fa-coins"></i>
                            My Balance:
                        </p>
                        <p id="balance-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="total-bet">
                        <p class="total-bet">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                            My Bets:
                        </p>
                        <p id="bet-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-user">
                        <p class="last-bet-user">
                            <i class="fa-solid fa-user"></i>
                            Last Bet:
                        </p>
                        <p id="bet-user-total">
                            $0
                        </p>
                    </div>
                </div>
                <div id="last-bets">
                    <div id="treasure-value">
                        <p class="treasure-value">
                            <i class="fa-solid fa-vault"></i>
                            Vault Reward:
                        </p>
                        <p id="treasure-total">
                            $0
                        </p>
                    </div>
                    <hr>
                    <div id="last-bet-robot">
                        <p class="last-bet-robot">
                            <i class="fa-solid fa-laptop-code"></i>
                            Last Bet:
                        </p>
                        <p id="bet-robot-total">
                            0$
                        </p>
                    </div>
                    <hr>
                    <div id="robot-balance">
                        <p class="robot-balance">
                            <i class="fa-solid fa-coins"></i>
                            AI Balance:
                        </p>
                        <p id="robot-balance-total">
                            [UNDISCLOSED]
                        </p>
                    </div>
                </div>
            </div>
            <div class="contols-area-right">
                <button class="bttn-second" onclick="userChoicePrawnValidator()" id="bttn-one" data-choice="0">
                    Prawn ($1)
                </button>
                <button class="bttn-second" onclick="userChoiceCrabValidator()" id="bttn-two" data-choice="1">
                    Crab ($10)
                </button>
                <button class="bttn-second" onclick="userChoiceTurtleValidator()" id="bttn-three" data-choice="2">
                    Turtle ($50)
                </button>
                <button class="bttn-second" onclick="userChoiceOctopusValidator()" id="bttn-four" data-choice="3">
                    Octopus ($100) 
                </button>
                <button class="bttn-second" onclick="userChoiceSquidValidator()" id="bttn-five" data-choice="4">
                    Squid ($500)
                </button>
                <button class="bttn-second" onclick="userChoiceLobsterValidator()" id="bttn-six" data-choice="5">
                    Lobster ($1k)
                </button>
                <button class="bttn-second" onclick="userChoiceTunaValidator()" id="bttn-seven" data-choice="6">
                    Tuna ($10k)
                </button>
                <button class="bttn-second" onclick="userChoiceDolphinValidator()" id="bttn-eight" data-choice="7">
                    Dolphin ($100k)
                </button>
                <button class="bttn-second" onclick="userChoiceWhaleValidator()" id="bttn-nine" data-choice="8">
                    Whale ($1M)
                </button>
                <button class="bttn-second" onclick="userChoiceDragonValidator()" id="bttn-ten" data-choice="9">
                    Dragon ($10M)
                </button>
            </div>           
            <div class="controls-area-bottom">
                <button class="bttn-first" onclick="userFolded()" id="fold">
                    <i class="fa-solid fa-sack-xmark"></i>
                    FOLD
                </button>
            </div>
        </div>
        <audio id="audio-error">
            <source src="./assets/media/audio/error.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-button-splash">
            <source src="./assets/media/audio/splash-button.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-cashout">
            <source src="./assets/media/audio/cashier.mp3" type="audio/mpeg">
        </audio>
        <audio id="audio-calculating">
            <source src="./assets/media/audio/calculating.mp3" type="audio/mpeg">
        </audio>
    </section>
    `;
    document.getElementById("audio-cashout").play();
    document.getElementById("audio-cashout").volume = 0.5;
    alert ("Congratulations! Your lifecoin has yielded a new game balance.");
    nextGameSetupScores();
}
  
/*This function updates the user and robot(AI) scores based on the Winning or Folded Screens results*/
function nextGameSetupScores () {

    var newWins = userWins + 1;
    var newRobotLoss = robotLoss + 1;
    document.getElementById("past-score-counter-hw").innerHTML = newWins;
    document.getElementById("past-score-counter-hl").innerHTML = userLoss;
    document.getElementById("past-score-counter-rw").innerHTML = robotWins;
    document.getElementById("past-score-counter-rl").innerHTML = newRobotLoss; 
    nextGameSetupBalances(); 
}

/*This function updates user's previous total balance and displays it on the next game board
- user can now interact with the buttons and place bets*/
function nextGameSetupBalances () {

    let earningsResultsWin = vaultReward + userRandomBalance;
    let userBalanceDisplayed = document.getElementById('balance-total');
    document.getElementById('balance-total').innerHTML = earningsResultsWin;
}
