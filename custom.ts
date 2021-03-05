
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {

    //% block="occasionally"
    export function abc(cb: () => void): void {
        control.setInterval(function () {
            cb();
        }, 5e3 + 10e3 * Math.random(), control.IntervalMode.Interval)
    }

    //% block="on PPM reading"
    //% draggableParameters=reporter
    export function ppm(cb: (latestPPM: number) => void): void {
        control.setInterval(function () {
            cb(Math.random());
        }, 1e3, control.IntervalMode.Interval)
    }

    //% block="PPM reading"
    export function getPPM(): number {
        return Math.random();
    }

    //% block="calibrate sensor"
    export function doCalibration(): void {}

    //% block="tell sensor that %x is our altitude"
    export function setAlt(alt: number): void {
        console.log(`setAlt: ${alt}`);
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
