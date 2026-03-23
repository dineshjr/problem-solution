function trapWater(height) {
    let n = height.length;

    let leftMax = new Array(n);
    let rightMax = new Array(n);

    // Step 1: Fill leftMax
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Step 2: Fill rightMax
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Step 3: Calculate water
    let totalWater = 0;

    for (let i = 0; i < n; i++) {
        let water = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (water > 0) {
            totalWater += water;
        }
    }

    return totalWater;
}
