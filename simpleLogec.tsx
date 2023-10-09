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

     function conter() {
		return count++;
    }
    return conter;
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

