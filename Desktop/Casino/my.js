let money = document.querySelector('.money')
let users = document.querySelector('ul');
let casinoInput = document.querySelector('.casinoInput');
let casinoButton = document.querySelector('.casinoButton');
let scoreboard = document.querySelector('.playNumbers');
let resultNumber = document.querySelector(".resultNumber");
let machineName = document.querySelector('.machineName');
let userBalance = document.querySelector('.userBalance');
let addButton = document.querySelector('.addButton')



    ! function (e) {
        "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
            for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
            return Boolean(o[n])
        }), "function" != typeof e.closest && (e.closest = function (e) {
            for (var t = this; t && 1 === t.nodeType;) {
                if (t.matches(e)) return t;
                t = t.parentNode
            }
            return null
        })
    }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {


    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');



    modalButtons.forEach(function (item) {


        item.addEventListener('click', function (e) {

            e.preventDefault();


            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');



            modalElem.classList.add('active');
            overlay.classList.add('active');
        });

    });

    closeButtons.forEach(function (item) {

        addButton.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });



}); 



let randnum;


class GameMachine {
    constructor(number) {
        this.number = number;
    }

    get getMoney() {
        return this.number;
    }


    takeMoney(number) {
        if (this.number - number >= 0) {
            this.number = this.number - number;
        }

    }

    putMoney(number) {
        this.number = this.number + number;
    }
    play(number) {

        let num1 = randnum % 10;
        let num2 = parseInt(randnum / 10) % 10;
        let num3 = parseInt(randnum / 100);
        if ((num1 == num2) && (num1 == num3) && (num2 == num3)) {
            this.takeMoney(number * 3);
            return number * 3;
        } else if ((num1 == num2) || (num1 == num3) || (num2 == num3)) {
            this.takeMoney(number * 2);
            return number * 2;
        } else {
            this.putMoney(number);
            return 0;
        }
    }


}

class Casino {
    constructor(name) {
        this.name = name;
        this.machines = [];
    }

    addMachine(machine) {
        this.machines.push(machine);
    }

    deleteMachine(i) {
        if (this.machines.length != 0 && i < this.machines.length && i >= 0) {
            var cash = Math.floor((this.machines[i].getMoney) / (this.machines.length - 1));
            this.machines.splice(i, 1);
            for (var i = 0; i < this.machines.length; i++) {
                this.machines[i].putMoney(cash);
            }
        }
    }

    TakeAllMoney()
    {
        var cash = this.getMoney;
        for (var i = 0; i < this.machines.length; i++) {
                this.machines[i].takeMoney(this.machines[i].getMoney);
            }
        return cash;
    }
    get getMoney() {
        var s = 0;
        for (var i = 0; i < this.machines.length; i++) {
            s += this.machines[i].getMoney;
        }
        return s;
    }

    get getMachineCount() {
        return this.machines.length;
    }
}

class User {
    constructor(name, money) {
        this.name = name;
        this.money = money;

    }

    get getMoney() {
        return this.money;
    }

    get getName() {
        return this.name;
    }

    takeMoney(money) {
        if (this.money - money >= 0) {
            this.money = this.money - money;
        }

    }

    putMoney(money) {
        this.money = this.money + money;
    }

}


class SuperAdmin extends User {


    addCasino(name) {
        this.cas = new Casino(name);
    }

    addMachine(value) {
        if (this.cas != null) {
            var machine = new GameMachine(value);
            this.cas.addMachine(machine);
            this.takeMoney(value);
        }
    }

    deleteMachine(i) {
        if (this.cas != null) {
            this.cas.deleteMachineMachine(i);
        }
    }
    
    takeMoneyfromCasino()
    {
       return this.cas.TakeAllMoney();
        
    }
}


let betValue = 1000
var gM1 = new GameMachine(betValue);



casinoButton.addEventListener('click', function () {
    if (casinoInput.value <= 0) {
        alert("Enter a number more than zero.");
    } else if (casinoInput.value > betValue / 3) {
        alert("You have exceeded your maximum bid.");
    } else {
        randnum = Math.floor(Math.random() * 899 + 100);
        scoreboard.innerHTML = randnum;
        resultNumber.innerHTML = gM1.play(Number(casinoInput.value));
        money.innerHTML = gM1.getMoney + '$';
    }

});
