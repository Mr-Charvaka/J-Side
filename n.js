/**
 * A function designed to have an extremely high time complexity.
 * WARNING: Do not run this function with a large input for `n`.
 * Even small values (like 10 or 11) will cause the browser/environment
 * to hang or crash as it will take an exceptionally long time to compute.
 *
 * @param {number} n - The input number. The complexity grows factorially and exponentially with n.
 * @returns {BigInt} A very large number, representing the number of operations.
 */
function exceedinglyComplexAlgorithm(n) {
    // We use BigInt because the number of operations will quickly exceed
    // the maximum safe integer in standard JavaScript numbers.
    let operations = 0n;

    /**
     * This is a recursive function whose complexity is approximately O((2^n) * n!).
     * The recurrence relation is T(n) = 2n * T(n-1), which expands to
     * a function involving both factorial (n!) and exponential (2^n) growth.
     * This is a classic example of a function that is computationally infeasible
     * for anything but the smallest inputs.
     *
     * @param {number} level - The current depth of the recursion.
     */
    function recursiveNightmare(level) {
        // Base case: stop the recursion.
        if (level <= 0) {
            return;
        }

        // This loop runs 'level' times.
        for (let i = 0; i < level; i++) {
            operations++; // Count an operation.

            // Two recursive calls are made in each iteration of the loop.
            // This branching is what causes the explosive growth in complexity.
            recursiveNightmare(level - 1);
            recursiveNightmare(level - 1);
        }
    }

    console.log(`Starting exceedinglyComplexAlgorithm with n = ${n}...`);
    const startTime = performance.now();

    recursiveNightmare(n);

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(4);
    console.log(`Finished in ${duration} ms.`);
    console.log(`Total operations performed: ${operations.toString()}`);

    return operations;
}

// --- Example Usage ---
// It's recommended to start with a very small number like 8 or 9.
// Increasing it by just 1 will make the execution time dramatically longer.
// For example:
// n=8  -> ~20ms
// n=9  -> ~200ms
// n=10 -> ~2 seconds
// n=11 -> ~25 seconds
// n=12 -> Will likely take several minutes and may freeze your browser.
const inputValue = 8;
exceedinglyComplexAlgorithm(inputValue);
