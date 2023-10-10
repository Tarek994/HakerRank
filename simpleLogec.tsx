// Simple Javascript fun

function createHelloWorld() {
    
    return function(...args: any[]): string {
       return "Hello World";
   };
};

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/

/* Counter */

function createCounter(n: number): () => number {
    let count = n;

     function counter() {
		return count++;
    }
    return counter;
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


   /* 2704. To Be Or Not To Be */
   
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (expectedVal: any) => {
            if (val === expectedVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (expectedVal: any) => {
            if (val !== expectedVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    };
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */