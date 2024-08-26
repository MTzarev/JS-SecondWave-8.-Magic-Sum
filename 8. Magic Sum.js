function magicSum(arr, magicNum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Number(arr[i]) + Number(arr[j]) === Number(magicNum)) {
                console.log(`${Number(arr[i])} ${Number(arr[j])}`);

            }
        }
    }
    console.log();

}
magicSum([1, 7, 6, 2, 19, 23],
    8);
