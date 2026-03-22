function maxProfitDP(n) {
    let dp = new Array(n + 1).fill(0);

    for (let time = 1; time <= n; time++) {

        // Try building Theatre
        if (time >= 5) {
            let profit = dp[time - 5] + (time - 5) * 1500;
            dp[time] = Math.max(dp[time], profit);
        }

        // Try building Pub
        if (time >= 4) {
            let profit = dp[time - 4] + (time - 4) * 1000;
            dp[time] = Math.max(dp[time], profit);
        }

        // Try building Commercial
        if (time >= 10) {
            let profit = dp[time - 10] + (time - 10) * 2000;
            dp[time] = Math.max(dp[time], profit);
        }
    }

    return dp[n];
}