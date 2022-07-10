export function randInRange(min: number, max: number) {
    return Math.floor((Math.random() * (max-min)) + min);
}

export function randInArray(arr: string[]) {
    const num=(randInRange(0, arr.length));
    return (arr[num]);
}
export const loveL=["(=✖ᆽ✖=)", "(ﾐዋ ﻌ ዋﾐ)", "=^._.^= "];
export const loveM=["(=ↀωↀ=)", "(=◉ ◡ ◉=)", "(₌ ᵕ̣̣̣̣̣ ᆽ ᵕ̣̣̣̣̣₌)"];
export const loveH=["(=^･ω･^=)", "(๑✪ᆺ✪๑)", "^.ᆽ.^= ∫"];
export const healthL=["=ộ⍛ộ=", "(Φ ᆺ Φ)", "(ﾐ ᵕ̣̣̣̣̣̣ ﻌ ᵕ̣̣̣̣̣̣ ﾐ)"];
export const healthM=["（ꏿ ω ꏿ）", "(ﾐ ᵕ̣̣̣̣̣̣ ﻌ ᵕ̣̣̣̣̣̣ ﾐ)", "(^≗ω≗^)"];
export const healthH=["*◡*", "=^∇^*", "(＾º◡º＾✥)"];

export function nextFace(l: number, h: number) {
    if(l<h) {
        if(l<=0.3) return randInArray(loveL);

        if(l<=0.6) return randInArray(loveM);
        
        return randInArray(loveH);
    }
    if(l<=0.3) return randInArray(healthL);
    
    if(l<=0.6) return randInArray(healthM);
    
    return randInArray(healthL);
}

export function prob() {
    const value = randInRange(0, 100);
    if(value==1) return true;
    return false; 
}

export class Data {
    _health = 0.0
    _love = 0.0
    constructor(love: number, health: number) {
        this._love = love;
        this._health = health;
    }
    get love() {
        return this._love;
    }
    set love(val) {
        this._love = val;
        (document.querySelector("#love .bar") as HTMLDivElement).style.width = `${val * 100}%`
    }
    get health(): number {
        return this._health;
    }
    set health(val: number) {
        this._health = val;
        (document.querySelector("#battery .bar") as HTMLDivElement).style.width = `${val * 100}%`
    }
}
